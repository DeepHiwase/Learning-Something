#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  // Inverted Full Pyramid
  // n =5
  // *   *   *   *   *
  //   *   *   *   *
  //     *   *   *
  //       *   *
  //         *
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