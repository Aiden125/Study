#include <bits/stdc++.h>
using namespace std;

vector<pair<int, int>> v; // pair를 통해 만든 vector
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
pair 기반으로 만든 vector는 따로 설정 안해도 first, second, third순으로
오름차순 정렬된다.

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
