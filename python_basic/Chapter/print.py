# separator 옵션
# 기본적으로 파이썬은 콤마로 구분시 띄어쓰기 하나의 separator를 가지나, 이를 변경가능하다.

print('P', 'Y', 'T', 'H', 'O', 'N')
# P Y T H O N

print('P', 'Y', 'T', 'H', 'O', 'N', sep='|')
# P|Y|T|H|O|N

print('P', 'Y', 'T', 'H', 'O', 'N', sep='')
# PYTHON

print('010', '1234', '5678', sep='-')
# 010-1234-5678


# end
# 기본적으로 개행을 하지만 end를 주면 개행대신 넣는 문자를 정하는 것
print('aaaa', end='  ')
print('bbbb', end='')
# aaaa  bbbb

print()

# format (d: digit:3, s:string 'aaa', f:float:3.141592)
# format을 지정해서 출력, %s 등의 형식과 {} 괄호 형식이 존재한다.
print('%s %s' % ('one', 'two'))
print('{} {}'.format('one', 'two'))