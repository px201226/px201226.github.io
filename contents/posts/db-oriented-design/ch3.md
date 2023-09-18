---
layout: post
title: "3장 - 저장소와 검색"
tags: 
 - 데이터 중심 애플리케이션 설계
lang: ko-KR
date: 2022-01-14
update: 2022-01-14
---

# 데이터베이스를 강력하게 만드는 데이터 구조

- 일반적으로 파일 추가 작업은 매우 효율적이기 때문에 로그(log)를 기록할 때 파일을 사용한다.
- 하지만 파일에서 특정 로그키를 찾을 때마다 `O(n)` 만큼 걸리기 때문에 성능이 매우 좋지 않다.
- 데이터베이스에서 특정 키의 값을 효율적으로 찾기 위해서는 `색인구조`가 필요하다.
- 색인의 일반적인 개념은 어떤 부가적인 메타데이터를 유지하는 것이다.
- 색인을 잘 선택했다면 **읽기 질의 속도가 향상되지만** **모든 색인은 쓰기 속도를 떨어뜨린다**.

<!-- more -->

### 해시 색인

- 키-값 데이터를 색인하기 위해 보통 해시 맵으로 구현한다.
- `모든 키값과 매핑되는 바이트 오프셋을 유지하는 방법`
    - 매우 단순하지만 해시 맵을 전부 메모리에 유지하기 때문에 고성능으로 읽기, 쓰기가 보장된다.
    - 각 키의 값이 자주 갱싱되는 상황에 매우 적합하다.
    - 예를 들어 키는 동영상 URL 이고, 값은 비디오가 재생된 횟수인 경우다.
    - 이런 유형의 작업부하에서는 쓰기가 아주 많지만 고유 키는 많지 않다.
    - 하지만 용량에 커지게 된다면 결국 디스크 공간이 부족해진다.
- 특정 크기의 세그먼트로 로그를 나누는 방식
    - 특정 크기에 도달하면 세그먼트 파일을 닫고 새로운 세그먼트 파일에 이후 쓰기를 수행한다.
    - 컴팩션(compation)은 로그에서 중복된 키를 버리고 각 키의 최신 갱신 값만 유지하는 것을 의미한다.


### 추가 전용 쓰기 설계는 낭비인가?

- 추가와 세그먼트 병합은 순차적인 쓰기 작업이기 때문에 무작위 쓰기보다 훨씬 빠르다.
- 세그먼트 파일이 추가 전용이나 불변이면 동시성과 고장 복구는 훨씬 간단하다.
- 오래된 세그먼트 병합은 시간이 지남에 따라 조각화되는 데이터 파일 문제를 피할 수 있다.

### 해시 테이블 색인의 제한사항

- 해시 테이블은 메모리에 저장해야 하므로 키가 너무 많으면 문제가 된다.
- 해시 테이블은 범위 질의에 효율적이지 않다.

### SS테이블과 LSM 트리

- 키-값 쌍을 가지는 세그먼트 구조에서 키-값 쌍을 키로 정렬하는 것을  정렬된 문자열 테이블(SS) 테이블이라고 한다.
- SS 테이블은 해시 색인을 가진 로그 세그먼트보다 몇 가지 큰 장점이 있다.
    - 각 세그먼트들이 정렬되어 있기 때문에 병합정렬 알고리즘이 사용가능하다.
    - 세그먼트 병합이 파일이 사용 가능한 메모리보다 크더라도 간단하고 효율적이다.
    - 파일에서 특정 키를 찾기 위해 메모리에 모든 키의 색인을 유지할 필요가 없다.
    - 읽기 요청은 요청 범위 내에서 여러 키-값을 스캔해야 하기 때문에 해당 레코드들을 블록으로 그룹화하고 디슼에 쓰기 전에 압축한다.
    

### SS테이블 생성과 유지

- B 트리 구조를 사용해서 디스크상에 정렬된 구조를 유지할 수 있다.
- 하지만 레드 블랙 트리나 AVL 트리로 메모리에 유지하는 편이 훨씬 쉽다.
    - 쓰기가 들어오면 인메모리 균형 트리 데이터구조에 추가한다. 이 인메모리 트리는 **멤테이블(memtable)** 이라고 한다.
    - 멤테이블의 메가바이트 정도의 임곗값보다 커지면 SS테이블 파일로 디스크에 기록한다. **트리가 이미 키로 정렬되어 있기 때문에 효율적으로 수핼할 수 있다.**
    - 새로운 SS테이블 파일은 데이터베이스의 가장 최신 세그먼트가 된다. SS테이블을 디스크에 기록하는 동안 쓰기는 새로운 멤테이블에 계속 된다.
    - 읽기 요청을 제공하려면 먼저 멤테이블에서 키를 찾고, 디스크 상의 가장 최신 세그먼트순으로 찾는다.
    - 세그먼트 파일을 합치고 덮어 쓰여지거나 삭제된 값을 버리는 병합과 컴팩션 과정을 백그라운드로 수행한다.
