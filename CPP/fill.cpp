#include <bits/stdc++.h>
using namespace std;

// �迭�� ũ�⸦ ���� �� const int�� �ϸ� �Ǽ� ���� ����
// � �������� 1004, 1000 �̷��� ������� �Ǽ��� ���� 
const int max_n = 1004;
// �ʱ�ȭ ���� �� ��� const�� ������ ���°� ����
const int INF = 987654321;

// vector 10�� ���� 
vector<int> v[10];
// �ʱⰪ�� 0�� vector 1�� ���� 
vector<int> v2(10, 0);
// ũ�� 10 * 10, �ʱⰪ�� 0�� 2���� vector ���� 
vector <vector<int> > v3(10, vectore<int>(10, 0)); 
// ũ�Ⱑ �������� ���� 2���� vector ����
vector<vector<int> > v4;

// 1���� �迭�� ����� 0���� �ʱ�ȭ
// �Ϻ� �����Ϸ����� ������ ���� �� ���� 
int dp[10] = {0,};

// 1���� �迭 a, 2���� �迭 a2 
int a[max_n];
int a2[max_n][max_n];

int main() {
	// ���ͷ����� ������� �ʱ�ȭ
	fill(v2.begin(), v2.end(), INF);
	// 10���� �ʱ�ȭ, 1004���� ��ü������ �ʱ�ȭ
	fill(a, a + max_n, 10);
	// fill�� �̿��� 2���� �迭 �ʱ�ȭ
	fill(&a2[0][0], &a2[0][0] + max_n * max_n, INF);
	
	return 0; 
} 

/*
fill = �迭 �ʱ�ȭ 
*/
