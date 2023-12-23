# 파이썬 내장 함수
# 필수요소 네가지

# enumerate : 인덱스 + Iterable 객체 생성
for i, name in enumerate(['abc', 'bcd', 'efg']):
    print(i, name)

# filter: 반복 가능한 객체 요소를 지정한 함수를 대상하나하나 실행해서 결과값이 true인지 false인지 따져서 true인 것만 필터링
def conv_pos(x):
    if x > 2:
        return pow(x, 2)
    else:
        return 0

print(filter(conv_pos, [1,-3,2,0,-5,6]))
print(list(filter(conv_pos, [1,-3,2,0,-5,6])))
print(list(filter(lambda x: abs(x) > 2, [1,-3,2,0,-5,6])))

# map : 반복 가능한 객체 요소를 지정한 함수를 대상하나하나 실행해서 실행된 값을 반환
def conv_abs(x):
    if x > 2:
        return pow(x, 2)
    else:
        return 0

print(map(conv_abs, [1,-3,5,2,0,6,-5]))
print(list(map(conv_abs, [1,-3,5,2,0,6,-5])))
print(list(map(lambda x: abs(x), [1,-3,5,2,0,6,-5])))

# range : 반복가능한 객체(Iterable) 반환
# print(range(1,10,2))
# print(list(range(1,10,2)))
# print(list(range(0,-15,-1)))
