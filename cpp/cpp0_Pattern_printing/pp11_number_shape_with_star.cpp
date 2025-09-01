#include <iostream>
using namespace std;

int main()
{
  // 1
  // 2 * 2
  // 3 * 3 * 3
  // 4 * 4 * 4 * 4

  int num = 4;
  int n = num;

  for (int row = 0; row < n; row++)
  {
    for (int col = 0; col < (2 * row) + 1; col++)
    {
      if (col % 2 == 1)
      {
        // odd number col
        cout << "* ";
      }
      else
      {
        // number that are roe + 1
        cout << row + 1 << " ";
      }
    }
    cout << endl;
  }

  return 0;
}