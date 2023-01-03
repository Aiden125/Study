#include <bits/stdc++.h>
using namespace std;

// split �޼��� O(n)
vector<string> split(string input, string delimiter) {
	vector<string> ret;
	long long pos = 0;
	string token = "";
	
	// �ڡڵ��� ���ڿ��� �ڸ������� �ִ��� üũ�ڡ� 
	while((pos = input.find(delimiter)) != string::npos) {
		token = input.substr(0, pos); // �ڸ��� ��ū���� ���� 
		ret.push_back(token); // ��ū�� ret�� ���� 
		input.erase(0, pos + delimiter.length()); // ��ǲ���� �����Ÿ�ŭ �߶���� 
	}
	
	ret.push_back(input); // �߸� ������� ��� �迭 ����(���̴� �ڸ�Ƚ��+1) 
	return ret;
}

int main() {
	string s = "�ȳ��ϼ��� ���� ������ ���� ��׿�!";
	vector<string> a = split(s, " "); // ��ǲ, �ڸ� ���� 
	for(string b : a) { // �޾ƿ� �迭 for�� 
		cout << b << "\n";
	}
}

/*
���� split�� ������ �ϸ� �ٽɸ� ����ϸ� ����. 
*/
