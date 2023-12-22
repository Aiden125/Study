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


# 중요파트
# 인자 갯수에 상관없이 코딩하는 언팩킹에 대해 이해해야 한다.

## *args, **kwars
## *args(언팩킹) : 가변인자를 사용할 수 있게해준다.
## 주로 튜플을 사용할 때 사용
def args_func(*args):
    for i, v in enumerate(args):
        print('Result : {}'.format(i), v)
    print('----')

args_func('Lee')
args_func('Lee', 'Park')
args_func('Lee', 'Park', 'Kim')


## **kwargs(언팩킹) : 가변인자를 사용할 수 있게해준다.
## 딕셔너리 형태로 넣김
def kwargs_func(**kwargs):
    for v in kwargs.keys():
        print("{}".format(v), kwargs[v])
    print('------')

kwargs_func(name1='Lee')
kwargs_func(name1='Lee', name2='Park')
kwargs_func(name1='Lee', name2='Park', name3='Cho')


# 전체 혼합 예제
def example(args_1, args_2, *args, **kk):
    print(args_1, args_2, args, kk)

example(10, 20, 'Lee', 'Kim', 'Park', age1=20, age2=20, age3=40)

print('----------')

# 중첨함수
def nested_func(num):
    def func_in_func(num): # 얘는 부모함수안에 있는 함수여서 얘만 호출하는건 불가능하다.
        print(num)
    print("In func")
    func_in_func(num+100)

nested_func(100)



# 람다식 예제
# 메모리 절약, 가독성 향상, 코드 간결
## 함수는 객체 생성 -> 리소스(메모리) 할당
## 람다는 즉시 실행 함수(Heap 초기화) -> 메모리 초기화
## 남발 시 가독성 감소
