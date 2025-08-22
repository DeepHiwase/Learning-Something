#include <iostream>
#include <stack>
using namespace std;

bool checkRedundent(string &str)
{
  stack<char> st;

  for (int i = 0; i < str.length(); i++)
  {
    char ch = str[i];

    if (ch == '(' || ch == '+' || ch == '-' || ch == '*' || ch == '/')
    {
      st.push(ch);
    }
    else if (ch == ')')
    {
      // count no. of operators
      int operatorCount = 0;
      while (!st.empty() && st.top() != '(')
      {
        char temp = st.top();
        if (temp == '+' || temp == '-' || temp == '*' || temp == '/')
        {
          operatorCount++;
        }
        st.pop();
      }
      // yaha par tabhi pohochonge jab st.top par opening bracket present honga 
      st.pop();

      if (operatorCount == 0)
      {
        return true;
      }
    }
  }

  // yaha tak pohch hu, matlab har ek bracket me ek operator mila honga
  return false;
}

int main()
{
  string str = "(((a+b)*(c+d)))";

  bool ans = checkRedundent(str);

  if (ans == true)
  {
    cout << "Redundent brackets present" << endl;
  }
  else
  {
    cout << "Redundent brackets not present" << endl;
  }

  return 0;
}