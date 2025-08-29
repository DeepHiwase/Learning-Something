#include <iostream>
using namespace std;

class Deque
{
public:
  int *arr;
  int size;
  int front;
  int rear;

  Deque(int size)
  {
    arr = new int[size];
    this->size = size;
    front = -1;
    rear = -1;
  }

  void pushBack(int val)
  {
    if ((front == 0 && rear == size - 1) || (rear == front - 1))
    {
      // Overflow
      cout << "Overflow, stack is full" << endl;
      return;
    }
    else if (front == -1 && rear == -1)
    {
      // empty
      front++;
      rear++;
      arr[rear] = val;
    }
    else if (rear == size - 1 && front != 0)
    {
      // circuler case
      rear = 0;
      arr[rear] = val;
    }
    else
    {
      // normal case
      rear++;
      arr[rear] = val;
    }
  }
  void pushFront(int val)
  {
    // normal Deque
    // Overflow
    // empty case
    // normal case
    if ((front == 0 && rear == size - 1) || (rear == front - 1))
    {
      // Overflow
      cout << "Overflow, stack is full" << endl;
      return;
    }
    else if (front == -1 && rear == -1)
    {
      rear++;
      front++;
      arr[front] = val;
    }
    else if (front == 0 && rear != size - 1)
    {
      // circular nature -> remember to check rear not equal to size-1
      front = size - 1;
      arr[front]--;
    }
    else
    {
      front--;
      arr[front] = val;
    }
  }

  void popFront()
  {
    if (front == -1 && rear == -1)
    {
      // Underflow
      cout << "Underflow, stack is empty" << endl;
      return;
    }
    else if (front == rear)
    {
      // single elemnt
      arr[front] = -1;
      front = -1;
      rear = -1;
    }
    else if (front == size - 1)
    {
      // circuler case
      arr[front] = -1;
      front = 0;
    }
    else
    {
      // normal case
      arr[front] = -1;
      front++;
    }
  }

  void popBack()
  {
    // Underflow
    // single element
    // normal flow
    if (front == -1 && rear == -1)
    {
      cout << "Underflow" << endl;
      return;
    }
    else if (front == rear)
    {
      arr[rear] = -1;
      front = -1;
      rear = -1;
    }
    else if (rear == 0)
    {
      // circular
      rear = size - 1;
    }
    else
    {
      arr[rear] = -1;
      rear--;
    }
  }
};

int main()
{

  return 0;
}