#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Numeric Half Pyramid
  // n =5
  // 1
  // 1 2
  // 1 2 3
  // 1 2 3 4
  // 1 2 3 4 5
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < i + 1; j++)
    {
      cout << j + 1 << " ";
    }
    cout << endl;
  }

  return 0;
}