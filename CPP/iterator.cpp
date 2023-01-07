#include <bits/stdc++.h>
using namespace std;

vector<int> v;

int main() {
	for(int i = 1; i<=5; i++) {
		v.push_back(i); // 1, 2, 3, 4, 5
	}
	
	for(int i=0; i<5; i++) {
		cout << i << "��° ��� : " << *(v.begin() + i) << "\n";
		cout << &*(v.begin() + i) << "\n";
	}
	for(auto it = v.begin(); it != v.end(); it++) {
		cout << *it << ' ';
	}
	
	cout << "\n";
	
	for(vector<int>::iterator it = v.begin(); it != v.end(); it++) {
		cout << *it << ' ';
	}
	
	auto it = v.begin();
	advance(it, 3);
	cout << "\n";
	cout << *it << "\n";
	
	return 0;
}
/*
���ͷ����Ͷ�?  �����̳ʿ� ����Ǿ� �ִ� ����� �ּҸ� ����Ű�� ��ü 
*/

/*
begin() : �����̳��� ���� ��ġ ��ȯ
end() : �����̳��� �� ���� ��ġ�� ��ȯ
advance(iterator, cnt) : �ش� iterator�� cnt���� ������ŵ�ϴ�. 

 
0��° ��� : 1
0x1a1530
1��° ��� : 2
0x1a1534
2��° ��� : 3
0x1a1538
3��° ��� : 4
0x1a153c
4��° ��� : 5
0x1a1540
1 2 3 4 5
1 2 3 4 5
4
*/
