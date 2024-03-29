---
layout: post
title: "Java의 동시성 프로그래밍 - Executor"
tags:
  - Java
lang: ko-KR
date: 2023-09-17
update: 2023-09-17
series: "Java의 동시성 프로그래밍"
---

## Executor

Task는 논리적인 작업 단위이며, 스레드는 Task를 비동기적으로 실행할 수 있는 기술이다. Java에서는 Task 실행을 추상화하여 Executor 라는 인터페이스를 제공한다. Executor는 다양한 Task 실행 정책을 지원하는 비동기 프레임워크에 기반이 된다.

```JAVA
public interface Executor {

	void execute(Runnable command);
}
```

Executor 구현은 통계 수집, 애플리케이션 관리 및 모니터링을 추가하기 위한 라이프사이클 지원 및 후크를 제공한다.
Executor는 생산자-소비자 패턴을 기반으로 Task을 등록하는 작업과 Task를 처리하는 작업을 분리하였다.
Task의 등록과 처리를 분리는 특정 Task의 실행 정책을 쉽게 변경할 수 있다는 장점이 있다.
실행 정책은 무엇을, 어디서, 언제, 어떻게를 포함한다.

- Task는 어떤 스레드에서 실행되는가?
- Task는 어떤 순서로 실행되어야 하는가? (FIFO, LIFO, Priority)
- 동시에 실행할 수 있는 작업 수는?
- 몇 개의 작업이 실행 대기열에 포함될 수 있나?
- 처리량 제한으로 작업을 거부해야하는 경우, 어떻게 처리해야 하나?
- 작업을 실행하기 전후 조치는?

> 현재 new Thread(runnable).start() 와 같은 저수준의 스레드를 직접 다루고 있다면 Executor 나 비동기 프레임워크 사용을 적극적으로 고려해보는 것이 좋다.

## Executor 라이프사이클

Executor는 Task를 비동기적으로 처리하기 때문에 특정 시점에 제출된 작업의 상태를 즉시 알 수 없다.
완료되거나 실행 중이거나 실행대기 중일 수 도 있다. Executor는 애플리케이션이 정상적으로 또는 갑작스럽게 종료되더라도 종료로 인한 영향받는 작업의 상태 정보를 애플리케이션에 전달할 수 있어야 한다.
Executor의 수명 주기 문제를 해결하기 위해 ExecutorService 인터페이스는 Executor를 확장하여 라이프 사이클 관리를 위한 여러 가지 메서드를 제공한다.

```JAVA
public interface ExecutorService extends Executor {

	void shutdown();

	List<Runnable> shutdownNow();

	boolean isShutdown();

	boolean isTerminated();

	boolean awaitTermination(long timeout, TimeUnit unit) throws InterruptedException;
	//...
}
```

> ExecutorService , ExecutorCompletionService 차이
> ExecutorService 는 Task를 제출한 순서대로 결과를 가져와서 처리할 수 있다.
> ExecutorCompletionService 는 Task를 제출한 순서와 상관없이 내부적으로 BlockingQueue 사용하여 완료된 작업 목록 리스트를 유지하여 완료된 Task를 poll 하거나 take할 수 있다.

## ThreadPoolExecutor

ThreadPoolExecutor 는 Executors의 정적 팩토리 메서드로 생성할 수 있는 newCachedThreadPool, newFixedThreadPool, newScheduledThreadPool 의 기본 구현을 제공한다.
기본 구현의 실행 정책이 필요에 맞지 않는 경우 ThreadPoolExecutor 생성자를 통해 정의할 수 있다.

```JAVA
public ThreadPoolExecutor(int corePoolSize,
		int maximumPoolSize,
		long keepAliveTime,
		TimeUnit unit,
		BlockingQueue<Runnable> workQueue,
		ThreadFactory threadFactory,
		RejectedExecutionHandler handler
		) 
```

- corePoolSize : 스레드 수의 하한, 최소 corePoolSize 만큼의 스레드 수를 유지한다. workQueue가 꽉 차지 않는 이상 스레드 수를 늘리지 않는다.
- maximumPoolSize : 스레드 수의 상한, workQueue가 꽉찰 경우 최대로 생성될 수 있는 스레드 수
- keepAliveTime : 유휴 상태인 스레드가 keepAliveTime 시간이 지나면 스레드를 회수하여 corePoolSize를 유지한다.

Task 마다 스레드를 생성해서 처리하는 것과 비교하여 스레드 풀을 사용하면 CPU를 차지하기 위해 경쟁하면서 대기하는 대신 ThreadPoolExecutor를 사용하면 ThreadPoolExecutor이 관리하는 Runnable Queue에서 대기시킬 수 있다. 이는 스레드를 직접
만들어 대기하는 것보다 훨씬 경제적이지만, 클라이언트가 서버가 처리할 수 있는 속도보다 더 많은 요청을 몰릴 경우 메모리 부족또는 응답 시간 지연 같은 문제가 여전히 발생할 수 있다.

