---
layout: post
title: "4장 - 부호화와 발전"
tags: 
 - 데이터 중심 애플리케이션 설계
lang: ko-KR
date: 2022-01-18
update: 2022-01-18
---

- 데이터 타입이나 스키마가 변경될 때 애플리케이션 코드에 대한 변경이 종종 발생한다.
- 하지만 대규모 애플리케이션에서 코드 변경은 대게 즉시 반영할 수 없다.
    - 서버 측 애플리케이션에서는 한 번에 몇 개의 노드에 새 버전을 배포하고 새로운 버전이 원할하게 실행되는지 확인한 다음 서서히 모든 노드에서 실행되게 하는 `순회식 업그레이드(rolling upgrade)`방식이 있다.
    - 클라이언트 측 애플리케이션은 사용자에 전적으로 좌우된다. 어떤 사용자는 한동안 업데이트를 설치하지 않을 수도 있다.
- 이것은 예전 버전의 코드와 새로운 버전의 코드, 이전의 데이터 타입과 새로운 데이터 타입이 모든 시스템에 동시에 공존할 수 있다는 의미이다.
    - `하위 호환성 : 새로운 코드는 예전 코드가 기록한 데이터를 읽을 수 있어야 한다.`
    - `상위 호환성 : 예전 코드는 새로운 코드가 기록한 데이터를 읽을 수 있어야 한다.`
- 새로운 코드 쓰기는 예전 버전의 코드가 기록한 데이터의 형식을 알기에 명시적으로 해당 형식을 다룰 수 있기 때문에 `하위 호환성`을 일반적으로 어렵지 않다.
- `상위 호환성`은 예전 버전의 코드가 새 버전의 코드에 의해 추가된 것을 무시할 수 있어야 하므로 다루기 더 어렵다.

<!-- more -->

# 데이터 부호화 형식

프로그램은 보통 두 가지 형태로 표현된 데이터를 사용한다.

- 메모리에 객체, 구조체, 리스트, 배열, 해시 테이블, 트리 등으로 데이터를 유지한다.
    - 이런 데이터 구조는 CPU에서 효율적으로 접근하고 조작할 수 있게 최적화된다.
- 데이터를 파일에 쓰거나 네트워크를 통해 전송하기 위해 바이트열의 형태로 부호화해야 한다.
    - 일련의 바이트열은 보통 메모리에서 사용하는 데이터 구조와 상당히 다르다.
- 인메모리 표현에서 바이트열로 전환을 `부호화(직렬화,마샬링)`이라 부른다.
- 그 반대를 `복호화(파싱, 역직렬화, 언마샬링)`이라고 한다.

### 언어별 형식

- 많은 프로그래밍 언어는 인메모리 객체를 바이트열로 부호화하는 기능을 제공한다.
    - 자바의 Serializable, 루비의 Marshal, 파이썬의 pickle 등
- 프로그래밍 언어에 내장된 부호화 라이브러리는 편리하지만 심각한 문제점 또한 많다.
    - 부호화는 보통 특정 프로그래밍 언어와 묶여 있어 다른 언어에서 데이터를 읽기 어렵다.
    - 동일한 객체 유형의 데이터를 복원하려면 복호화 과정이 임의의 클래스를 인스턴스화할 수 있어야 한다. 이것은 종종 보안 문제의 원인이 된다.
    - 데이터 버전 관리는 보통 나중에 생각하게 된다. 데이터를 빠르고 쉽게 부호화하기 위해 상위, 하위 호환성의 불편한 문제가 등한시되곤 한다.
    - 자바의 내장 직렬화는 성능이 좋지 않고 비대해지는 부호화로 유명하다.
    

### JSON과 XML, 이진 변형

- 수(number)의 부호화에는 많은 애매함이 잇다. XML과 CSV에서 number 와 숫자(digit)로 구성된 문자열을 구분할 수 있다. JSON은 문자열과 수를 구분하지만 정수와 부동소수점 수를 구별하지 않고 정밀도를 지정하지 않는다.
- JSON과 XML은 유니코드(사람이 읽을 수 있는 텍스트)을 잘 지원하지만 이진 문자열을 지원하지 않는다. 이진 데이터를 Base64 텍스트로 부호화해 이런 제한을 피하지만 정공법과는 조금 다르다.
- CSV는 스키마가 없으므로 각 로우와 컬럼의 의미를 정의하는 작업은 애플리케이션이 해야한다.

