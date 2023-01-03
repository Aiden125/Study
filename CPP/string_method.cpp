#include <bits/stdc++.h>
using namespace std;

int main() {
	string a = "love is";
	a += " pain!";
	a.pop_back(); // ������ ���� ���� O(1)
	
	cout << a << " : " << a.size() << "\n";  // love is pain : 12  O(n)
	cout << char(* a.begin()) << '\n'; // ó���� �ϳ� ��ȯ l
	cout << char(* (a.end() -1)) << '\n'; // ���������� ������ ������ ���� ��ȯ  n
	
	a.insert(0, "test "); // �ش� �ε����� ���ڿ� ���� O(n)
	cout << a << " : " << a.size() << "\n"; // test love is pain : 17  O(n)
	
	a.erase(0, 5); // �ش� �ε������� ���ڿ� ����� O(n)
	cout << a << " : " << a.size() << "\n"; // love is pain : 12
	
	auto it = a.find("love"); // love�� ������ string::npos�� ��ȯ 
	if (it != string::npos) { // string::npos�� size_t Ÿ���� �ִ밪���� 64��Ʈ ���� 184467440~~ 
		cout << "���ԵǾ� �ִ�." <<  '\n';
	}
	
	cout << it << '\n'; // ??
	cout << string::npos << '\n';
	
	cout << a.substr(5, 2) << '\n';
	
	return 0;
}
/*
love is pain : 12
l
n
test love is pain : 17
love is pain : 12
���ԵǾ� �ִ�.
0
18446744073709551615
is 
*/
