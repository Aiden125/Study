# 파이썬 예외

# SyntaxError, TypeError, NameError, IndexError, ValueError..
#1. 예외는 반드시 처리
#2. 로그는 반드시 남긴다.
#3. 예외는 던져진다.
#4. 예외 무시

# SyntaxError: 문법 오류
# print('error') #보통 IDE가 알려줌

# NameError : 참조 없음
# print(c)

# KeyError
dic = {'name': 'Lee', 'Age': 41, 'City': 'Busan'}
# print(dic['hobby']) keyerror 발생
print(dic.get('hobby')) # get을 사용하면 dictionary에서 없는 경우 None 반환해서 예외발생x


# AttributeError : 모듈, 클래스에 있는 잘못된 속성 사용 예외
# print(time.time()) ## 없는 모듈이나 클래스등을 참조할때

x = [1,2] # 리스트
y = (1,2) # 튜플
# print(x + y)


# 예외 처리 기본
'''
try : 에러가 발생할 가능성이 있는 코드 실행
except 에러명1 : 여러개 가능
except 에러명2
else : try 블록의 에러가 없을 경우 실행
finally : 항상 실행
'''
name = ['Kim', 'Lee', 'Park']

# 예제1
try:
    z = 'Kim'
    x = name.index(z)
    print('{} Found it {} in name'.format(z, x+1))
except ValueError: ## ValueError 에러가 날경우
    print('Not found it! - Occurred ValueError')
else: ## 에러가 안나면
    print('Ok! else.')

print()


# 예제2
try:
    z = 'Kime'
    x = name.index(z)
    print('{} Found it {} in name'.format(z, x+1))
except: ## 모든 에러 처리
    print('Not found it! - Occurred ValueError')
else: ## 에러가 안나면
    print('Ok! else.')



# 예제3
try:
    z = 'Cho'
    x = name.index(z)
    print('{} Found it {} in name'.format(z, x+1))
except Exception as e: ## 모든 에러 처리
    print(e)
    print('Not found it! - Occurred ValueError')
else: ## 에러가 안나면
    print('Ok! else.')
finally:
    print('Ok! finally!')


# 예제4
# raise 키워드로 예외를 직접 발생시킬수 있음 Validator 등
try:
    a = 'Park'
    if a == 'Kim':
        print('Ok Pass')
    else:
        raise ValueError
except ValueError:
    print('Occurred! Exception')
else:
    print('Ok! else!')