### 이진 부호화

- JSON과 XML은 이진 형식과 비교하면 둘다 훨씬 많은 공간을 사용한다.
- 이런 관찰이 JSON 용으로 사용 가능한 다양한 이진 부호화의 개발로 이어졌지만 JSON과 XML의 텍스트 버전처럼 널리 채택되진 않았다.
- JSON과 XML은 스키마를 사용하지 않기 때문에 부호화된 데이터 안에 모든 객체의 필드 이름을 포함해야 한다.

```jsx
{
	"userName" : "Martin"
	"favoriteNumber" : 1337,
  "interests" : ["daydreaming", "hacking"]
}
```

### 스리프트와 프로토콜 버퍼

- 스리프트와 프로토콜 버퍼 모두 부호화할 데이터를 위한 스키마가 필요하다.
- 프로토콜 버퍼로 정의한 스키마 예

```jsx
message Person {
	required string user_name      = 1; # 필드 태그 1
	optional int64 favorite_number = 2; # 필드 태그 2
	repeated string interests      = 3; # 필드 태그 3
}
```

- 스키마의 `필드 태그(field tags)`를 사용해서 필드 이름의 철자 없이도 어떤 필드를 다루는지 알려줄 수 있다.
- 가변 길이 정수(variable-length integer)를 사용해서 더 적은 바이트로 숫자를 부호화할 수 있다.

### 필드 태그와 스키마의 발전

- 스키마는 시간이 지남에 따라 변한다. 이를 `스키마 발전(schema evolution)`이라고 한다.
- 각 필드는 태그 숫자(1,2,3)로 식별하고 데이터 타입은 주석으로 단다.
- 부호화된 데이터는 필드 이름을 전혀 참조하지 않기 때문에 스키마에서 필디 이름은 변경할 수 있다.
- 그러나 필드 태그는 기존의 모든 부호화된 데이터를 인식 불가능하게 만들 수 있기 때문에 변경할 수 없다.
- 필드에 새로운 태그 번호를 부여하는 방식으로 스키마에 새로운 필드를 추가할 수 있다. 이는 상위 호환성을 유지하게 한다. **즉 예전 코드가 새로운 코드로 기록된 레코드를 읽을 수 있다.**
- 새로운 필드를 추가한 경우 이를 optional로 하거나 기본값을 가지게 하여 하위 호환성을 유지할 수 있다.

### 데이터타입과 스키마 발전

- 필드의 데이터타입을 변경하는 것은 불가능하지는 않지만 값이 정확하지 않거나 잘릴 위험이 있다.
    - 예를 들어 32비트 정수를 64비트 정수로 바꾼다고 가정하자.
    - 파서가 누락된 비트를 0으로 채울 수 있기 때문에 새로운 코드는 예전 코드를 읽을 수 있다. `(하위 호환성)`
    - 새로운 코드가 기록한 데이터를 예전 코드가 읽는 경우 32비트로 읽게 되므로 값이 잘리게 된다. `(상위 호환성)`
- 프로토콜 버퍼에는 목록이나 배열 데이터타입이 없지만 `repeated` 표시자가 있다.
- 이것은 단일 값인 optional 필드를 다중값인 repeated 필드로 변경해도 문제가 없다.
- 이전 데이터를 읽는 새로운 코드는 optional 로 읽게 되고, 새로운 데이터를 읽는 예전 코드는 목록의 마지막 엘리먼트만 보게 된다.

### 스키마의 장점

- 스키마 언어는 XML 스키마나 JSON 스키마보다 훨씬 간단하며 더 자세한 유효성 검사 규칙을 지원한다. `ex) “이 필드의 문자열 값은 이 정규 표현식에 일치해야 한다”`
- 데이터베이스 벤더는 데이터베이스 네트워크 프로토콜로부터 응답을 인메모리 데이터 구조로 복호화하는 드라이버(ODBC, JDBC API)를 제공한다.
- 부호화된 데이터에서 필드 이름을 생략할 수 있기 때문에 크기가 훨씬 작을 수 있다.
- 스키마는 유용한 문서화 형식이다. 복호화할 때 스키마가 최신 상태인지를 확신할 수 있다.
- 스키마 데이터베이스를 유지하면 스키마 변경이 적용되기 전에 상위 호환성과 하위 호환성을 확인할 수 있다.
- 정적 타입 프로그래밍 언어 사용자에게 스키마로부터 코드를 생성하는 기능은 제공할 수 있다.

