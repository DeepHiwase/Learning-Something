#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // if input want to get if 8 line and you want to print 8 line shape only then store num = n/2 and num will be the limit for outer loop
  // Full Pyramid
  // n =5
  //       *
  //     *   *
  //   *   *   *
  // *   *   *   *
  // *   *   *   *
  //   *   *   *
  //     *   *
  //       *

  // full pyramid
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
      cout << "* " << "  "; // star" ' + space" '
    }

    cout << endl;
  }

  // inverted full pyramid
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
      cout << "* " << "  "; // star" ' + space" ' -> to make it spacious as it contain a space
    }

    cout << endl;
  }

  return 0;
}