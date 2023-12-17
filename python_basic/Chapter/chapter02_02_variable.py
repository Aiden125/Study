# 파이썬 변수

n = 700

print(n * 700)
print(type(n)) # n의 타입확인

# 동시 선언
x = y = z = 700
print(x, y, z)

# 선언
var = 75

# 재선언
var = "new Value"
print(var)
print(type(var))


# id(identity) 객체 고유값 확인
m = 800
n = 100
print(id(m)) ### 2448627177264
print(id(n)) ### 2448580218192
print(id(m) == id(n)) ### False
print()

# id(identity) 객체 고유값 확인, 같은 값일 경우 같은 주소를 가진다
a = 800
b = 800
print(id(a)) ### 2448627123123
print(id(b)) ### 2448627123123
print(id(a) == id(b)) ### True
print()

