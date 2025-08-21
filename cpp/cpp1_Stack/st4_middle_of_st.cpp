#include <iostream>
#include <stack>
using namespace std;

void solve(stack<int> &st, int &pos, int &ans)
{
  // base case
  if (pos == 1)
  {
    ans = st.top();
    return;
  }

  // 1 case hum solve karenge
  pos--;
  int tmp = st.top();
  st.pop();

  // recursion
  solve(st, pos, ans);

  // backtrack
  st.push(tmp);
}

int getMiddleEleOfStack(stack<int> &st)
{

  int size = st.size();
  // empty st
  if (st.empty())
  {
    cout << "Stack is empty, no middle element" << endl;
    return -1;
  }
  else
  {
    // st not empty
    int pos = 0;
    // odd case
    if (size & 1)
    {
      pos = size / 2 + 1;
    }
    else
    {
      // even
      pos = size / 2;
    }

    int ans = -1;
    solve(st, pos, ans);
    return ans;
  }
}

int main()
{
  stack<int> st;

  st.push(10);
  st.push(30);
  st.push(50);
  st.push(70);
  st.push(90);
  st.push(100);

  int mid = getMiddleEleOfStack(st);
  cout << "Middle element of given stack is: " << mid << endl;

  return 0;
}