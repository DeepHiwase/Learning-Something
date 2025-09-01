#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Hollow Diamond
  // n = 5
  //         *
  //       *   *
  //     *       *
  //   *           *
  // *               *
  // *               *
  //   *           *
  //     *       *
  //       *   *
  //         *

  // Hollow pyramid
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
  // Inverted hollow pyramid
  for (int i = 0; i < n; i++)
  {

    // space
    for (int j = 0; j < i; j++)
    {
      cout << " " << " ";
    }

    // star
    for (int j = 0; j < n - i; j++)
    {
      // print * only for first or last column
      if (j == 0 || j == (n - i) - 1)
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