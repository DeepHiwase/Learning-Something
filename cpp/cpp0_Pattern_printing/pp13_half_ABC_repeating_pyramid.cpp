#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Inverted Half Pyramid
  // n =5
  // * * * * * *
  // *       *
  // *     *
  // *   *
  // * *
  // *
  for (int row = 0; row < n; row++)
  {
    char ch; 
    for (int col = 0; col < row + 1; col++)
    {

      ch = (col + 1) + 'A' - 1;
      // cout << col + 1 << " ";
      cout << ch;
    }

    // jub tak 'A' tak nahi pohchte hai tabtak print kerenge
    for (char alphabet = ch; alphabet > 'A'; ) {
      alphabet--;/// first -- then print
      cout << alphabet;
    }


    cout << endl;
  }

  return 0;
}