# 데이터플로우(DataFlow) 모드

- 데이터플로우는 매우 추상적인 개념으로서 하나의 프로세스에서 다른 프로세스로 데이터를 전달하는 방법은 아주 많다.
    - 데이터베이스를 통해
    - 서비스 호출을 통해
    - 비동기 메시지 전달을 통해

## 데이터베이스를 통한 데이터플로우

- 데이터베이스에 기록하는 프로세스는 데이터를 부호화하고 데이터베이스에서 읽는 프로세스는 데이터를 복호화한다.
- **이전에 기록한 내용을 미래의 자신이 복호화하기 위해 하위 호환성은 분명히 필요하다.**
- 일반적으로 동시에 다양한 프로세스가 데이터베이스를 접근하는 일은 흔하다.
- 일부 프로세스는 새로운 코드를 수행 중이고 일부 다른 프로세스는 예전 코드로 수행 중이라면, 순회식 업그레이드로 현재 새로운 버전을 배포하는 도중이라면 일부 인스턴스는 아직 갱신되지 않았지만 일부 인스턴스는 이미 갱신될 수 있다.
- **이것은 데이터베이스 내 값이 새로운 버전의 코드로 기록된 다음 현재 수행 중인 예전 버전의 코드로 그 값을 읽을 가능성이 있기 때문에 상위 호환성도 필요하다.**
- 새로운 버전의 애플리케이션이 기록한 데이터를 예전 버전의 애플리케이션에서 갱신하는 경우 데이터를 유시할 수 있기 때문에 주의가 필요하다.


### 다양한 시점에 기록된 다양한 값

- 애플리케이션의 새로운 버전을 배포할 때 몇 분내에 예전 버전을 새로운 버전으로 완전히 대체할 수 있지만 데이터베이스는 그렇지 않다.
- 5년된 데이터는 그 이후로 명시적으로 다시 기록하지 않는 한 원래의 부호화 상태 그대로 있다. 이런 상황을 `데이터가 코드보다 더 오래 산다(data outlives code)`라 한다.
- 데이터를 새로운 스키마로 다시 기록(마이그레이션)하는 작업은 가능하다. 하지만 대용량 데이터셋 대상으로는 값비싼 작업이기 때문에 이런 상황을 피한다.
- 대부분의 관계형 데이터베이스는 기존 데이터를 다시 기록하지 않고 널을 기본값으로 갖는 새로운 컬럼을 추가하는 간단한 스키마 변경을 허용한다. `(MySQL은 전전체 테이블을 다시 기록한다.)`
- 링크드인 문서 데이터베이스인 에스프레소는 아브로 스키마 발전 규칙을 사용한다.

## 서비스를 통한 데이터플로우: REST와 RPC

- 네트워크를 통해 통신해야 하는 프로세스가 있을 때 해당 통신을 배치하는 가장 일반적인 방법은 **클라이언트와 서버의 두 역할로 배치한다.**
- 웹 브라우저를 위해 서버로 `GET, POST` 요청을 통해 모든 웹 브라우저로 모든 웹사이트를 접속할 수 있다.
- 모바일 디바이스나 데스크톱 앱을 통해 서버에 요청할 수 있다. 이 경우 서버 응답은 보통 사람이 볼 수 있게 표시하는 JSON 같은 데이터를 많이 사용한다.
- 서버 자체가 다른 서비스의 클라이언트일 수 있다. 하나의 서비스가 다른 서비스의 일부 기능이나 데이터가 필요하다면 해당 서비스에 요청을 보낸다. 이런 개발 방식을 전통적으로 서비스 지향 설계, 최근에는 마이크로서비스 설계라고 한다.
- 서비스 지향 및 마이크로서비스 아키텍처의 핵심 설계 목표는 서비스를 배포와 변경에 독립적으로 만들어 애플리케이션 변경과 유지보수를 더 쉽게 할 수 있게 만드는 것 이다.
- 각 서비스는 한 팀이 소유해야 하고 해당 팀은 다른 팀과의 조정 없이 자주 서비스의 새로운 버전을 출시할 수 있어야 한다.
- **따라서 서버와 클라이언트가 사용하는 데이터 부호화는 서비스 API의 버전 간 호환이 가능해야한다.**

### 웹 서비스

