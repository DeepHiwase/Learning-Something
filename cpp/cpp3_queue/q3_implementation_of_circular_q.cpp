#include <iostream>
using namespace std;

class CQueue
{
public:
  int *arr;
  int size;
  int front;
  int rear;

  CQueue(int size)
  {
    arr = new int[size];
    this->size = size;
    front = -1;
    rear = -1;
  }

  bool isEmpty()
  {
    if (front == -1 && rear == -1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  bool isFull()
  {
    if (front == 0 && rear == size - 1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  void push(int data)
  {
    if ((front == 0 && rear == size - 1) || (rear == front - 1))
    {
      // Overflow
      cout << "Overflow, stack is full" << endl;
      return;
    }
    else if (this->isEmpty())
    {
      // empty
      front++;
      rear++;
      arr[rear] = data;
    }
    else if (rear == size - 1 && front != 0)
    {
      // circuler case
      rear = 0;
      arr[rear] = data;
    }
    else
    {
      // normal case
      rear++;
      arr[rear] = data;
    }
  }
  void pop()
  {
    if (this->isEmpty())
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

  // optional to add print for ourselves not present in actual implementation of circuler queue
};

int main()
{

  return 0;
}