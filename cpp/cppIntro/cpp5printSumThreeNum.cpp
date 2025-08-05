#include <iostream>
using namespace std;

int printSum(int a, int b, int c)
{
  return a + b + c;
}

// void printSum(int a, int b, int c)
// {
//   cout << a + b + c << endl;
// }

int main()
{
  int sum = printSum(1, 2, 3);
  cout << sum << endl;
  return 0;
}