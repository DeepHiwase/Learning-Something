#include <iostream>
#include <stack>
using namespace std;

int main()
{
  // creation
  stack<int> st;

  // inserion
  st.push(10);
  st.push(20);
  st.push(30);

  // size
  cout << "Size of stack: " << st.size() << endl;

  // remove
  st.pop();

  // check empty
  if (st.empty())
  {
    cout << "Stack is empty" << endl;
  }
  else
  {
    cout << "Stack is non-empty" << endl;
  }

  // top element find which
  cout << "Top element: " << st.top() << endl;

  return 0;
}