- 데이터베이스가 고장나면 디스크에 기록되지 않고 멤테이블에 있는 가장 최신 쓰기가 손실된다.
- 이 문제를 피하기 위해서 매번 쓰기를 즉시 추가할 수 있게 분리된 로그를 디스크 상에 유지해야된다.

### SS테이블에서 LSM 트리 만들기

- 이런 알고리즘은 키-값 저장소 엔진 라이브러리에서 사용된다.
- 구글의 빅테이블, 카산드라, HBase 등에서도 유사한 저장소 엔진을 사용한다.
- 원래 이 색인 구조는 `로그 구조화 병합 트리(Log-Structured Merge-Tree)(또는 LSM 트리)`라고 부른다.

### 성능 최적화

- LSM 트리 알고리즘은 데이터베이스에 존재하지 않는 키를 찾는 경우 느릴 수 있다.
- 멤테이블에 확인한 다음 키가 존재하지 않는다는 사실을 확인하기 전에는 가장 오래된 세그먼트까지 거슬러 올라가야 한다.
- 이런 종류의 접근을 최적화하기 위해 저장소 엔진은 보통 **블룸 필터(Bloom filter)**를 추가적으로 사용한다.
- 블룸 필터는 키가 데이터베이스에 존재하지 않음을 알려주므로 존재하지 않는 키를 불필요한 디스크 읽기를 많이 절약할 수 있다.
- SS테이이블을 압축하고 병합하는 순서와 시기를 결정하는 전략으로 **크기 계층(size-triered)과 레벨 컴팩션(leveled compaction)**가 있다.
- 사이즈 계층 컴팩션은 상대적으로 좀 더 새롭고 작은 SS테이블을 상대적으로 오래됐고 큰 SS테이블에 연이어 병합한다.
- 레벨 컴팩션은 키 범위를 더 작은 SS테이블을 나누고 오래된 데이터는 개별 레벨로 이동하기 때문에 컴팩션을 점진적으로 진행해 디스크 공간을 덜 사용한다.

### B 트리

- 가장 널리 사용되는 색인 구조는 **B트리(B-tree)** 이다.
- 앞에서 살펴본 LSM 트리는 수 메가바이트 이상의 가변 크기를 가진 세그먼트로 나누고 순차적으로 세그먼트를 기록한다.
- 반면 B트리는 4KB 크기의 고정 크기 블록이나 페이지로 나누고 한 번에 하나의 페이지에 읽기 또는 쓰기를 한다.
- 디스크가 고정 크기 블록으로 배열되기 때문에 이런 설게는 근본적으로 하드웨어와 조금 더 밀접하 관련이 있다.
- 하나의 페이지는 B 트리의 루트(root)로 지정되고, 페이지는 여러 키와 하위 페이지의 참조를 포함한다.
- 각 하위 페이지는 키가 이어지는 범위를 담당하고 참조 사이의 키는 해당 범위 경계가 어디인지 나타낸다.
- 탐색을 위해서 루트에서 시작하여 페이지 경계 사이로 페이지 참조를 따라가고 최종적으로 **리프 페이지(leaf page)**를 포함하는 페이지에 도달한다.
- B 트리에서 한 페이지에서 하위 페이지를 참조하는 수를 `분기 계수(bracning factor)` 라고 부르고, 분기 계수는 페이지 참조와 범위 경계를 저장할 공간의 양에 의존적인데 보통 수백게에 달한다.
- B 트리에 존재하는 **키의 값을 갱신하려면** 키를 포함하고 있는 리프 페이지를 검색하고 페이지의 값을 바꾼 다음 페이지를 디스크에 다시 기록한다.
- 새로운 키를 추가하려면 새로운 키를 포함하는 범위의 페이지를 찾아 해당 페이지에 키와 값을 추가한다.
- 새로운 키를 수용한 페이지에 충분한 여유 공간이 없다면 페이지 하나를 반쯤 채워진 페이지 둘로 나누고 상위 페이지가 새로운 키 범위의 하위 부분들을 알 수 있게 생긴한다.
- 이 알고리즘은 트리가 계속 균형을 유지하는 것을 보장한다.
- 분기 계수 500의 4KB 페이지의 4단계 트리는 256TB까지 저장할 수 있다.

