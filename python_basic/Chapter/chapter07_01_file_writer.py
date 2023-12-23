# 파일 입출력

# 읽기모드: r, 쓰기모드: w, 추가 모드: a, 텍스트 모드:t(기본값), 바이너리 모드 b

# f = open('C:\\Webpro\\study\\python_basic\\resource\\it_news_txt')
f = open('./resource/it_news.txt', 'r', encoding='UTF-8')

# 사용가능한 속성 확인
print(dir(f))

# 인코딩 확인
print(f.encoding)
# 파일 이름
print(f.name)
# 모드 확인(읽기모드인지 등등)
print(f.mode)
cts = f.read() ## 읽어와서 cts에 저장
print(cts)

# 반드시 close
f.close()


# 예제2, with를 통해 블럭 지정, 자원 알아서 반환
with open('./resource/it_news.txt', 'r', encoding='UTF-8') as f:
    c = f.read()
    print(c)
    print(iter(c))
    print(list(c))

print()

# 예제3: read() : 전체 읽기, read(10) : 10Byte만큼 읽기
with open('./resource/it_news.txt', 'r', encoding='UTF-8') as f:
    c = f.read(20)
    print(c)
    print('-----------')
    c = f.read(20) ## 커서가 위치를 기억해서 읽어온 다음부터 읽어옴
    print(c)
    print('-----------')
    f.seek(0,0) ## 커서 처음으로 돌려주기

print()

# 예제4 : 라인별로 읽기
with open('./resource/it_news.txt', 'r', encoding='UTF-8') as f:
    line = f.readline()
    print(line)
    line = f.readline()
    print(line)


# 예제5: readlines: 전체를 읽은 후 라인 단위 리스트에 저장
with open('./resource/it_news.txt', 'r', encoding='UTF-8') as f:
    cts = f.readlines()
    print(cts)
    print()
    for c in cts:
        print(c, end='')

print()


# 파일 쓰기
with open('./resource/contents1.txt', 'w') as f:
    f.write('I love python\n')

with open('./resource/contents1.txt', 'at') as f:
    f.write('I love python2\n')

# 예제3
# writelines : 리스트 -> 파일
with open('./resource/contents2.txt', 'w') as f:
    list = ['Orange\n', 'Apple\n', 'Banana\n', 'Melon\n']
    f.writelines(list)

# 예제4: 프린트문을 파일로 출력, 잘안씀
with open('./resource/contents3.txt', 'w') as f:
    print('Test Text Write', file=f)
    print('Test Text Write', file=f)
    print('Test Text Write', file=f)