- 웹 서비스에는 대중적인 `REST`와 `SOAP`가 있다.
- `REST` 는 프로토콜이 아니라 HTTP의 원칙을 토대로 한 설계 철학이다.
- `REST` 는 간단한 데이터 타입을 강조하며 URL을 사용해 리소스를 식별하고 캐시 제어, 인증, 콘텐츠 유형 협상에 HTTP 기능을 사용한다.
- `SOAP` 는 네트워크 API 요청을 위한 XML 기반 프로토콜이다.
- HTTP와 독립적이며 대부분의 HTTP 기능을 사용하지 않는다.
- `SOAP` 웹 서비스의 API는 웹 서비스 기술 언어(WSDL)의 XML 기반 언어를 사용해 기술한다.
- WSDL은 클라이언트가 로컬 클래스와 메서드 호출을 사용해 원격 서비스에 접근하는 코드 생성이 가능하다.
- WSDL은 사람이 읽을 수 있게 설계하지 않았고 SOAP 메시지를 수동으로 구성하기에는 너무 복잡하기 때문에 SOAP 사용자는 도구 지원과 코드 생성과 IDE에 크게 의존한다.

### 원격 프로시저 호출(RPC) 문제

- 웹 서비스는 네트워크 상에서 API 요청을 하기 위한 여러 기술 중 하나이다.
    - EJB, RMI 는 자바로만 제한된다.
    - 분산 컴포넌트 객체모델(DCOM)은 마이크로소프트 플랫폼으로 제한된다.
    - 공통 객체 요청 브로커 설계(CORBA)는 지나치게 복잡하고 하위,상위 호환성을 제공하지 않는다.
- 이러한 웹 서비스는 원격 프로시저 호출(RPC)의 아이디어를 기반으로 한다.
- RPC 모델은 원격 네트워크 서비스 요청을 같은 프로세스 안에서 특정 프로그래밍 언어의 함수나 메서드를 호출하는 것과 동일하게 사용 가능하게 해준다.
- RPC 가 처음에는 편리한 것 같지만 근본적으로 결함이 있다.
    - 로컬 함수는 예측 가능하다. 그래서 제어 가능한 매개변수에 따라 성공하거나 실패한다.
    - 네트워크 요청은 어렵다. 네트워크 문제로 요청과 응답이 유실되거나 요청에 응답하지 않을 수 있다.
    - 예를 들어 실패한 요청을 다시 보내는 것과 같은 대첵을 세워야 한다.
    
1. *네트워크 요청은 타임아웃으로 결과 없이 반환될 수 있다.*
2. *실패한 네트워크 요청을 다시 시도할 때 요청이 실제로는 처리되고 응답만 유실될 수 있다. 이 경우 프로토콜에 중복 제거기법을 적용하지 않으면 재시도는 작업이 여러번 수행되는 원인이 된다.*
3. *네트워크 요청은 함수 호출보다 훨씬 느리고 지연 시간은 매우 다양하다.*
4. *네트워크 요청은 모든 매개변수를 네트워크로 전송할 수 있게끔 바이트열로 부호화해야한다.*
5. *클라이언트와 서비스는 다른 프로그래밍 언어로 구현할 수 있다. 모든 언어가 같은 타입을 가지는 것은 아니기에 깔끔하지 않는 모습이 될 수 있다.*

### RPC의 현재 방향

- gRPC는 프로토콜 버퍼를 이용한 RPC 구현이다.
- 차세대 RPC 프레임워크는 원격 요청이 로컬 함수 호출과 다르다는 사실을 더욱 분명히 한다.
- Rest.li는 실패할지도 모를 비동기 작업을 캡슐화하기 위해 `퓨처(future)`를 사용한다.
- REST 상에서 JSON과 같은 부류의 프로토콜보다 이진 부호화 형식을 사용하는 사용자 정의 RPC 프로토콜이 우수한 성능을 제공할 수 도 있다.
- RESTful API는 다른 중요한 이점이 있다.
    - 테스트와 디버깅에 적합(웹 브라우저나 curl을 사용해 간단히 요청을 보낼 수 있다)
    - 모든 주요 프로그래밍 언어와 플랫폼이 지원하고 사용 가능한 다양한 도구 생태계(서버, 캐시 로드 밸런서, 프록시, 방화벽, 모니터링, 디버깅 도구, 테스팅 도구)등이 있다.

## 메시지 전달 데이터 플로

