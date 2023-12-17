# 파이썬 리스트(순서o, 중복o, 수정o, 삭제o)

# 선언
a = []
b = list()
c = [70, 75, 80, 85] ##len 사용가능
d = [1000, 10002, 'ACe', "Base", 'Couple'] ##서로 다른 자료형 가능
e = [4, 5, 'Q', ['Ace', 'Bse', 'Captine']] ##리스트 안에 리스트 가능
f = [21.42, 'boobar', 3, 4, False, 3.124]

print('>>>>>>>>>>>>>>>>')
# 인덱싱
print('d - ', type(d), d)
print('d - ', d[1])
print('d - ', d[0] + d[1])
print('d - ', d[-1]) ##p Base, -라서 오른쪽에서부터
print('e - ', e[-1][1])
print('e - ', list(e[-1][2])) ## 릿트 안에 Bse라는 글자를 리스트로 감싸서 리스트로 출력

print(">>>>>>>>>>>>>>>")
# 슬라이싱
print('d - ', d[0:3])
print('d - ', d[2:])
print('e - ', e[-1][1:3])

print(">>>>>>>>>>>>>>>")
# 리스트 연산
print('c + d:', c+d) ## c앞에, d뒤에 붙은 리스트
print('c * 3:', c*3) ## c를 순서대로 세번붙임
# print("text" + c[0]) ## 문자열 + int여서 에러
print("text" + str(c[0]))


print('>>>>>>>>>>>>>>>>')
# 값 비교
print(c == c[:3] + c[3:]) ## True
print(c)
print(c[:3] + c[3:])

# identity(id) 같은 값을 가지면 주소를 본다
temp = c
print(temp, c)
print(id(temp))
print(id(c))

# 리스트 수정, 삭제
c[0] = 4
print('c - ', c)
c[1:2] = ['a', 'b', 'c'] ##p [4, 'a', 'b', 'c', 80, 85]
# c[1:2] = [['a', 'b', 'c']] ##p [4, ['a', 'b', 'c'], 80, 85]
print('c - ', c)
del c[2] ## 삭제, 몇번 인덱스를 지워라
print('c - ', c)

# 리스트 함수
a = [5, 2, 3, 1, 4]
print('a - ', a)
a.append(10) ## 맨뒤에 삽입
print('a - ', a)
a.sort()
print('a - ', a)
a.reverse()
print('a - ', a)

a.insert(2, 7) ## 위치, 내가 추가할 값
print('a - ', a)

del a[6] ## 몇번 인덱스를 지워라, 잘 안씀
print('a - ', a)

a.remove(10) ## 10이라는 값을 지워라
print('a - ', a)
print('a - ', a.pop()) ## 마지막 원소 pop

print('a안에 4의 개수 - ', a.count(4)) ## 4라는 값이 몇개 있는지
ex = [8, 9]
a.extend(ex) ## 뒤에 8, 9를 부임

print('a - ', a)
# 삭제 : remove(원하는 값 제거), pop(맨 뒤의 값 제거), del
while a:
    data = a.pop()
    print(data)