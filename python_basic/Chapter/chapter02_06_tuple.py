# 파이썬 튜플
# 튜플 자료형(순서o, 중복o, 수정x, 삭제x): 엄격한 리스트

# 선언
a = () # 이렇게 괄호 ()로 튜플 표기
b = (1) # 만약 이렇게 하나만 명시되면 tuple로 인식안하기에 주의
c = (1,) # 이렇게 콤마를 붙여야 튜플로 인식
d = (1,2)
print(type(a), type(b), type(c), type(d))


a = ()
b = (1,)
c = (11, 12, 13, 14)
d = (100, 1000, 'Ace', "Base", "Captine")
e = (100, 1000, ('Ace', "Base", "Captine"))
print('d - ', d[1])
print('d - ', d[0] + d[1] + d[1])
print('d - ', d[-1])
print('d - ', e[-1])
print('d - ', list(e[-1][1])) ## 튜플을 리스트로 바꾸면 수정 가능해짐

# 수정x
# d[0] = 1500 ## 튜플은 수정 불가

# 슬라이싱
print('d - ', d[0-3])
print('d - ', d[2:])
print('d - ', e[2][1:3])

# 튜플 함수
a = (5, 2,3,1,4)
print('a - ', a)
print('a - ', a.index(3)) ## indexof = index
print('a - ', a.count(2)) ## 2가 몇개인지 반환


# 팩킹 & 언팩킹(Parking, Unpacking
t = ('foo', 'bar', 'baz', 'qux')


# 언팩킹1
(x1, x2, x3, x4) = t ## 들어있는 원소를 각각 변수에 언팩킹 가능, 괄호를 쓰긴했지만 없어도 됨
print(x1, x2, x3, x4)
print(type(x1), type(x2), type(x3), type(x4))


# 팩킹, 언팩킹
t2 = 1, 2, 3
t3 = 4,
x1, x2, x3 = t2
x4, x5, x6 = 4,5,6
print(t2)
print(t3)
print(x1, x2, x3)
print(x4, x5, x6)











