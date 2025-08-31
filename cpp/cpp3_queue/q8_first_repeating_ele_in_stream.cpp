#include <iostream>
#include <queue>
using namespace std;

int main()
{
  string str = "abacdfiabcdz";
  // to track -> queue
  queue<int> q;
  // frequency table
  int freq[26] = {0};

  for (int i = 0; i < str.length(); i++)
  {
    // Step1-> get char
    char ch = str[i];
    // Step2-> update freq table
    freq[ch - 'a']++; // b -> 1 -> 98 - 97 = 1
    // Step3-> push in queue to track
    q.push(ch);

    // Step4-> ans find karo
    while (!q.empty())
    {
      char frontChar = q.front();

      if (freq[frontChar - 'a'] != 1)
      {
        // not a ans
        q.pop();
      }
      else
      {
        // == 1 wala case
        // yehi ans hai
        cout << frontChar << "->";
        break;
      }
    }

    // hash wali condition -> if q empty -> no ans
    if (q.empty())
    {
      cout << "#" << "->";
    }
  }

  cout << endl;

  return 0;
}