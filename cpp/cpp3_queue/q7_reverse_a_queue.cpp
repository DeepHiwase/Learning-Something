#include <iostream>
#include <stack>
#include <queue>
using namespace std;

void reverseQueue(queue<int> &q)
{
  stack<int> st;

  // one by one queue se element lo and stack me dalo
  while (!q.empty())
  {
    int frontElement = q.front();
    q.pop();

    st.push(frontElement);
  }

  // one by one stack se lo and queue me dalo
  while (!st.empty())
  {
    int topElement = st.top();
    st.pop();

    q.push(topElement);
  }
}

void reverseUsingRecurrsion(queue<int> &q)
{
  // base case
  if (q.empty())
  {
    return;
  }

  // case1 hum sambhalenge
  int temp = q.front();
  q.pop();

  // recurssion ko bulao
  reverseQueue(q);

  // backtrack
  q.push(temp);
}

void reverseFirstK(queue<int> &q, int k)
{
  stack<int> st;

  if (k > q.size() || k == 0)
  {
    return;
  }
  // push first k elements in stack -> assumption there are more than k elements in queue
  for (int i = 0; i < k; i++)
  {
    int temp = q.front();
    q.pop();
    st.push(temp);
  }

  // push all stack elements into queue
  while (!st.empty())
  {
    int temp = st.top();
    st.pop();

    q.push(temp);
  }

  // pop & push n-k elements from queue
  for (int i = 0; i < q.size() - k; i++)
  {
    int temp = q.front();
    q.pop();
    q.push(temp);
  }
}

void interLeaveQueue(queue<int> &first)
{
  queue<int> second;

  //  Push first half of first queue in second queue
  int size = first.size();
  for (int i = 0; i < size / 2; i++)
  {
    int temp = first.front();
    first.pop();

    second.push(temp);
  }

  // Merge the both queue
  // into original queue -> first
  for (int i = 0; i < size / 2; i++)
  {
    int temp = second.front();
    second.pop();

    first.push(temp);

    temp = first.front();
    first.pop();

    first.push(temp);
  }
}

int main()
{
  queue<int> q;
  q.push(10);
  q.push(20);
  q.push(30);
  q.push(40);
  q.push(50);
  q.push(60);

  // reverseQueue(q);
  // reverseUsingRecurrsion(q);
  // reverseFirstK(q, 2);
  interLeaveQueue(q);

  cout << "Printing queue: " << endl;
  while (!q.empty())
  {
    int element = q.front();
    q.pop();
    cout << element << " ";
  }
  cout << endl;

  return 0;
}