# 파이썬 외장함수
# 종류 : sys, pickle, shutil, temfile, time, random 등

# 예제1
import sys
print(sys.argv) ## 파일 경로 리턴

# 예제2(강제 종료)
# sys.exit()

# 예제3(파이썬 패키지 위치)
print(sys.path)

# pickle : 객체 파일 쓰기
import pickle

# 예제4(쓰기)
f = open("test.obj", "wb")
obj = {1: 'python', 2: 'study', 3:'basic'}
pickle.dump(obj, f)
f.close()

# 예제5(읽기)
f = open('test.obj', 'rb') ## 경로 지정안했기에 현재위치에 실행
data = pickle.load(f)
print(data, type(data))
f.close()

# os : 환경 변수, 디렉토리(파일) 처리 관련, 운영체제 작업 관련
# mkdir, rmdir(비어있으면 삭제), rename

# 예제6
import os
p = os.environ
print(p)
print(list(p.keys()))
print(p["USERNAME"])
print(p["HOMEPATH"])

# time : 시간 관련
import time

print(time.time())
print(time.localtime(time.time()))

# 간단 타임
print(time.ctime())

## 중요! 실제로 자주쓰는 형식 표현
print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))


# 시간 간격 발생
for i in range(5): ## range5 = 0~4 flow
    print(i)
    # time.sleep(1) # 1초 쉬기


# random : 난수
import random

# random, randint, randrange
print(random.random())
print(random.randint(1,45)) ## 1~45
print(random.randrange(1,45)) ## 1~44

# 셔플
d = [1,2,3,4,5]
random.shuffle(d)
print(d)

# 무작위 선택
c = random.choice(d)
print(c)

# webbrowser : 본인 OS의 웹 브라우저 실행
import webbrowser
webbrowser.open("http://google.com")
webbrowser.open_new("http://google.com")