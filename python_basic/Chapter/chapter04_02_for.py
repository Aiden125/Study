# 파이썬 반복문
# for in <collection>
#   <loop body>

for v1 in range(10): # 0 ~ 9
    print('v1 is :', v1)

for v2 in range(1, 11): # 1 ~ 11
    print('v2 is :', v2)

for v3 in range(1, 11, 2): # 1 3 5 7 9
    print('v3 is :', v3)


sum1 = 0
for v in range(1, 1001):
    sum1 += v
print('1 ~ 1000 Sum : ', sum1)
print('1 ~ 1000 Sum : ', sum(range(1, 1001))) ## range는 리스트를 잡아줌


# Iterables 자료형 반복
# 문자열, 리스트, 튜플, 집합, 딕셔너리
# Iterable 리턴 함수 : range, reversed, eumerate, filter, map, zip

# 예제1
names = ['Kim', 'Park', 'Cho', 'Lee', 'Choi']
for n in names:
    print('You are : ', n)

# 예제2
word = "Beautiful"
for s in word:
    print(s, end=" ")

# 예제3
my_info = {
    "name" : "Lee",
    "age" : 23,
    "city" : "Seoul",
}
for key in my_info:
    print('key :', my_info[key])
for v in my_info.values():
    print('value :', v)

# 예제4
name = 'FineApplE'
for n in name:
    if n.isupper():
        print(n)
    else:
        print(n.upper())


# brank
numbers = [1,2,3,4,5,6,123,23,123,12,12,312,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
for num in numbers:
    if num == 9:
        print('found 9')
        break
    else:
        print('not found', num)