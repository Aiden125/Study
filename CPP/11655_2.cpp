#include <bits/stdc++.h>
using namespace std;
// A = 65 , Z = 90, a = 97 , z = 122

string s; // �־����� ���ڿ�
string rot13;
int bigA = 'A', bigZ = 'Z', smallA = 'a', smallZ = 'z';
int main() {
	getline(cin, s);
	
	for(int i=0; i<s.length(); i++) {
		int a = s[i];
		
		if(a >= bigA && a <= bigZ) { // �빮���� ��� 
			a += 13;
			if(a > bigZ) {
				a -= 26;
			}
						
		}else if(a>=smallA && a<=smallZ) { // �ҹ����� ��� 
			a += 13;
			if(a > smallZ) {
				a -= 26;
			}
		}
		cout << (char)a;
		
	}
	
	return 0;
} 

/*
char a �������� ������ ���
���ڰ� �ƽ�Ű�ڵ� ���� �Ѿ�� �Ǹ� ������ ������ �߻��Ѵ�.
 
*/
