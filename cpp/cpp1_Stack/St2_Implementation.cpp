#include <iostream>
using namespace std;

class Stack
{
public:
  int *arr; // why ptr, because dynamic arr bayana hai
  int size;
  int top;

  Stack(int size)
  {
    arr = new int[size];
    this->size = size;
    this->top = -1;
  }

  void push(int data)
  {
    // Overflow
    if (top == size - 1)
    {
      cout << "Stack Overflow" << endl;
      return;
    }
    else
    {
      top++;
      arr[top] = data;
    }
  }

  void pop()
  {
    // Underflow
    if (top == -1)
    {
      cout << "Stack underflow" << endl;
      return;
    }
    else
    {
      top--;
    }
  }

  bool isEmpty()
  {
    if (top == -1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  int getTop()
  {
    // Underflow
    if (top == -1)
    {
      cout << "Stack is empty" << endl;
      return -1;
    }
    else
    {
      return arr[top];
    }
  }

  int getSize()
  {
    return top + 1;
  }

  // just for over understanding, print func
  void print()
  {
    cout << "Top: " << top << endl;
    cout << "Top element: " << getTop() << endl;
    cout << "Stack:";
    for (int i = 0; i < getSize(); i++)
    {
      cout << arr[i] << " ";
    }
    cout << endl
         << endl;
  }
};

int main()
{
  // creation
  Stack st(8);

  // push
  st.push(10);
  st.print();

  st.push(20);
  st.push(30);
  st.print();
  st.push(20);
  st.push(30);
  st.print();
  st.push(20);
  st.push(30);
  st.print();
  st.push(20);
  st.push(30);
  st.print();
  st.push(20);
  st.push(30);
  st.print();

  // st.pop();
  // st.print();
  // st.pop();
  // st.print();
  // st.pop();
  // st.print();

  return 0;
}