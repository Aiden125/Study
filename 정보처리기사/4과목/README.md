# 4과목 : 프로그래밍 언어 활용

---

### 요약 정리

```cpp
기본 자료형(c언어 기준)
정수형 int - 2Byte
정수형 long - 4Byte
실수형 float - 4Byte
실수형 double - 8Byte
문자형 char - 1Byte
```

```cpp
변환 문자
%d : decimal - 10진 정수
%x : hexa - 16진 정수
%f : float - 실수형
%c : character - 문자
%s : string - 문자
```

```cpp
논리합(OR)의 경우 각 수를 2진수로 바꿔서 1이 하나라도 있으면 1로 반환해서 계산한다.
아래 문제를 참고하면 이해하기 쉬움
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7aa4c8bf-7985-46d7-a7f2-a7f09bb855b4/Untitled.png)

```cpp
디스크 스케쥴링
개념 : 데이터를 액세스하기 위해 디스크 헤드의 이동경로를 결정하는 기법

FCFS(First Come First Service) : 요청한 순서대로 처리, 구현이 쉽지만 부하가 크면 응답지연 발생
90 183 37 122 14 128 65 67이 작업큐라고 했을 떄
현재 위치가 53이라면 35 -> 80 -> 183 -> 37 -> 122 순서대로 간다

SSTF(Shortest Seek Time First) : 짧은거리부터 우선적으로.
현재 헤드가 53이고 트랙이 1번 방향으로 이동 중이며 요청 대기 큐가
98 203 37 122 14 124 65 67일 때 이동 거리
53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 203
이동거리는 12+2+30+23 이런식으로 늘어난다.

C-SCAN : 바깥쪽에서 안쪽으로 스캔
```

```cpp
파일 디스크립터에 해당하지 않는 것 : 파일 작성자
```

### 22.04.24 기출 오답정리

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7f48c09-ef24-448a-8e14-e76606858a8a/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29b1aaf5-324d-430b-91bc-6ad3229750c5/Untitled.png)

```cpp
62번 다음 C언어 프
```

```cpp
63번 다음 C언어 프로그램 결과
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/937464be-736b-4a16-90c4-a51493258e3f/Untitled.png)

참고. ob1.a 이런식으로 하면 C언어에서는 배열의 값들을 모두 더한값을 가진다.

```cpp
64번 IP 프로토콜에서 사용하는 필드와 해당 필드에 대한 설명으로 틀린 것
```

- Packet Length는 IP 헤더를 제외한 패킷 전체 길이를 나타내며 최대 크기는 2의 32승 -1비트이다.

Total Packet Length는 2의 16승 -1이며 IP 프로토콜 헤더 길이를 32비트 워드 단위로 표시, Titm to Live는 송신 호스트가 패킷 전송 전 네트워크 생존시간, version Number는 IP 프로토콜의 버전번호이다.

```cpp
65번
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af7460fd-6446-4a60-b99b-cab51f4538bf/Untitled.png)

파이썬은 else if 가 존재하지 않는다..

```cpp
66번 RIP 라우팅 프로토콜에 대한 설명으로 틀린 것
```

- 라우팅 프로토콜을 IGP와 EGP로 분류했을 때 EGP에 해당한다.

RIP는 IGP에 해당하며, 벨만포드 알고리즘 사용, 홉 거리 최대 15, 소규모 적합, 라우팅 표 갱신 드으이 특성이 있다.

```cpp
67번 우선순위를 대기한시간+서비스 받을 시간을 구한뒤 서비스 받을 시간으로 나누는 프로세스 스케쥴링 방법은?
```

- HRN 스케쥴링

HRN(비선점 스케쥴링) : 실행 시간이 긴 프로세스에 불리한 SJF을 보완하기 위해 대기시간 및 서비스 시간을 이용 우선 순위 값이 높은것에 대해 우선 순위를 제공해주는 스케쥴링

```cpp
77번 파이썬에서 시퀀스 타입에 해당하며 다양한 데이터를 순서에 따라 저장할 수 있으나 저장된 내용변경이 불가한 것
```

- 튜플 타입

리스트 : 시퀀스, 순서있고 가변

튜플 : 시퀀스, 순서있고 불변

셋 : 셋, 순서없고 중복x

딕셔너리 : 맵, 순서없고 key-value

```cpp
74번 C언어 or, and 관
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e283ce1-dcf2-403f-9164-04736ff89709/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e82319c6-dcd1-4e95-95b2-1b2a2f750625/Untitled.png)