ThreadPoolExecutor는 실행 대기 중인 태스크를 보관하기 위해 BlockingQueue를 사용할 수 있다. 이러한 Task 큐 종류에는 unbounded 큐, bounded 큐, synchronous handoff가 있다.
newFixedThreadPool 및 newSingleThreadExecutor 의 기본 Task 큐로는 unbounded LinkedBlockingQueue를 사용하는 것 이다. 따라서, 작업이 실행할 수 있는 속도보다 빨리 도착하는 경우 큐가 제한 없이 커질 수 있다.

보다 안정적인 리소스를 관리 전략으로는 ArrayBlockingQueue나 bounded LinkedBlockingQueue, PriorityBlockingQueue 와 같은 bounded 큐를 사용하는 것이다.

synchronous handoff은 큐를 사용하는 것이 아니라 스레드 간의 핸드 오프를 관리하는 메커니즘이다.
핸드 오프를 사용하는 SynchronousQueue는 작업을 큐에 넣고 소비자가 큐에서 작업을 꺼내서 실행하는 방식이 아니라 작업을 큐에 넣으려면 다른 스레드가 이미 핸드오프 수락을 위해 대기 중이어야 한다. 작업을 실행할 스레드에 바로 전달할 수 있으므로 더 효율적이다.
SynchronousQueue는 스레드풀이 무제한이거나 초과 작업을 거부하는 것이 허용되는 경우에 유용한 선택지이다. newCachedThreadPool이 SynchronousQueue를 사용한다.

## 포화 정책(Saturation policies)

포화 정책은 스레드 풀의 작업 대기열이 가득 찼을 때 어떻게 동작할지를 설명한다. bounded 큐가 가득 차면 포화 정책이 실행된다. ThreadPoolExecutor에 대한 포화 정책은 setRejectedExecutionHandler 메서드를 호출하여 설정할 수 있다.
RejectedExecutionHandler 구현에는 AbortPolicy, CallerRunsPolicy, DiscardOldestPolicy가 있다.

- AbortPolicy: 기본 정책으로 작업 대기열이 가득 차면 RejectedExecutionException을 발생시킨다. 호출자는 이 예외를 잡아서(try-catch) 오버플로우를 처리할 수 있다.

- DiscardPolicy: 새로 제출된 작업이 대기열에 들어갈 수 없다면, 그 작업을 무시한다.

- DiscardOldestPolicy: 대기열에서 가장 먼저 실행될 작업을 제거하고 새로운 작업을 대기열에 추가하려고 시도한다. 만약 대기열이 우선순위 큐라면, 가장 높은 우선순위의 작업이 제거된다.

- CallerRunsPolicy: 이 정책은 작업을 무시하지도, 예외를 발생시키지도 않는다. 대신, 새로운 작업을 제출한 스레드에서 작업을 실행한다. 이는 일종의 '스로틀링'(throttling)으로, 새 작업의 흐름을 늦추기 위해 일부 작업을 호출자에게 다시 돌려보낸다.
  CallerRunsPolicy를 사용하면, 예를 들어 웹 서버에서 모든 스레드가 사용 중이고 대기열이 가득 차면, 다음 작업은 execute 호출을 하는 메인 스레드에서 실행된다.

다음은 CallerRunsPolicy 를 사용한 고정 스레드풀 Executor를 생성하는 코드이다.

```JAVA
ThreadPoolExecutor executor=new ThreadPoolExecutor(
		N_THREADS,
		N_THREADS,
		0L,
		TimeUnit.MILLISECONDS,
		new LinkedBlockingQueue<Runnable>(CAPACITY)
		);
executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
```

## ThreadFactory

스레드 풀에서 새로운 스레드를 생성해야 할 때 ThreadFactory 를 통해 스레드를 생성한다. 기본 스레드 팩토리는 논데몬 스레드를 생성한다. 사용자 정의 스레드 팩토리를 사용하는 이유는 UncaughtExceptionHandler를 지정하거나 디버그 로깅을 수행하는 것과 같은
사용자 지정 스레드 클래스의 인스턴스를 인스턴스화할 수 있다.

```JAVA
public interface ThreadFactory {

	Thread newThread(Runnable r);
}
```

## Extending ThreadPoolExecutor

ThreadPoolExecutor 는 확장을 위해 설계되어 서브클래스가 오바라이드할 수 있는 후크 메서드를 제공한다.
beforeExecute, afterExecute 메서드는 작업을 실행하는 스레드에서 호출되며, beforeExecute가 RuntimeException을 던지면 태스트가 실행되지 않고 afterExecute도 호출되지 않는다.
terminate 메서드는 모든 작업이 완료되고 워커 스레드가 종료된 후 스레드 풀 종료가 완료될 때 호출된다.