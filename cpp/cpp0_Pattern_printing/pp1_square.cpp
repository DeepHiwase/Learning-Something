#include <iostream>
using namespace std;

int main()
{
  // int i = 0;
  // for (;i < 5;)
  // {
  //   if (i < 5) {
  //     cout << "Hello" << i << endl;
  //   }
  //   i++;
  // }
  // infinite loop prevent by putting cundition in (;i < 5;) and ther shoub be updation state like i ++

  // SQUARE
  // * * * *
  // * * * *
  // * * * *
  // * * * *
  for (int i = 0; i < 4; i++)
  {
    for (int j = 0; j < 4; j++)
    {
      cout << "*" << " ";
    }
    cout << endl;
  }

  return 0;
}