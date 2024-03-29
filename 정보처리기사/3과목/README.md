### 22.3월 기출 오답정리

```cpp
43번 R의 모든 조인 종속성의 만족이 R의 후보키를 통해서만 만족
→ 제 5정규형
```

```cpp
46번 모든 것에 대한 의미 논리 기호
→ A를 뒤집어 놓은 것
```

```cpp
50번 A→B 이고 B→C 일 때 A→C인 관계를 제거하는 단계
→ 이행적 종속 2NF -> 3NF
```

```cpp
51번 CREATE TABLE문에 포함되지 않는 기능
→ 속성 타입 변경
```

```cpp
52번 SQL에 관해 틀린 것
→ REVOKE는 DCL 권한을 해제
```

```cpp
57번 SQL문 실행 결과
```

→ UNION은 모든 결과를 합집합 하라는 뜻

```cpp
58번 분산 DB 시스템
```

→ 분산 디비 시스템의 주요 구성에는 전역, 분할, 할당, 지역 스키마 등이 있다.

```cpp
59번 V_1을 이용해 V_2까지 만들었다.
```

DROP VIE V_1 CASCADE;의 결과

→ CASCADE의 경우 연관된거까지 지운다

→ V_1과 V_2 모두 삭제된다.

### 22.8.14 기출 오답정리

```cpp
47번 관계 대수 연산
```

- Select
- Project
- Join
- Division

“Fork는 관계 대수 연산이 아니다”

→ 관계 대수 연산이 무엇인가?

```cpp
49번 모든 튜플에 대한 유일성은 만족하지만, 최소성은 만족 못하는 키는?
```

- 슈퍼키

슈퍼키 : 유일성을 만족하지만 최소성은 만족하지 못하는 속성 또는 속성들의 집합

후보키 : 유일성과 최소성을 만족하는 속성 또는 속성들의 집합

대체키 : 기본키로 선택되지 못한 후보키

외래키 : 다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합

```cpp
51번 로킹 단위에 대한 설명으로 옳은 것
```

- 로킹 단위가 큼 → 로크의 수가 적어짐 → 병행성 수준 낮아짐 → 병행 제어가 간단해짐

```cpp
52번 관계 대수에 대하여
```

- 관계 대수는 관계형 디비에서 원하는 정보와 그 정보를 검색하기 위해 어떻게 유도하는가에 대한 절차적 언어이다.

“비절차적 특성은 관계해석이 지니고 있다”

```cpp
55번 정규화에 대한 설명 적절한 것
```

- 데이터 구조 안정성 최대화
- 중복 배제 및 삽입, 삭제, 갱신 이상의 발생 방지
- 데이터 삽입 시 릴레이션 재구성 필요성 줄임

“정규화는 논리적 설계 단계에서 수행하는 작업이다”

```cpp
59번 이전 단계 정규형을 만족하면서 후보키를 통하지 않는 조인 종속을 제거해야 만족하는 정규형은?
```

- 제5 정규형

제1 정규형 : 모든 속성 도메인이 더는 분해되지 않는 원자값으로만 구성

제2 정규형 : 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속 되어야 함

제3 정규형 : 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속이 되지 않을 시 속함

제4 정규형 : 보이스/코드 정규형을 만족하며 함수 종속이 아닌 다치 종속 제거시 만족

제5 정규형 : 후보키를 통하지 않는 조인 종속을 제거해야 만족

```cpp
60번 Y는 X에 함수 종속이라는 표기
```

- X → Y

위와 같을 때 X를 결정자, Y를 종속자라고 표현한다.

## 21.05.15 기출 오답 정리

---

```cpp
41번 수평 분할에서 활용되는 기법이 아닌 것은?
```

- 예측 분할

라운드 로빈, 범위 분할, 해시 분할 등은 수평 분할에서 사용된다.

```cpp
42번 시스템 카탈로그에 대한 설명으로 옳지 않은 것은?
```

- 사용자가 직접 시스템 카탈로그 내용을 갱신해 데이터베이스 무결성을 유지한다.

→ 시스템 카탈로그는 DBMS가 스스로 생성하고 유지하기 때문에 DCL 등으로 시스템 카탈로그를 갱신하는 것은 허용되지 않는다.

```cpp
46번 INTERSECT의 의미
```

INTERSECT는 교집합을 의미한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cfb2332-c166-414d-8ba2-97314d279cec/Untitled.png)

```cpp
49번 병행제어 기법의 종류가 아닌 것은?
```

- 시분할 기법

→ 로킹 기법, 타임 스탬프 기법, 다중 버전 기법, 최적 병행 수행 기법 등은 병행 제어 기법이다.

```cpp
52번 관계형 데이터 모델의 릴레이션에 대한 설명으로 틀린 것은?
```

- 한 릴레이션을 구성하는 속성 사이에는 순서가 존재한다.

→ 테이블=릴레이션, 튜플은 각각의 행 즉, ROW를 의미한다. 속성은 어트리뷰트로 테이블에서 번호, 이름 등 열에 해당한다.

