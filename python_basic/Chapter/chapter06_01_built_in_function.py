# 파이썬 내장 함수

# all : iterable 요소 검사(참, 거짓)
# 안에 있는 요소가 모두 true면 true 반환
# any : 안에 있는 요소 중 하나라도 true면 true 반환
print(all([1,2,3])) ##p True
print(all([1,2,0])) ##p False

# char : 아스키 -> 문자, ord : 문자 -> 아스키
print(chr(67))
print(ord('C'))

# enumerate : 인덱스 + Iterable 객체 생성
for i, name in enumerate(['abc', 'bcd', 'efg']):
    print(i, name)

# filter: 반복가능한 객체 요소를 지정한 함수 조건에 맞는 값 추출
def conv_pos(x):
    return abs(x) > 2

print(list(filter(conv_pos, [1,-3,2,0,-5,6])))
print(list(filter(lambda x: abs(x) > 2, [1,-3,2,0,-5,6])))

## id : 객체의 주소값(레퍼런스) 반환
print(id(int(5)))
print(id(4))

## len : 요소 길이 반환
print(len('abcsad'))
print(len([1,2,3,12,123,12,3]))

# map : 반복 가능한 객체 요소를 지정한 함수 실행 후 추출
def conv_abs(x):
    return abs(x)

print(list(map(conv_abs, [1,-3,5,2,0,6,-5])))
print(list(map(lambda x: abs(x), [1,-3,5,2,0,6,-5])))


# pow : 제곲값 반환
print(pow(2, 10))

# range : 반복가능한 객체(Iterable) 반환
print(range(1,10,2))
print(list(range(1,10,2)))
print(list(range(0,-15,-1)))

# round : 반올림
print(round(6.5781, 2))
print(round(5.6))

# sorted : 반복가능한 객체
print(sorted([6,7,4,3,1,2]))


# sum : 반복가능한 객체 합 반환
print(sum([6,1,2,3,4,5]))
print(sum(range(1,101))) ## 1~100의 합

# type : 자료형 확인
print(type(3))
print(type({}))
print(type([]))
print(type(()))

# zip : 반복가능한 객체의 요소를 묶어서 반환
print(list(zip([10,20,30], [40,50,60])))




