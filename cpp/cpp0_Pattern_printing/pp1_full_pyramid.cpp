#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Full Pyramid
  // n =5
  //         *
  //       *   *
  //     *   *   *
  //   *   *   *   *
  // *   *   *   *   *
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

  return 0;
}