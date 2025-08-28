#include <iostream>
using namespace std;

class Queue
{
public:
  int *arr;
  int size;
  int front;
  int rear;

  Queue(int size)
  {
    arr = new int[size];
    this->size = size;
    front = -1;
    rear = -1;
  }

  void push(int val)
  {
    // check full
    if (rear == size - 1)
    {
      cout << "Queue Overflow" << endl;
      return;
    }
    else if (front == -1 && rear == -1)
    {
      // empty case
      front++;
      rear++;
      arr[rear] = val;
    }
    else
    {
      // normal case
      rear++;
      arr[rear] = val;
    }
  }

  void pop()
  {
    // underflow
    if (front == -1 && rear == -1)
    {
      cout << "Queue Underflow" << endl;
      return;
    }
    else if (front == rear)
    {
      // empty case -> single element
      arr[rear] = -1;
      front = -1;
      rear = -1;
    }
    else
    {
      // normal case
      arr[front] = -1;
      front++;
    }
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

  int getSize()
  {
    // Bhul jate hai
    if (front == -1 && rear == -1)
    { // empty case
      return 0;
    }
    else
    {
      return rear - front + 1;
    }
  }

  int getFront()
  {
    if (front == -1)
    {
      cout << "No element in queue, cannot give front element" << endl;
      return -1;
    }
    else
    {
      return arr[front];
    }
  }

  int getRear()
  {
    if (rear == -1)
    {
      cout << "No element in queue, cannot give front element" << endl;
      return -1;
    }
    else
    {
      return arr[rear];
    }
  }

  // add print for our understanding
  void print()
  {
    cout << "Printing Queue: ";
    for (int i = 0; i < size; i++)
    {
      cout << arr[i] << " ";
    }
    cout << endl;
  }
};

int main()
{

  Queue q(5);
  q.print();

  // q.push(10);
  q.getSize();
  q.print();

  cout << q.getRear() << endl;
  return 0;
}