- RPC와 데이터베이스 간 비동기 메시지 전달 시스템을 살펴본다.
- 이 시스템은 클라이언트 요청을 낮은 지연 시간으로 다른 프로세스에 전달한다는 점에서는 RPC와 비슷하다.
- 메시지를 직접 네트워크 연결로 전송하지 않고 임시로 메시지를 저장하는 `메시지 브로커(message broker)(또는 메시지 큐)나 메시지 지향 미들웨어` 라는 중간 단계를 거쳐 전송한다는 점은 데이터베이스와 유사하다.
- 메시지 브로커를 사용하는 방식은 직접 RPC를 사용하는 방식과 비교했을 때 여러 장점이 있다.
    - 수신자가 사용 불가능하거나 과부하 상태라면 메시지 브로커가 버퍼처럼 동작할 수 있기 때문에 시스템 안정성이 향상된다.
    - 죽었던 프로세스에 메시지를 다시 전달할 수 있기 때문에 메시지 유실을 방지할 수 있다.
    - 송신자가 수신자의 IP 주소나 포트 번호를 알 필요가 없다.
    - 하나의 메시지를 여러 수신자로 전송할 수 있다.
    - 논리적으로 송신자는 수신자와 분리된다.
- 메시지 전달 통신은 일반적으로 단방향이라는 점이 RPC와 다르다.
- 대게 송신 프로세스는 메시지에 대한 응답을 기대하지 않는다.

### 메시지 브로커

- 프로세스 하나가 메시지를 이름이 저장된 큐나 토픽으로 전송하고 브로커는 해당 큐나 토픽 하나 이상의 소비자 또는 구독자에게 메시지를 전달한다.
- 동일한 토픽에 여러 생산자와 소비자가 있을 수 있다.
- 토픽은 단방향 데이터 플로우만 제공한다.
- 하지만 소비자 스스로 메시지를 다른 토픽으로 게시하거나 원본 메시지의 송신자가 소비하는 응답 큐로 게시할 수 있다.
- 메시지는 일부 메타데이터를 가진 바이트열로 모든 부호화 형식을 사용할 수 있다.
- **부호화가 상하위 호환성을 모두 가진다면 메시지 브로커에서 게시자와 소비자를 독립적으로 변경해 임의 순서로 배포할 수 있는 유연성을 얻게 된다.**

### 분산 액터 프레임워크

- **액터 모델(actor model)**은 단일 프로세스 안에서 동시성을 위한 프로그래밍 모델이다.
- 스레드를 직접 처리하는 대신 로직이 액터에 캡슐화 된다.
- 액터는 하나의 클라이언트나 엔티티를 나타낸다.
- 액터는 로컬 상태를 가질 수 있고 비동기 메시지의 송수신으로 다른 액터와 통신한다.
- 각 액터 프로세스는 한 번에 하나의 메시지만 처리하기 때문에 스레드에 대해 걱정할 필요가 없고 각 액터는 프레임워크와 독립적으로 실행할 수 있다.
- 이 프로그래밍 모델은 여러 노드 간의 애플리케이션 확장에 사용된다.
- 송신자와 수신자가 같은 노드에 있는지 다른 노드에 있는지 관계없이 동일한 메시지 전달 구조를 사용한다.
- 다른 노드에 있는 경우 메시지는 명백하게 바이트열로 부호화되고 네트워크를 통해 전송되며 다른 쪽에서 복호화한다.
- 액터 모델은 단일 프로세스 안에서도 메시지가 유실될 수 있다고 가정하기 때문에 위치 투명성은 RPC보다 액터 모델에서 더 잘 동작한다.

# 정리

- 데이터 구조를 네트워크나 디스크 상의 바이트열로 변환하는 다양한 방법이 있다.
- 이런 부호화의 세부 사항은 효율성뿐만 아니라 애플리케이션의 아키텍처와 배포의 선택 사항에도 영향을 미친다.
- 많은 서비스가 새로운 버전의 서비스를 동시에 모든 노드에 배포하는 방식보다 한 번에 일부 노드에만 서서히 배포하는 순회식 업그레이드가 필요하다.
- 순회식 업그레이드는 정지 시간 없이 새로운 버전의 서비스를 출시 가능하게 하고 배포를 덜 위험하게 만든다.
- 여러 가지 다른 이유로 다양한 노드에서 다른 버전의 여러 애플리케이션 코드가 실행될 수 있다.
- 따라서 시스템을 흐르는 모든 데이터는 하위 호환성, 상위 호환성을 제공하는 방식으로 부호화해야 한다.