```cpp
75번 IP 프로토콜의 주요 특징에 해당하지 않는 것
```

- 체크섬 기능으로 데이터 체크섬만 제공한다

데이터 체크섬은 제공하지 않고 헤더 체크섬만 제공하며, 패킷을 분할, 병합하기도 하고 비연결형 서비스, Best Effort 원칙에 따른 전송 기능 제공

```cpp
76번 페이지 교체 알고리즘 LRU
```

```cpp
1
2
3
4

1x 2x 3x 1o 2o 4x 1o 2o 5x
총 5회

LRU는 Least Recently Used 알고리즘으로 가장 안쓰던 페이지를 교체하게된다.
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef9be6ed-4006-466b-a649-ea9fea4605b9/Untitled.png)

```cpp
77번 사용자 지원 스레드가 커널 스레드와 비교해 가지는 장점
```

- 커널 모드 전환 없이 스레드 교환이 가능해 오버헤드가 줄어든다.

```cpp
79번 주소값 관련 문제
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9c47d4e-b309-4e36-9322-554195993e2d/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de42ffeb-1be8-4617-a3fd-17532015c802/Untitled.png)

주소값을 가지는 변수는 기본적으로 [0]주소를 참조한다 문제에서 a를 출력하는데 a[0]의 주소가 10이라고 해서 a를 출력하면 10을 반환하고, a[2]의 주소는 int 형의 4byte 배열이기 때문에 10, 14, 18로 증가해 18과 10이 정답이 되는 셈

```cpp
80번 모듈화에 관한 것 중 틀린 것
```

- 응집도는 모듈과 모듈 사이 상호의존 또는 연관 정도를 의미한다

응집도는 하나의 모듈이 하나의 기능을 수행하는데 연관된거지 모듈사이의 무언가를 의미하지 않음

결합도 : 모듈과 모듈사이 상호의존 관계

응집도 : 하나의 모듈에 독립적인 기능의 정도

### 22.03.05 기출 오답정리

---

```cpp
61번 IP주소체계와 관련한 설명으로 틀린 것
```

- ipV6의 패킷 헤더는 32 octet의 고정 길이를 가진다

IPv4 : 32비트 주소, 유니캐스트/멀티캐스트/브로드캐스트 사용

IPv6 : 128비트 주소, 인증성/기밀성/무결성 지원, 유니캐스트, 애니캐스트, 멀티캐스트 사용 40 octet의 고정 길이

```cpp
62번 c언어 문제, 일단 스킵
```

```cpp
63번
```

OIS 7계층 중 데이터링크 계층에 해당되는 프로토콜이 아닌 것

- HTTP

1계층 - 물리계층 : Cozx, Fiber, Wireless

2계층 - 데이터링크계층 : Ethernet, SLIP, PPP, FDDI, HDLC

3계층 - 네트워크 계층 : IP, IPSec, ICMP, IGMP

4계층 - 전송 계층 : TCP, UDP, ECN, SCTP, DCCP

5계층 - 세션 계층 : WARIOUS API:S, SOCKETS

6계층 - 표현 계층 : SSL, FTP, IMAP, SSH

7계층 - 응용 계층 : HTTP, FTP, IRC, SSH, DNS

```cpp
67번 TCP/IP 계층 구조에서 IP의 동작 과정에서의 전송 오류가 발생하는 경우에
대비해 오류 정보를 전송하는 목적으로 사용되는 프로토콜
```

- ICMP

ARP : IP 네트워크 상에서 IP주소를 MAC주소로 변환하는 프로토콜

ICMP : IP와 조합해 통신 중 발생하는 메시지 관리 프로토콜

PPP : 점대점 데이터링크를 통해 3계층 프로토콜을 캡슐화 전송 하는 프로토

