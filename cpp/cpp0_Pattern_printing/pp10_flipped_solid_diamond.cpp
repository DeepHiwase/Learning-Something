#include <iostream>
using namespace std;

int main()
{
  // Flipped Solid diamond
  // * * * *   * * * *
  // * * *       * * *
  // * *           * *
  // *               *
  // *               *
  // * *           * *
  // * * *       * * *
  // * * * *   * * * *

  int num = 8;
  // cin >> n;
  int n = num / 2;

  // Upper part
  for (int row = 0; row < n; row++)
  {
    // inverted half pyramid
    for (int col = 0; col < n - row; col++)
    {
      cout << "* ";
    }
    // full pyramid
    for (int col = 0; col < (2 * row) + 1; col++)
    {
      cout << "  ";
    }
    //  inverted right half pyramid
    for (int col = 0; col < n - row; col++)
    {
      cout << "* ";
    }
    cout << endl;
  }

  // Lower part
  for (int row = 0; row < n; row++)
  {
    // inverted half pyramid
    for (int col = 0; col < row + 1; col++)
    {
      cout << "* ";
    }
    // full pyramid
    for (int col = 0; col < (2 * n) - (2 * row) - 1; col++)
    {
      cout << "  ";
    }
    //  inverted right half pyramid
    for (int col = 0; col < row + 1; col++)
    {
      cout << "* ";
    }
    cout << endl;
  }

  return 0;
}