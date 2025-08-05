#include <iostream>
using namespace std;

int addNumbers(int a, int b);

int main()
{
  cout << addNumbers(1, 2) << endl;
  return 0;
}

int addNumbers(int a, int b)
{
  return (a + b);
}