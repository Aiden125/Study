# separator: 기본적으로 파이썬은 콤마로 구분시 띄어쓰기 하나의 separator를 가지나, 이를 변경가능하다.

print('P', 'Y', 'T', 'H', 'O', 'N')
# P Y T H O N
print('P', 'Y', 'T', 'H', 'O', 'N', sep='|')
# P|Y|T|H|O|N
print('P', 'Y', 'T', 'H', 'O', 'N', sep='')
# PYTHON
print('010', '1234', '5678', sep='-')
# 010-1234-5678


# end: 기본적으로 개행을 하지만 end를 주면 개행대신 넣는 문자를 정하는 것
print('aaaa', end='  ')
print('bbbb', end='')
#### aaaa  bbbb

print()

# format (d: digit:3, s:string 'aaa', f:float:3.141592)
# format을 지정해서 출력, %s 등의 형식과 {} 괄호 형식이 존재한다.
print('%s %s' % ('one', 'two'))
print('{} {}'.format('one', 'two'))


x = 50
y = 100
text = 30142
n = 'Lee'

# 출력1
ex1 = 'n = %s, s = %s, sum=%d' % (n, text, (x + y))
print(ex1)

# 출력2
ex2 = 'n = {n}, s = {s}, sum={sum}'.format(n=n, s=text, sum=x+y) #이걸 더 선호
print(ex2)

# 출력3
ex3 = f'n = {n}, s = {text}, sum={x + y}' # f string이라고 부르며, 밖의 변수를 그대로 넣을 수 있는 방법이며 자바 string.format이라고 보면될듯
print(ex3)

