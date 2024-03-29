---
layout: post
title: "Java의 동시성 프로그래밍 - Lock"
tags:
  - Java
lang: ko-KR
date: 2023-09-19
update: 2023-09-19
series: "Java의 동시성 프로그래밍"
---
## ReentrantLock
고유락(intrinsic locking, synchronized lock. monitor lock)과 달리 ReentrantLock은 폴링, 타임아웃, 인터럽트 가능한 잠금 획득을 선택할 수 있으며, 모든 잠금 및 해제 연산이 명시적이다. 아래 Lock 인터페이스는 추상적인 잠금 연산을 정의한다.

```JAVA
public interface Lock {

    void lock();

    void lockInterruptibly() throws InterruptedException;

    boolean tryLock();

    boolean tryLock(long timeout, TimeUnit unit)
            throws InterruptedException;

    void unlock();

    Condition newCondition();
}

```

ReentrantLock은 Lock 인터페이스를 구현한 구현체하여, ReentrantLock을 획득과 해제는 synchronized 블록에 진입하고 종료하는 것과 동일한 메모리 시맨틱(가시성)을 가진다.

ReentrantLock을 사용하는 이유는 고유락의 한계 때문에 탄생하였다. 고유락은 데드락 같은 상황이 발생하더라도 영원히 대기해야 되고 또, 코드 블록 단위로 잠금을 획득하고 해제되어야 되기 때문에 좀 더 유연한 잠금 메커니즘이 필요하거나 더 나은 성능을 위해 탄생되었다. 잠금 관리에 많은 리소스가 사용되면 애플리케이션이 사용할 수 있는 리소스가 줄어들기 때문이다.

ReentrantLock은 고유락보다 더 많은 주의가 필요한데 락의 해제를 직접 관리해주어야 되기 때문에 더 많은 주의가 필요하다.

```JAVA
Lock lock = new ReentrantLock(); ...
lock.lock();
try {
    // update object state
    // catch exceptions and restore invariants if necessary
} finally {
    lock.unlock();
}
```
> Java 6.0 부터 synchronized와 비교했을 때 ReentrantLock 이 성능적으로 약간 더 우세하다고 한다.
성능 상의 이유로 synchronized 대신 ReentrantLock 을 사용하는 것은 불필요한 복잡성을 추가하는 것일 수 있으므로, 특별한 이유가 없다면 굳이 그렇게 할 필요가 없다고 생각한다.

## 타임아웃 Lock
lock::tyrLock 을 사용하면 고유락보다 더 정교한 오류 복구가 가능해진다. 고유락을 사용하여 데드락이 발생하면 애플리케이션을 재시작해야만 복구할 수 있지만 시간제한 잠금은 확률론적 방식으로 교착 상태 회피를 제공한다.
lock::lockInterruptibly 메서드는 락을 획득하려고 시도할 때, 현재 스레드가 인터럽트되었는지도 확인한다. 락을 기다리는 동안 인터럽트가 발생하면 예외처리가 가능하고 고유락 처럼 무한정 대기하여 데드락에 빠지는 상황을 방지할 수 있다.

```JAVA
Lock lock = new ReentrantLock();

try {
    lock.lockInterruptibly();
    try {
        // Critical section
    } finally {
        lock.unlock();
    }
} catch (InterruptedException e) {
    // Handle interruption
}
```

## 공정성(fairness)
ReentrantLock 생성자에는 boolean 타입의 fairness 공정성 옵션을 제공한다.
- 공정한 락(Fair Lock): 스레드들이 요청한 순서대로 락을 획득한다. 즉, 먼저 요청한 스레드가 먼저 락을 얻는다.
- 비공정한 락(Nonfair Lock): 락이 사용 가능한 상태에서 요청한 스레드는 대기 중인 스레드를 무시하고 락을 바로 획득할 수 있다. 이를 "barging"이라고 한다. (기본값)

