# 문자열
str1 = "I am Python"
str2 = 'Python'
str3 = """How are you?"""
str4 = '''Thank you!'''

print(type(str1), type(str2), type(str3), type(str4))
print(len(str1), len(str2), len(str3), len(str4))


# 빈 문자열 생성
str_t1 = ''
str_t2 = str()

print(type(str_t1), len(str_t1))
print(type(str_t2), len(str_t2))

# 이스케이프 문자
print("I\'m Boy") ## ' 기호 이스케이프 처리
print('a \t b') ## tab키만큼 벌리는 이스케이프
print('c \n d') ## 엔터 이스케이프 \n
print('a \"\" b') ## \"


# Raw String : 모두 이스케이프 처리하는 방법, 주로 파일 경로 등 하나하나 이스케이프 처리하기 힘든 경우 사용
raw_s1 = r'D:\python\test'
print(raw_s1)


# 멀티라인 입력: 역슬래시(\)를 활용해서 가능
multi_line = \
"""
String
Multi line
Test
"""
print(multi_line)

# 문자열 연산: 파이썬은 문자열도 곱하기, 더하기 등으로 반복처리가 가능하다
str_o1 = "Python"
str_o2 = "Apple"
str_o3 = "How are you doing"
str_o4 = "Seoul Busan"
print(str_o1 * 3) ##p PythonPythonPython
print(str_o1 + str_o2) ##p PythonApple
print("y" in str_o1) ##p True
print("z" in str_o1) ##p False

# 문자열 형 변환
print(str(66), type(66))
print(str(10.1))
print(str(True), type(str(True)))

# 문자열 함수(upper, isalnum, starswith, count, endswith, isalpha, ...)
a = "hi I am trust"
print("Capitalize : ", a.capitalize()) ## 오직 첫번째 글자만 대문자로 변환
print("endswith? : ", a.endswith("!")) ## 이걸로 끝나는지?
print("replace : ", a.replace("trust", "Good"))
print("sorted: ", sorted(a)) ## 문자열 정렬
print("split: ", a.split(" ")) ## 특정 단어 분리

# 반복(시퀀스)
is_str = "Good Boy!"
print(dir(is_str)) ## __iter__ 가 있다면 시퀀스

# 출력
for i in is_str: ## 문자열을 한글자한글자 잘라서 출력 가능
    print(i)

# 슬라이싱(substring과 같음)
str_1 = "Nice Book"

print(len(str_1)) ## 9
# 슬라이싱 연습
print(str_1[0:3]) ##p Nic
print(str_1[5:10]) ##p Book
print(str_1[5:]) ##p Book
print(str_1[5]) ##p B
print(str_1[0:len(str_1)]) ##p Nice Book
print(str_1[1:9:2]) ## 1번째부터 9번째까지 2번씩 건너뛰면서 가져오기
print(str_1[::2]) ## 처음부터 끝까지 두칸 간격으로 뛰면서
print(str_1[::-1]) ## 오른쪽에서 왼쪽으로 읽어감

# 아스키 코드 (ord : 문자 to 아스키코드, chr: 아스키코드 to 문자)
print(ord("z")) ## z의 아스키코드
print(chr(122)) ## 아스키 코드 122