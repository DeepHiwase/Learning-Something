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

int main()
{
  stack<int> st;

  st.push(10);
  st.push(20);
  st.push(30);

  int element = 400;

  insertAtBottom(st, element);

  while (!st.empty())
  {
    cout << st.top() << endl;
    st.pop();
  }

  return 0;
}