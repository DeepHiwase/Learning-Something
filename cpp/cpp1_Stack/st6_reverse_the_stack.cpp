#include <iostream>
#include <stack>
using namespace std;

// element also pass by reference to save space/memory
void insertAtBottom(stack<int> &st, int &element)
{
  // base case
  if (st.empty())
  {
    st.push(element);
    return;
  }

  // 1 case hum solve karenge
  int tmp = st.top();
  st.pop();

  // recursion
  insertAtBottom(st, element);

  // backtrack
  st.push(tmp);
}

void reverseStack(stack<int> &st)
{
  // base case
  if (st.empty())
  {
    return;
  }

  // 1 case solve
  int temp = st.top();
  st.pop();

  // recursion
  reverseStack(st);

  // backtracking
  insertAtBottom(st, temp);
}

int main()
{
  stack<int> st;

  st.push(10);
  st.push(20);
  st.push(30);

  // cout << "Without reverse:" << endl;

  reverseStack(st);


  while (!st.empty())
  {
    cout << st.top() << endl;
    st.pop();
  }

  return 0;
}