### 신뢰할 수 있는 B 트리 만들기

- B 트리의 기본적인 쓰기 동작은 새로운 데이터를 디스크 사으이 기존 페이지에 덮어쓴다.
- 즉, 페이지를 덮어쓰더라도 페이지를 가르키는 모든 참조는 변하지 않는다.
- LSM 트리와 같은 로그 구조화 색인과는 대조적인 점이다.
- B 트리의 삽입 과정 중 페이지가 너무 커져 페이지를 나눠야 할 때, 데이터베이스가 고장 난다면 색인이 훼손될 수 있기 때문에 이것은 위험한 동작이다.
- 데이터베이스가 고장 상황에서 스스로 복구할 수 있게 만들려면 디스크 상에 `쓰기 전 로그(write,ahead log, WAL)(재실행 로그(redo log)`라고 하는 데이터 구조를 추가할 수 있다.
- 쓰기 전 로그는 트리 페이지에 변경된 내용을 적용하기 전에 모든 B트리의 변경사항을 기록하는 추가 전용 로그이다.
- 같은 자리에 페이지를 갱신하는 작업할 때, 다중 스레드가 동시에 B 트리에 접근한다면 주의 깊게 동시성 제어를 해야 한다.
- 동시성 제어는 보통 래치(latch)로 트리의 데이터 구조를 보호한다.

### B 트리 최적화

- 쓰기전 로그(WAL) 유지 대신 일부 데이터 베이스는 `쓰기 시 복사 방식(copy-on-write schem)`을 사용한다. 변경된 페이지는 다른 위치에 기록하고 트리에 상위 페이지의 새로운 버전을 만들어 새로운 위치를 가르키게 한다.
- 페이지 전체 키가 저장하는게 아니라 키를 축약해 쓰면 공간을 절약할 수 있다. 키가 키 범위 사이의 경계 역할을 하는 데 충분한 정보만 제공하면 된다. 페이지 하나에 키를 더 많이 채우면 트리는 더 높은 분기 계수를 얻는다. 트리 깊이 수준을 낮출 수 있다.
- B 트리 구현에서 리프 페이지를 디스크 상에 연속된 순서로 나타나게끔 트리르 배치한다.
    - 일반적으로 페이지는 디스크 상에 위치할 수 있다. 질의가 정렬된 순서로 키 범위의 상단 부분을 스캔해야 된다면 모든 페이지에 대해 디스크 찾기가 필요하기 때문에 비효율적이다.
    - 하지만 트리가 커지면 순서를 유지하기 어렵다. 반대로 LSM 트리는 병합하는 과정에서 저장소의 큰 세그먼트를 한 번에 다시 쓰기 때문에 디스크에서 연속된 키를 서로 가깝게 유지하기 쉽다.
- 트리에 포인터를 추가한다. 각 리프 페이지의 양쪽 형제 페이지에 대한 참조를 가지면 상위 페이지로 다시 이동하지 않아도 순서대로 키를 스캔할 수 있다.

### LSM 트리의 장점

- B 트리보다 쓰기 처리량을 높게 유지할 수 있다.
    - B 트리 색인은 모든 데이터 조각을 최소한 두 번 기록해야 한다.
    - 해당 페이지내 몇 바이트만 바뀌어도 한 번에 전체 페이지를 기록해야 하는 오버헤드도 있다.
    - 로그 구조화 색인 또한 SS 테이블의 반복된 컴팩션과 병합으로 여러 번 데이터를 쓴다.
    - 데이터베이스에 쓰기 한 번이 데이터베이스 수명 동안 디스크에 여러 번의 쓰기를 야기하는 이렇ㄴ 효과를 쓰기 증폭이라 한다.
    - LSM 트리가 상대적으로 쓰기 증폭이 더 낮다. 트리에서 여러 페이지를 덮어쓰는 것이 아니라 순차적으로 컴팩션된 SS테이블 파일을 쓰기 떄문이다.
