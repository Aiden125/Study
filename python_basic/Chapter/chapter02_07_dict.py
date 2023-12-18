# 파이썬 딕셔너리
# 딕셔너리 자료형(순서x, 키 중복x, 수정o, 삭제o)(자바의 해시맵)

# 선언
a = {'name' : 'Kim', 'phone': '0101234'}
b = {0: "hello Python"}
c = {'arr': [1,2,3,4]}
d = {
    'Name': 'Nick',
    'City': 'Seoul',
    'Age': 33
}
f = dict(
    Name = 'NiceMan',
    City = 'Seoul',
    Age = 33,
)

print(f)
print('a - ', type(a))


# 출력
print('a - ', a['name']) ## 이렇게 사용시 없는키를 참조하면 에러남
print('a - ', a.get('name')) ## get으로 사용시 키가 없으면 None 반환
print('b - ', b[0])
print('b - ', b.get(0))


# 딕셔너리 추가
a['address'] = 'seoul'
print('a - ', a)
a['rank'] = [1,2,3]
print('a - ', a)

# dict_key, dict_values, dict_items :  반복문에서 사용가능
print('a - ', a.keys()) ## keys()키값들만 가져옴
print('a - ', list(a.keys())) ## 들어있는 키들을 list로 볼 수 있음
print('a - ', a.values()) ## value들 반환
print('a - ', a.items()) ## key, value 함께 반환

# pop
print('a - ', a.pop('name')) ## 딕셔너리는 pop하면 해당 키를 날림
print('c - ', c.pop('arr'))
print('f - ', f.popitem()) ## 마지막 키가 지워짐

# 조회
print('birth' in a) ##p False
print('City' in d) ##p True

## 수정 & 추가
a['test'] = 'test_values'
a['address'] = 'dj'
a.update(birth='12213')
temp = {'address': 'Busan' }
a.update(temp)
print(a)