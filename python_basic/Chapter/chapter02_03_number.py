# 파이썬 지원 자료형
"""
int : 정수
float : 실수
complex : 복소수
bool : 불린
str : 문자열(시퀀스) ## 시퀀스란? 인덱스로 반복 가능한 형태
list : 리스트(시퀀스)
tuple : 튜플(시퀀스)
set : 집합
dict : 사전
"""
# 형 변환
a = 3.
b = 6
c = .7
d = 12.7

# 타입출력
print(type(a), type(b), type(c), type(d))

# 형 변환
print(float(b)) ## 6.0
print(int(c)) ## 0
print(int(d)) ## 12
print(int(True)) ## 1
print(int(False)) ## 0.0
# print(int("3.12")) ## error
# print(int("3.12A")) ## error

# 수치연산 함수
print(abs(-7)) ##p 7
x, y = divmod(100, 8) ## 몫과 나머지 바로 넣음
print(x, y) ##p 12 4
print(pow(5,3)) ## 5의 3승

# 외부 모듈
import math
print(math.pi)
print(math.ceil(5.1)) ##p 6