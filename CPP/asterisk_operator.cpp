#include <bits/stdc++.h>
using namespace std;

int main() {
	string a = "abcda";
	string * b = &a; // ������ ���� 
	cout << b << "\n";
	cout << *b << "\n"; // ������(*)�� �̿��� ������ 
	
	return 0;
}

/*
0x6ffdf0
abcda
*/