- LSM 트리는 압축률이 더 좋다.
    - B 트리 저장소 엔진은 파편화로 인해 사용하지 않는 디스크 공간 일부가 남는다.
    - LSM 트리는 페이지 지향적이지 않고 주기적으로 파편화를 없애기 위해 SS테이블을 다시 기록하기 때문에 저장소 오버헤드가 더 낮다.

### LSM 트리의 단점

- 컴팩션 과정이 때로는 진행 중인 읽기와 쓰기의 성능에 영향을 준다.
    - 디스크에서 비싼 컴팩션 연산이 끝날 때까지 요청이 대기해야 하는 상황이 발생하기 쉽다.
    - B 트리의 성능은 로그 구조화 저장소 엔진보다 예측하기 쉽다.
- 컴팩션 문제는 높은 쓰기 처리량에서 발생한다.
    - 초기 쓰기(로깅)과 멤테이블을 디스크로 플러싱과 백그라운드에서 수행되는 컴팩션 스레드가 이 대역폭을 공유해야 한다.
    - 데이터베이스가 점점 커질수록 컴팩션을 위해 더 많은 디스크 대역폭이 필요하다.
- 쓰기 처리량이 높음에도 컴팩션 설정을 주의 깊게 하지 않으면 컴팩션 유입 쓰기 속도를 따라갈 수 가없다.
- 로그 구조화 저장소 엔진은 다른 세그먼트에 같은 키의 다중 복사본이 존재할 수 있다.
    - B 트리의 장점은 각 키가 색인의 한 곳에만 정확하게 존재한다는 점이다.
    - 강력한 트랜잭션 시맨틱을 제공하는 데이터베이스에는 B 트리가 훨씬 매력적이다.

### 기타 색인 구조

- 키-값 색인의 대표적인 예는 관계형 모델의 **기본키(primary key) 색인**이다.
- `보조 색인(secondary index)`을 사용하는 방식도 매우 일반적이다. 보조 색인은 키-값 색인에서 쉽게 생성할 수 있다.
- 기본키 색인과 주요 차이점은 키가 고유하지 않다는 점 이다.

### 색인 안에 값 저장하기

- 색인에서 키는 질의가 검색하는 대상이지만 값은 다음의 두 가지 중 하나에 해당한다.
- 값은 질의의 실제 로우(문서, 정점)이거나 다른 곳에 저장된 로우를 가르키는 참조다.
- 후자의 경우 로우가 저장된 곳을 `힙 파일(heap file)`이라고 한다.
    - 여러 보조 색인이 존재할 때 힙 파일 접근은 중복된 데이터를 피할 수 있다.
    - 힙 파일 접근 방식은 키를 변경하지 않고 값을 갱신할 때 꽤 효율적이다.
- 색인 안에 색인된 로우를 저장하는 방식을 클러스터드 `색인(clustered index)`이라고 한다.
- `클러스터드 색인(색인 안에 모든 로우 데이터를 저장)`과 비클러스터드 `색인(색인 안에 데이터의 참조만 저장)` 사이의 절충안을 **커버링 색인(convering index)**이라 한다.
- 이 색인은 색인 안에 테이블의 컬럼 일부를 저장한다. 이렇게 하면 일부 질의에 대해서 색인만 사용해 응답이 가능하다. `(이런 경우를 색인이 질의를 커버했다고 말한다)`

### 다중 컬럼 색인

- 다중 컬럼 색인의 가장 일반적인 유형은 `결합 색인(concatenated index)`이라고 한다.
- 결합 색인은 하나의 컬럼에 다른 컬럼을 추가하는 방식으로 하나의 키에 여러 필드를 단순히 결합한다.
- 이 방법은 **(성, 이름)**을 키로 전화번호를 값으로 하는 색인을 제공하는 방식과 유사하다.
- 순서가 정렬돼 있기 때문에 특정 성을 가진 모든 사람을 찾거나 특정 성 이름을 조합을 가진 모든 사람을 찾을 때도 이 색인을 사용할 수 있다.
- 하지만 특정 이름을 가진 모든 사람을 찾을 때는 쓸모가 없다.

### 모든 것을 메모리에 보관

- 지금까지 설명한 데이터 구조는 모두 디스크 한계에 대한 해결책이었다.
- 인메모리 데이터베이스도 지속성을 목표로 특수 하드웨어를 사용하거나 디스크에 변경 사항의 로그를 기록하거나 디스크에 주기적인 스냅숏을 기록하거나 다른 장비에 인메로리 상태를 복제하는 방법이 있다.
- 레디스는 비동기로 디스크에 기록하기 때문에 약한 지속성을 제공한다.

