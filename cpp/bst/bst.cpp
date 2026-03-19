#include <iostream>
#include <queue>
using namespace std;

class Node
{
public:
  int data;
  Node *left;
  Node *right;

  Node(int value)
  {
    this->data = value;
    this->left = NULL;
    this->right = NULL;
  }
};

Node *insertIntoBST(Node *root, int data)
{
  if (root == NULL)
  {
    root = new Node(data);
    return root;
  }

  // its not the first node
  if (data > root->data)
  {
    root->right = insertIntoBST(root->right, data);
  }
  else
  {
    root->left = insertIntoBST(root->left, data);
  }
  return root;
}

void levelOrderTraversal(Node *root)
{
  queue<Node *> q;
  q.push(root);
  q.push(NULL);

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

// pure tree ka track rakh pau -> track rakho
void createBST(Node *&root)
{
  cout << "Enter data: " << endl;
  int data;
  cin >> data;

  while (data != -1)
  {
    cout << "Enter data: " << endl;
    root = insertIntoBST(root, data);
    cin >> data;
  }
}

void preOrder(Node *root)
{
  // NLR
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
  // LNR
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
  // LRN
  if (root == NULL)
  {
    return;
  }

  postOrder(root->left);
  postOrder(root->right);
  cout << root->data << " ";
}

Node *minValue(Node *root)
{
  if (root == NULL)
  {
    cout << "No minimum value" << endl;
    return NULL;
  }

  Node *temp = root;
  while (temp->left != NULL)
  {
    temp = temp->left;
  }

  return temp;
}

Node *maxValue(Node *root)
{
  if (root == NULL)
  {
    cout << "there is no max value" << endl;
    return NULL;
  }

  Node *temp = root;

  while (temp->right != NULL)
  {
    temp = temp->right;
  }

  return temp;
}

// Binary search in tree
bool searchInBST(Node *root, int target)
{
  // base case
  if (root == NULL)
  {
    return false;
  }

  // 1 case to solve
  if (root->data == target)
  {
    return true;
  }

  // baaki recursion sambhal lenga
  // left or right
  bool leftAns = false;
  bool rightAns = false;
  if (target > root->data)
  {
    rightAns = searchInBST(root->right, target);
  }
  else
  {
    leftAns = searchInBST(root->left, target);
  }

  return leftAns || rightAns;
}

// Deletion of node in BST
Node *deleteFromBST(Node *root, int target)
{
  // find target
  // delete target

  // base case
  if (root == NULL)
  {
    return NULL;
  }

  // 1 case solve
  if (root->data == target)
  {
    // ab delete karenge
    // 4 case to solve deletion

    // 1 case
    if (root->left == NULL && root->right == NULL)
    {
      delete root;
      return NULL;
    }
    else if (root->left != NULL && root->right == NULL)
    {
      // 2 case -> left non-null and right null
      Node *childSubTree = root->left;
      delete root;
      return childSubTree;
    }
    else if (root->left == NULL && root->right != NULL)
    {
      // 3 case -> left null and right non-null
      Node *childSubTree = root->right;
      delete root;
      return root->right;
    }
    else
    {
      // 4 case -> left and right both are non-null
      // case 'I': left se max Val leke aao
      Node *maxi = maxValue(root->left);
      // replacement
      root->data = maxi->data;
      // delete actual maxi vali node
      root->left = deleteFromBST(root->left, maxi->data); // yaha galti karange, since its ruturning bst you have to attach it.
      return root;                                        // then return whole tree
    }
  }
  else if (root->data > target)
  {
    root->left = deleteFromBST(root->left, target); // here galti karenge that not to return but return tree ko attach karo
  }
  else
  {
    root->right = deleteFromBST(root->right, target); // here galti karenge that not to return but return tree ko attach karo
  }

  return root;
}

// Creating balance BST from given Inorder
Node *bstFromInorder(int inOrder[], int s, int e)
{
  // base case
  if (s > e)
  {
    return NULL;
  }

  // 1 case solve
  int mid = (s + e) / 2;
  int element = inOrder[mid];
  Node *root = new Node(element);

  // baki recursion sambhal lenga
  root->left = bstFromInorder(inOrder, s, mid - 1);
  root->right = bstFromInorder(inOrder, mid + 1, e);

  return root;
}

int main()
{
  // 50 30 60 25 40 70 80 55 -1
  // Node *root = NULL;
  // createBST(root);

  // levelOrderTraversal(root);

  // cout << endl
  //      << "InOrder: ";
  // inOrder(root);
  // cout << endl
  //      << "PreOrder: ";
  // preOrder(root);
  // cout << endl
  //      << "PostOrder: ";
  // postOrder(root);

  // cout << endl;
  // Node *minNode = minValue(root);
  // if (minNode == NULL)
  // {
  //   cout << "There is no node in tree, so there is no min value" << endl;
  // }
  // else
  // {
  //   cout << "Min value: " << minNode->data << endl;
  // }

  // cout << endl;
  // Node *maxNode = maxValue(root);
  // if (maxNode == NULL)
  // {
  //   cout << "There is no node in tree, so there is no max value" << endl;
  // }
  // else
  // {
  //   cout << "Max value: " << maxNode->data << endl;
  // }

  // int t;
  // cout << "Enter the target:" << endl;
  // cin >> t;
  // bool ans = searchInBST(root, t);
  // if (ans == true)
  // {
  //   cout << "Found" << endl;
  // }
  // else
  // {
  //   cout << "Not found" << endl;
  // }

  // int target;
  // cout << "Enter the value of target:" << endl;
  // cin >> target;
  // while (target != -1)
  // {
  //   root = deleteFromBST(root, target);
  //   cout << endl
  //        << "Printing Level order traversal " << endl;
  //   levelOrderTraversal(root);

  //   cout << "Enter the value of target:" << endl;
  //   cin >> target;
  // }

  int inOrder[] = {10, 20, 30, 40, 50, 60, 70};
  int size = 7;
  int s = 0;
  int e = size - 1;
  Node *root = bstFromInorder(inOrder, s, e);

  levelOrderTraversal(root); 

  return 0;
}