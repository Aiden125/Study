// pair ��� vector�� �������� ���� 
#include <bits/stdc++.h>
using namespace std;

vector<pair<int, int>> v; // pair�� ���� ���� vector
int main() {
	for(int i=10; i>=1; i--) {
		v.push_back({i, 10-i});
	}
	
	sort(v.begin(), v.end());
	for(auto it : v) {
		cout << it.first << " : " << it.second << "\n";
	}
	
	return 0;
} 

/*
pair ������� ���� vector�� ���� ���� ���ص� first, second, third������
�������� ���ĵȴ�.

first��Ұ� ���������� �Ǿ� 1~10 ������ ���´�
second�� �Ǿ������� �̹� first�� ������ �� ����� ���� ��Ȳ 
1 : 9
2 : 8
3 : 7
4 : 6
5 : 5
6 : 4
7 : 3
8 : 2
9 : 1
10 : 0
*/
