#include <iostream>
#include <stack>
using namespace std;

void insertInSortedStack(stack<int> &st, int &element)
{
  // base case
  if (st.empty() || element > st.top())
  {
    st.push(element);
    return;
  }

  // 1 case solve
  int temp = st.top();
  st.pop();

  // recursion
  insertInSortedStack(st, element);

  // backtracking
  st.push(temp);
}

void sortTheStack(stack<int> &st)
{
  // base case
  if (st.empty())
  {
    return;
  }

  // 1 case solve
  int tmp = st.top();
  st.pop();

  // recursion
  sortTheStack(st);

  // backtrack
  insertInSortedStack(st, tmp);
}

int main()
{
  stack<int> st;

  st.push(1);
  st.push(20);
  st.push(3);
  st.push(40);

  
  sortTheStack(st); 

  while (!st.empty())
  {
    cout << st.top() << endl;
    st.pop();
  }

  return 0;
}