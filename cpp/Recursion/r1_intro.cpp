#include <iostream>
using namespace std;

int stepsToReachHome(int dist)
{
  // base case
  if (dist == 1)
    return 1;
  // processing + recursive call
  return 1 + stepsToReachHome(dist - 1);
}

long getMultipleOfTwo(int pow)
{
  // base case
  if (pow == 0)
    return 1;
  // processing + recursive call
  return 2 * getMultipleOfTwo(pow - 1);
}

void printNto1(int n)
{
  // base case
  // if (n == 0)
  //   return;
  if (n == 1)
  {
    cout << 1;
    return;
  }
  // processing
  cout << n << " ";
  // recursive call
  printNto1(n - 1);
}

void print1toN(int n)
{
  // base case
  // if (n == 0)
  //   return;
  if (n == 0)
    return;
  // recursive call
  print1toN(n - 1);
  // processing
  cout << n << " ";
}

signed long long getFactorial(int n)
{
  // // base case
  // if (n == 1 || n == 0)
  //   return 1;
  // processing + recursive call
  return n * getFactorial(n - 1);
}

int getIthNumFromFibonacci(int i)
{
  // base case
  if (i == 0)
    return 0;
  if (i == 1)
    return 1;
  // processing + recursive call
  return getIthNumFromFibonacci(i - 1) + getIthNumFromFibonacci(i - 2);
}

void printArray(int arr[], int n)
{
  // base case
  if (n == 0)
  {
    return;
  }
  // processing
  cout << *arr << endl;
  // recursive call
  printArray(arr + 1, n - 1);
}

int main()
{
  // cout << stepsToReachHome(5) << endl;

  // cout << getMultipleOfTwo(44) << endl;

  // printNto1(6);
  // cout << endl;

  // cout << getFactorial(5) << endl;

  // print1toN(6);
  // cout << endl;

  // cout << getIthNumFromFibonacci(12) << endl;

  int arr[] = {1, 2, 3, 4, 5};
  printArray(arr, 5);

  return 0;
}