공정성은 항상 옳은 것 처럼 보일 수 있지만 실제로는 성낭 상의 비용이 발생하여 비공정한 락이 대부분의 경우에 더 높은 성능을 보인다. 비공정한 락에서는 "barging"이라는 현상이 성능을 향상시킨다. 예를 들어, 스레드 A가 락을 보유하고 있고, 스레드 B가 그 락을 요청했다면, B는 대기 상태로 들어간다. A가 락을 해제하면, B는 다시 실행되고, 그 사이에 스레드 C가 락을 요청하면, C는 B가 깨어나기도 전에 락을 얻을 수 있다. 이로 인해 전반적인 처리량(throughput)이 향상될 수 있다. 공정한 락은 락을 오랫동안 보유하여 락 요청 시 대기 시간이 길 때 비공정 락 방식보다 유리할 수 있다.

비공정한 락에서는 락을 요청한 순서와 무관하게 락을 획득할 수 있어 일부 스레드는 락을 획득하지 못하는 기아 상태가 발생할 수 있다. 대부분의 비공정한 락의 구현은 통계정 공정성을 기반으로 하는데 통계적 공정성이란 시스템이 모든 작업에 완벽한 공정성을 보장하지 않더라도, 긴 시간 동안 봤을 때 거의 모든 요청 또는 작업이 공정하게 처리될 것이라는 확률적인 보장을 의미한다.

## Read-write locks
대부분의 데이터 구조는 읽기 중심 작업으로 때때로 수정 작업이 발생한다. Read-write lock은 리소스는 여러 읽기 작업에 의해 동시에 접근될 수 있지만, 쓰기 작업이 일어날 때는 해당 리소스에 단독으로 접근하며 다른 읽기나 쓰기 작업은 접근할 수 없게 된다. 이러한 방식은 데이터의 일관성을 유지하면서 동시성(concurrency)을 높일 수 있다.

```JAVA
public interface ReadWriteLock {
    Lock readLock();
    Lock writeLock();
}
```

ReadWriteLock을 구현하기 위해서는 아래와 같은 고려사항이 있을 수 있다.
- Release Preference: 쓰기 락(write lock)이 해제될 때 대기 중인 읽기 작업(readers)과 쓰기 작업(writers) 중 누구에게 우선권을 줄 것인지를 의미한다. 이를 선택하는 방법에 따라 성능과 공정성이 달라질 수 있다.

- Reader Barging: 읽기 락(read lock)이 활성화되어 있고 쓰기 작업(writer)이 대기 중일 때, 새로 도착하는 읽기 작업이 즉시 접근할 수 있을지, 아니면 대기 중인 쓰기 작업 뒤에 줄을 서야 하는지를 의미한다. 읽기 작업이 쓰기 작업보다 먼저 접근하는 것은 동시성을 향상시키지만, 쓰기 작업이 계속 대기 상태에 머물러 기아 상태에 빠질 수 있다.

- Reentrancy: 읽기 락과 쓰기 락이 재진입 가능한지(reentrant) 여부입니다. 재진입 가능하다는 것은 하나의 스레드가 이미 획득한 락을 다시 획득할 수 있다는 의미이다.

- Downgrading: 쓰기 락을 보유하고 있는 스레드가 쓰기 락을 해제하지 않고 읽기 락을 획득할 수 있는지 여부입니다. 이렇게 하면 쓰기 작업을 수행한 후에 읽기 작업으로 레벨을 낮춰서 다른 쓰기 작업이 도중에 리소스를 변경하지 못하게 할 수 있다.

- Upgrading: 읽기 락을 보유하고 있는 상태에서 쓰기 락으로 업그레이드할 수 있는지 여부입니다. 대부분의 읽기-쓰기 락 구현체에서는 업그레이드를 지원하지 않는데, 두 개의 리더가 동시에 쓰기 잠금으로 업그레이드를 시도하면 어느 쪽도 읽기 잠금을 해제못하는 데드락이 발생할 수 있기 때문이다.


## 참조
- Java Concurrency in practice