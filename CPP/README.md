## C++ grammer

## 가장 기본적인 예제
```C++
#include <bits/stdc++.h>
using namespace std;
string a;
int main() {
    cin >> a;
    cout << a << "\n";
    return 0;
}
```

## 헤더파일
```C++
#include <bits/stdc++.h>
```
위 include는 C++의 모든 표준 라이브러리가 포함된 헤더파일이며, 이를 include 하겠다는 뜻

## namespace
라이브러리를 디폴트로 고정하는 것
원래 std::cin 이렇게 호출해야하는 것을 cin, cout 등으로 바로 호출 할 수 있게 설정

## typedef
타입을 약어로 지정

## define
상수, 매크로 정의

## 입력과 출력
#### 입력
- cin : 개행문자까지 입력 받기
- scanf : 형식 지정 입력 받기
- geline : 한 줄 입력 받기
#### 출력
- cout : 기본 출력
- printf : 형식지정 출력

## scanf로 받을 수 있는 타입 형식
d : int / c : char / s : string / lf : double / ld : long long

## precision
precision(7) 소수 7번째 자리에서 반올림하라

## 자주 등장하는 타입 8가지
```C++
void, char, string, bool, int, long long, double, unsigned, long
```