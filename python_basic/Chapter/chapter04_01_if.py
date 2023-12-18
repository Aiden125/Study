# 파이썬 IF

num = 75

if num >= 90:
    print('Grade : A')
elif num >= 80:
    print('Grade :  B')
elif num >= 70:
    print('Grade : C')
else:
    print("과락")


# in, not in
q = [10,20,30]
w = {70,80,90,100}
e = {"name": "Lee", "city": "Seoul", "age": 23}

print(15 in q)
print(90 in w)
print("Seoul" in e.values())