```cpp
69번 임계 구역 접근 제어 상호배제 기법
```

- Semaphore

Semaphore(세마포어) : 공유자원의 임계영역 접근을 막아줌

75번 페이지네이션 FIFO 알고리즘의 프레임 상태 하는 법

76번 C언어 실행 결과 보는 법

78번 C언어 연산 결과 보는 법

```cpp
79번 파이썬 실행 결과
```

- 파이썬은 print() 문에서 자동 개행된다.

```cpp
80번 UNIX 시스템의 쉘에서 주요 기능이 아닌 것
```

- 쉘 프로그램 실행을 위해 프로세스와 메모리 관리

해당 기능은 커널의 기능임

### 21.08.14 기출 오답정리

---

```cpp
61번 모듈 내 구성 요소들이 서로 다른 기능을 같은 시간대에 함께하는 경우 응집도
```

- Temporal Cohesion

Temporal Cohension : 시간적 응집도

Logical Cohension : 논리적 응집도, 모듈 내 구성 요소들이 같은 범주에 속하는 기능끼리 묶인 경우

Coincidental Cohension : 우연적 응집도, 모듈 내 구성 요소들이 뚜렷한 관계가 없음

Sequentital Cohension : 순차적 응집도, 모듈 내 구성요소들이 이전 명령어로부터 나온 출력결과를 그 다음 명령어의 입력자료로 사용 

```cpp
62번 오류 제어에 사용되는 자동반복 요청방식(ARQ)이 아닌 것
```

- Non-Acknowledge ARQ

자동반복 요청 방식에는 Stop-and-wait, Go-back-N, Seletetive-Repeat, Adaptive 등이 존재한다.

```cpp
64번 c언어 프로그램 실행 결과
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7dda0388-7e10-4586-a65b-3b98fa0ea198/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e559373d-4aff-420c-84aa-ebf07735cb32/Untitled.png)

```cpp
67번 JAVA에서 우선순위가 가장 낮은 연산자
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4f18487-5ed9-4370-a7ea-44271e5e9ead/Untitled.png)

```cpp
68번
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f8f4db0-a03a-449c-aeea-6e815ab96142/Untitled.png)

```cpp
69번
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b42d76f8-bc8a-4eaf-a432-4238823774ca/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e439ea1-8e41-41ac-ba6d-b60847bc1b3e/Untitled.png)

```cpp
70번 C class에 속하는 IP address
```

- 200.168.30.1

A class : 0.0.0.0~127.255.255.255

B class : 128.0.0.0 ~ 191.255.255.255

C class : 192.0.0.0 ~ 223.255.255.255

D class : 224.0.0.0 ~ 239.255.255.255

E class : 240.0.0.0 ~ 255.255.255.255

이진법으로 조금 더 쉽게 이해 가능

00000000 A 0

10000000 B 128

11000000 C 192

11100000 D 224

11110000 E 240

```cpp
78번 페이지 교체 알고리즘이 아닌 것
```

- LUF(Least Used First)

페이지 알고리즘의 종류

Optimal - 앞으로 가장 오래 사용되지 않을 페이지 교체

FIFO - First In First Out

LRU - Least Recently Used : 가장 오랫동안 사용되지 않은 페이지 교체

LFU - Least Frequently Used : 참조 횟수가 가장 작은 페이지 교체

MFU - Most Frequently Used : 참조 횟수가 가장 많은 페이지 교체

NUR - Not Used Recently : 최근 사용하지 않은 페이지 교체

```cpp
80번 파일 디스크립터에 대한 설명으로 틀린 것
```

- 사용자가 파일 디스크립터를 직접 참조할 수 있다.

사용자는 파일 디스크립터를 직접 참조할 수 없다

### 2020.06.06 오답 정리

---

```cpp
62번 C언어에서 논리연산자에 해당하지 않는 것
```

- ?

?는 조건 연산자

논리 연산자 : & , ^ , l , ~

```cpp
63번 TCP/IP 프로토콜 중 전송계층 프로토콜
```

- TCP

HTTP, FTP, SMTP 는 응용계층에서 동작

TCP는 전송 계층

