# 파이썬 함수 기초

# 기초 함수 형태
def function1():
    print("ex1")

function1()

# 튜플 리턴
def function_mul2(x):
    y1 = x * 10
    y2 = x * 30
    y3 = x * 30
    return (y1, y2, y3)
q = function_mul2(20)

print(type(q), q, list(q)) ## 튜플을 리스트로 캐스팅 가능

# 리스트 리턴
def function_mul2(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return [y1, y2, y3]

p = function_mul2(30)
print(type(p), p, set(q)) ## 리스트를 set으로 캐스팅 가능

# 딕셔너리 리턴
def function_mul3(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return {'v1': y1, 'v2':y2, 'v3':y3}

d = function_mul3(40)
print(type(d), d, d.get('v2'), d.items(), d.keys())


