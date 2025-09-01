#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Full Pyramid
  // n = 4
  //       *
  //     *   *
  //   *       *
  // *           *

  // full pyramid but only print inner loop when j == 0 || j is last col like if 0 - k-1 then here is j = 0 to j = (row + 1) - 1
  for (int i = 0; i < n; i++)
  {

    // space
    for (int j = 0; j < n - i - 1; j++)
    {
      cout << " " << " ";
    }

    // star
    for (int j = 0; j < i + 1; j++)
    {
      // print * only for first or last column
      if (j == 0 || j == (i + 1) - 1)
      {
        cout << "* " << "  ";
      }
      else
      {
        cout << "  " << "  ";
      }
    }

    cout << endl;
  }

  return 0;
}