```cpp
65번 은행가 알고리즘은 교착상태 해결 방법 중 어떤 기법인가
```

- Avoidance

은행가 알고리즘은 회피 기법이다.

```cpp
67번 교착 상태 발생의 필요 충분 조건이 아닌 것
```

- 선점

교착상태 필요충분 조건은

-상호배제

-점유와대기

-환형대기

-비선점

등이 있다.

FIFO 알고리즘 정확한 순서

FIFO : 이미 많이 사용한거 교체

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1513c0e8-d408-4de4-a0be-875a92273a39/Untitled.png)

페이지 교체 - 고정적 - 내부 단편화 발

세그먼트 - 가변적 - 외부 단편화 발생

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a15b4e46-e569-4e4b-9b76-6dc20903c349/Untitled.png)

1 2 3 1 2 4 1 2 5

11

11

```cpp
1 2 3 1 2 4 1 2 5

123124125
111114445
 22222111
  3333322
oooxxoooo
총 7번 페이지 부
```

o

LRU(Least Recently Used) : 사용한지 가장 오래된 것 교체

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/67ca9b1a-2d8a-41d9-9487-d30934b5e1d9/Untitled.png)

```cpp
1 2 3 1 2 4 1 2 5 4

1231241254
1111111114
 222222222
  33344455
oooxxoxxoo
6번의 페이지 부재
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90fcaf38-be0e-4f62-bae8-67a05069235e/Untitled.png)

### 20.09.26 기출 오답정리

---

```cpp
61번 UNIX SHELL 환경 변수 출력 명령어
```

- printenv
- env
- setenv

“configenv”는 환경 변수 출력이 아님

```cpp
67번 자바 코드 실행
```

- 자바 while문에서는 true, false로만 값이 나와야하며, int값은 자동 인식을 하지 않는다.

```cpp
68번 파이썬 실행 결과
```

- for문으로 생각하면 됨 인덱스 범위, 증가

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f67a3e24-9cd6-4162-848b-534d2a5a8f59/Untitled.png)

```cpp
70번 SJF 결과
```

- 실행시간이 짧은것부터 실행

```cpp
78번 TCP/IP 에서 사용되는 논리주소를 물리주소로 변환시켜주는 프로토콜
```

- ARP

반대는 RARP

```cpp
80번 PHP에서 사용 불가한 연산자
```

- #

이 외 @, < >, === 은 사용가능

### 20.09.26 기출 오답정리

---

```cpp
70번 모듈이 다수 관련 기능을 가질 때 모듈안의 구성 요소들이
그 기능을 순차적으로 수행할 경우 응집도
```

- 절차적 응집도

```cpp
71번 OSI-7Layer에서 링크의 설정과 유지 담당, 노드 간의 오류제어와 흐름제어
```

- 데이터링크 계층

```cpp
72번 결합도가 가장 강한 것
```

- common coupling

### 2020.06.06 오답 정리 2

---

```cpp
68번 OSI-7계층에서 종단간 신뢰성 있고 효율적인 데이터를 전송하기 위해
오류검출과 복구, 흐름제어를 수행하는 계층
```

- 전송 계층

`응용계층` - 사용자가 `OSI환경`에 접근할 수 있도록 서비스 제공

`표현`계층 - 응용계층으로 받은 데이터를 세션계층에 보내기 전에 통신에 `적당한 형태`로 변환

`세션`계층 - 송 수신 측 간 관련성 유지, `대화 제어`

`전송계층` - `종단` 시스템 간 투명한 데이터 전송 가능

네트워크계층 - 네트워크 연결을 관리 및 데이터 교환 및 중계

`데이터링크` 계층 - `인접 개방 시스템들 간` 신뢰성 있고 효율적인 정보 전송

물리계층 - 전송에 필요한 두 장치 간 실제 접속과 기계적, 전기적, 기능적 절차 특성에 의한 규칙

데이터링크와 전송 모두 오류제어, 흐름제어를 하는데 전송계층은 ‘종단’에 신뢰성 있는 데이터 전송, 데이터 링크 계층은 ‘두 개의 인접한 개발 시스템’간의 신뢰성 있는 데이터 전송을 위해서 이다.