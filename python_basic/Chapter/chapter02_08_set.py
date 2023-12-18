# 파이썬 집합(Set)
# 집합 자료형(순서x, 중복x, 추가o, 삭제o)

# 선언
a = set()
print(a, type(a))

b = set([1,2,3,4, 4, 4])
c = set([1,4,6,4])
d = set([1,2,'pen','cap','plate'])
e = {'foo', 'bar', 'baz', 'foo', 'qux'}
f = {42, 'foo', (1, 2, 3), 3.12422}

print(a)
print(b)
print(c)
print(d)
print(e)
print(f)

# 집합 자료형 활용
s1 = set([1,2,3,4,5,6])
s2 = set([4,5,6,7,8,9])

## 교집합 보기
print('s1 & s2 : ', s1 & s2)
print('s1 & s2 : ', s1.intersection(s2))

## 합집합 보기
print('s1 | s2 : ', s1 | s2)
print('s1 | s2 : ', s1.union(s2))

## 차집합 보기
print('s1 - s2 : ', s1 - s2)
print('s1 - s2 : ', s1.difference(s2))