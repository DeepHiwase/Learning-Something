#include <iostream>
#include <queue>
#include <map>
using namespace std;

class Node
{
public:
  int data;
  Node *left;
  Node *right;

  Node(int val)
  {
    this->data = val;
    this->left = NULL;
    this->right = NULL;
  }
};

Node *createTree()
{
  cout << "Enter the value for Node: ";
  int value;
  cin >> value;

  if (value == -1)
  {
    return NULL;
  }

  // create Node
  Node *root = new Node(value);

  // recursion
  cout << "Entering in the left of: " << value << endl;
  root->left = createTree();
  cout << "Entering in the right of: " << value << endl;
  root->right = createTree();

  return root;
}

void preOrder(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  cout << root->data << " ";
  preOrder(root->left);
  preOrder(root->right);
}

void inOrder(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  inOrder(root->left);
  cout << root->data << " ";
  inOrder(root->right);
}

void postOrder(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  postOrder(root->left);
  postOrder(root->right);
  cout << root->data << " ";
}

void levelOrderTraversal(Node *root)
{
  queue<Node *> q;
  q.push(root);
  q.push(NULL);

  cout << endl;
  while (!q.empty())
  {
    Node *temp = q.front();
    q.pop();

    if (temp == NULL)
    {
      cout << endl;
      if (!q.empty())
      {
        q.push(NULL);
      }
    }
    else
    {
      cout << temp->data << " ";
      if (temp->left != NULL)
      {
        q.push(temp->left);
      }
      if (temp->right != NULL)
      {
        q.push(temp->right);
      }
    }
  }
}

void printLeftView(Node *root, int level, vector<int> &leftView)
{
  if (root == NULL)
  {
    return;
  }

  if (level == leftView.size())
  {
    // iska matlab left view ki node mil gayi hai, store karlo
    leftView.push_back(root->data);
  }
  printLeftView(root->left, level + 1, leftView);
  printLeftView(root->right, level + 1, leftView);
}

void printRightView(Node *root, int level, vector<int> &rightView)
{
  if (root == NULL)
  {
    return;
  }

  if (level == rightView.size())
  {
    // iska matlab right view ki node mil gayi hai, store karlo
    rightView.push_back(root->data);
  }
  printRightView(root->right, level + 1, rightView);
  printRightView(root->left, level + 1, rightView);
}

void printTopView(Node *root)
{
  map<int, int> hdToNodeMap;
  queue<pair<Node *, int>> q;
  q.push(make_pair(root, 0));

  while (!q.empty())
  {
    pair<Node *, int> temp = q.front();
    q.pop();

    Node *frontNode = temp.first;
    int hd = temp.second;

    // if there is no entry for hd in map, then create a new entry
    if (hdToNodeMap.find(hd) == hdToNodeMap.end())
    {
      hdToNodeMap[hd] = frontNode->data;
    }

    // child ko dekhna hai
    if (frontNode->left != NULL)
    {
      q.push(make_pair(frontNode->left, hd - 1));
    }
    if (frontNode->right != NULL)
    {
      q.push(make_pair(frontNode->right, hd + 1));
    }
  }

  cout << "Printing top view: " << endl;
  for (auto i : hdToNodeMap)
  {
    cout << i.second << " ";
  }
}

void printBottomView(Node *root)
{
  map<int, int> hdToNodeMap;
  queue<pair<Node *, int>> q;
  q.push(make_pair(root, 0));

  while (!q.empty())
  {
    pair<Node *, int> temp = q.front();
    q.pop();

    Node *frontNode = temp.first;
    int hd = temp.second;

    // no this if condition for this view as to override the elements to get bottom elements
    // // if there is no entry for hd in map, then create a new entry
    // if (hdToNodeMap.find(hd) == hdToNodeMap.end())
    // {
    hdToNodeMap[hd] = frontNode->data;
    // }

    // child ko dekhna hai
    if (frontNode->left != NULL)
    {
      q.push(make_pair(frontNode->left, hd - 1));
    }
    if (frontNode->right != NULL)
    {
      q.push(make_pair(frontNode->right, hd + 1));
    }
  }

  cout << "Printing top view: " << endl;
  for (auto i : hdToNodeMap)
  {
    cout << i.second << " ";
  }
}

void printLeftBoundary(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  if (root->left == NULL && root->right == NULL)
  {
    return;
  }

  cout << root->data << " ";
  // most imp line conditions
  if (root->left != NULL)
  {
    printLeftBoundary(root->left);
  }
  else
  {
    printLeftBoundary(root->right);
  }
}

void printLeafBoundary(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  if (root->left == NULL && root->right == NULL)
  {
    cout << root->data << " ";
  }

  printLeafBoundary(root->left);
  printLeafBoundary(root->right);
}

void printRightBoundary(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  if (root->left == NULL && root->right == NULL)
  {
    return;
  }

  // most imp line conditions
  if (root->right != NULL)
  {
    printRightBoundary(root->right);
  }
  else
  {
    printRightBoundary(root->left);
  }
  // since to print in reverse, we put after recursive call
  cout << root->data << " ";
}

void boundaryTraversal(Node *root)
{
  if (root == NULL)
  {
    return;
  }

  printLeftBoundary(root);
  printLeafBoundary(root);
  // printRightBoundary(root); print root two times one for left boundary and one for right boundary
  if (root->right != NULL)
  {
    printRightBoundary(root->right);
  }
  else
  {
    // got from root->left
    printRightBoundary(root->left);
  }
}

int main()
{
  Node *root = createTree();
  // 10 20 40 -1 -1 50 70 110 -1 -1 111 -1 -1 80 -1 -1 30 -1 60 -1 90 112 -1 -1 113 -1 -1
  levelOrderTraversal(root);

  vector<int> leftView;
  printLeftView(root, 0, leftView);
  cout << "Printing Left view: " << endl;
  for (int i = 0; i < leftView.size(); i++)
  {
    cout << leftView[i] << " ";
  }

  vector<int> rightView;
  printRightView(root, 0, rightView);
  cout << "Printing Right view: " << endl;
  for (int i = 0; i < rightView.size(); i++)
  {
    cout << rightView[i] << " ";
  }

  cout << "Printing top view: " << endl;
  printTopView(root);

  cout << "Printing Bottom view: " << endl;
  printBottomView(root);

  cout << "Printing Boundary traversal: " << endl;
  boundaryTraversal(root);

  return 0;
}