### 트랜잭션 처리나 분석

<aside>
💡 트랜잭션이 반드시 ACID 속성을 가질 필요는 없다. 트랜잭션 처리는 주기적으로 수행되는 일괄 처리 작업과 달리 클라이언트가 지연 시간이 낮은 읽기와 쓰기를 가능하게 한다는 의미다.

</aside>

- 비록 데이터베이스가 많은 여러 종류의 데이터를 사용하기 시작했지만 기본적인 접근 패턴은 비지니스 트랜잭션 처리와 유사하다.
- 보통 애플리케이션은 색인을 사용해 일부 키에 대한 적은 수의 레코드를 찾는다. 레코드는 사용자 입력을 기반으로 삽입되거나 갱신된다.
- 이런 애플리케이션은 대화식이기 때문에 이 접근 패턴을 `온라인 트랜잭션 처리(OLTP)` 라고 한다.
- 다른 패턴으로 많은 수의 레코드를 스캔해 레코드 당 일부 컬럼만 읽어 집계 통계를 계산해야 한다.
- 이런 질의는 보통 비지니스 분석가가 작성하며 회사 경영진이 더 나은 의사결정을 하게끔 돕는 보고서를 제공한다. 이런 데이터베이스 사용 패턴을 `온라인 분석 처리(OLAP)`라고 한다.
- 처음에는 트랜잭션 처리와 분석 질의를 위해 동일한 데이터베이스를 사용했다.
- 이와 관련해서 SQL은 OLTP, OLAP 유형 질의 모두 잘 동작했다.
- 몇몇 회사들은 OLAP를위한 개별 데이터베이스에서 분석을 수행하기도 했다. 이 개별 데이터베이스를 `데이터 웨어하우스(data warehouse)`라고 한다.

| 특성 | 트랜잭션 처리 시스템(OLTP) | 분석 시스템(OLAP) |
| --- | --- | --- |
| 주요 읽기 패턴 | 질의당 적은 수의 레코드, 키 기준으로 가져옴 | 많은 레코드에 대한 집계 |
| 주요 쓰기 패턴 | 임의 접근, 사용자 입력을 낮은 지연 시간으로 기록 | 대규모 불러오기 또는 이벤트 스트림 |
| 주요 사용처 | 웹 애플리케이션을 통한 최종 사용자 | 의사결정 지원을 위한 내부 분석가 |
| 데이터 표현 | 데이터의 최신 상태 | 시간이 지나며 일어난 이벤트 이력 |
| 데이터셋 크기 | 기가바이트에서 테라바이트 | 테라바이트에서 페타바이트 |

### 데이터 웨어하우징

- OLTP 시스템은 대개 사업 운영에 대단히 중요하기 때문에 높은 가용성과 낮은 지연 시간의 트랜잭션 처리를 기대한다.
- 데이터 웨어하우스는 분석가들이 OLTP 작업에 영향을 주지 않고 마음껏 질의할 수 있는 개별 데이터베이스이다.
- 데이터 웨어하우스는 회사 내의 모든 다양한 OLTP 시스템에 있는 데이터의 읽기 전용 복사본이다.
- 데이터는 OLTP 데이터베이스에서 주지적인 데이터 덤프나 지속적인 갱신 스트림을 사용해 추출하고 분석 친화적인 스키마로 변환하고 깨끗하게 정리한 다음 데이터 웨어하우스에 적재한다. 이런 과정을 `ETL(Extract-Transform-Load)`이라한다.


### OLTP 데이터베이스와 데이터 웨어하우스의 차이점

- SQL은 일반적으로 분석 질의해 적합하기 때문에 데이터 웨어하우스의 데이터 모델은 가장 일반적인 관계형 모델을 사용한다.
- 표면적으로 데이터 웨어하수으와 관계형 OLTP 데이터베이스 둘 다 SQL 질의 인터페이스를 지원하기 때문에 비슷해 보인다.
- 하지만 각각 매우 다른 질의 패턴에 맞게 최적화됐기 때문에 시스템 내부는 완전히 다르다.
- 데이터 웨어하우스의 대표적인 예로 SQL 온 하둡, 아파치 하이브, 스파크 SQL, 클라우데라 임팔라, 페이스북 프레스토, 아파치 타조, 아파치 드릴 등이 있다.