→ 각각 튜플은 고유 값을 가진다. 튜플 사이에는 순서가 없다. 속성의 이름은 유일해야 하지만 값은 동일할 수 있다. 속성의 순서는 중요하지 않다. 속성은 더 이상 쪼갤 수 없는 원자값이 들어간다.

```cpp
53번 카티션 프로덕트한 결과의 새로운 릴레이션의 차수와 카디널리티
```

→ 차수는 ‘+’ 를 해주고 카디널리티는 ‘*’를 해주면 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b047f06-9274-4baa-a3eb-0fff177d3d68/Untitled.png)

→ 차수 = 열, 카디널리티 = 행

```cpp
60번 3NF에서(제3정규형) BCNF가 되기 위한 조건은?
```

- 결정자가 후보키가 아닌 함수 종속 제거

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fe8c0e7-61ac-419e-92aa-767e67d9985f/Untitled.png)

## 21.03.07 기출 오답 정리

---

```cpp
43번 디비 설계 단계 중 저장 레코드 양식설계, 레코드 집중의 분석 및 설계,
접근 경로 설계와 관계되는 것은?
```

- 물리적 설계

요구조건 분석, 명세 : 데이터베이스 사용자, 사용 목적, 제약 조건 등 내용 정리 및 명세서 작성

개념적 설계 : 개념스키마 모델링, 트랜잭션 모델링, E-R다이어 그램

논리적 설계 : 트랜잭션 인터페이스 설계, 스키마 평가 및 정제, 논리적 구조의 데이터로 모델화

물리적 설계 : 저장 구조 및 액세스 경로 설정, 레코드 집중 분석 설계, 저장 레코드 양식 설계

```cpp
47번 뷰에 대한 설명 중 옳지 않은 것
```

- 뷰에 대한 삽입, 갱신, 삭제 연산 시 제약사항이 따르지 않는다.

→ 뷰는 삽입, 삭제, 갱신에 제약이 따른다.

뷰는 DBA 보안 측면으로 사용 가능하며, 뷰 위에 또 다른 뷰를 정의 가능하고, 독립적 인덱스를 가질 수 없다.

```cpp
51번 릴레이션의 수평적 부분집합으로 구성하며, 연산자의 기호는
그리스 문자 시그마를 사용하는 관계대수 연산은?
```

- Select

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2558d33-c3dd-4059-8d57-ea17457b1410/Untitled.png)

SELECT 시그마

PROJECT 파이

JOIN 나비넥타이

DIVISION 나누기

```cpp
53번 정규화를 거치지 않아 발생하게 되는 이상 현상 종류에 대한 설명으로 옳지 않은 것은?
```

- 이상(Anomaly)의 종류에는 삽입, 삭제, 갱신만 존재한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/357794d7-26c2-4967-95e5-80e099d2e5ac/Untitled.png)

```cpp
55번 3NF에서 BCNF가 되기 위한 조건은?
```

- 결정자이면서 후보 키가 아닌 것 제거

도부이결다조 → 두부이걸다줘?

1NF(도) - 2NF(부) - 3NF(이) - BCNF(결) - 4NF(다) - 5NF(조)

## 20.09.26 기출 오답 정리

---

```cpp
41번 트랜잭션의 연산은 모두 실행되거나, 모두 실행되지 않아야 한다의 특징은?
```

- 원자성(Atomicity)

Durability(영속성, 지속성) : 성공적으로 완료된 트랜잭션의 결과는 시스템이 고장나더라도 영구적으로 반영되어야한다.

Isolation(독립성, 격리성) : 어느 하나의 트랜잭션 실행중에 다른 트랜잭션의 연산이 끼어들 수 없다.

Consistency(일관성) : 시스템이 가지고 있는 고정요소는 트랜잭션 수행 전과 트랜잭션 수행 완료 후의 상태가 같아야 한다.

```cpp
42번 데이터베이스에 영향을 주는 생성, 읽기, 갱신, 삭제 연산으로
프로세스와 테이블 간 매트릭스를 만들어서 트랜잭션을 분석하는 것은?
```

- CRUD 분석

```cpp
43번 정규화된 엔티티, 속성, 관계를 시스템의 성능 향상과 개발 운영의 단순화를 위해
중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?
```

- 반정규화

인덱스 정규화 : 인덱스는 키 값으로 행 데이터 위치를 식별

반정규화 : 정규화된 엔티티를 중복, 통합, 분리 등하면서 단순화 시키는 기법

집단화 : 속성들의 세트로 구성되는 새로운 속성을 정의하는데 사용되는 개념

머징 : 둘 이상의 데이터 세트를 단일 데이터 세트로 결합 또는 행이름에 따라서 데이터 프레임을 병합 하는 것

```cpp
60번 데이터웨어하우스의 기본적인 OLAP 연산이 아닌 것은?
```

- 트랜잭션

데이터웨어하우스의 기본적인 연산은 roll-up, slicing & dicing, drill-up & down, drill-through 등이 있다.