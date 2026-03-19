#include <iostream>
using namespace std;

int binarySearch(int arr[], int n, int target)
{
  int start = 0;
  int end = n - 1;
  int mid = (start + end) / 2;

  while (start <= end)
  {
    if (arr[mid] == target)
    {
      return mid;
    }
    else if (target > arr[mid])
    {
      start = mid + 1;
    }
    else
    {
      // target < arr[mid]
      end = mid - 1;
    }

    // update mid
    mid = (start + end) / 2;
  }

  return -1;
}

int main()
{
  int arr[] = {10, 20, 30, 40, 50, 60, 70};
  int n = 7;
  int target = 70;

  cout << "Target 70 found at index " << binarySearch(arr, n, target) << endl;

  return 0;
}