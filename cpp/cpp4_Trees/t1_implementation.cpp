#include <iostream>
#include <queue>
using namespace std;

// Implementation of Tree -> Using recursion
// Resursion steps
// 1. Create one node by us
// 2. Baki resursion sambhal lenga -> one recursion for left subtree & one for right subtree

// Step 1: Create class NODE
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

// Step 2: function to create tree using recursion
// it returns root node of created tree
Node *createTree()
{
  // cout << "Enter the value of Node: " << endl;
  int data;
  cin >> data;

  // handle -1 => works as Base case
  if (data == -1)
  {
    return NULL;
  }

  // value other than -1, create new Node and points to it
  Node *root = new Node(data);

  // baki recurssion sambhal renga
  // Step 2: create left subtree
  // cout << "Left of Node " << root->data << endl;
  root->left = createTree();
  // Step 3: create right subtree
  // cout << "Right of Node " << root->data << endl;
  root->right = createTree();

  // return root Node
  return root;

  // // value other than -1, create new Node and points to it
  // Node *newNode = new Node(data);

  // // baki recurssion sambhal renga
  // // Step 2: create left subtree
  // newNode->left = createTree();
  // // Step 3: create right subtree
  // newNode->right = createTree();

  // // return root Node
  // return newNode;
}

void preOrderTraversal(Node *root)
{
  // base case
  if (root == NULL)
  {
    return;
  }

  // NLR
  // N
  cout << root->data << " ";
  // L
  preOrderTraversal(root->left);
  // R
  preOrderTraversal(root->right);
}

void inOrderTraversal(Node *root)
{
  // base case
  if (root == NULL)
  {
    return;
  }

  // LNR
  // L
  inOrderTraversal(root->left);
  // N
  cout << root->data << " ";
  // R
  inOrderTraversal(root->right);
}

void postOrderTraversal(Node *root)
{
  // base case
  if (root == NULL)
  {
    return;
  }

  // LRN
  // L
  postOrderTraversal(root->left);
  // R
  postOrderTraversal(root->right);
  // N
  cout << root->data << " ";
}

// void levelOrderTraversal(Node *root)
// {
//   // using queue
//   queue<Node *> q;

//   // Step 1: initially push root node
//   q.push(root);

//   // Step 2: traversel
//   while (!q.empty())
//   {
//     // fetch q front and pop
//     Node *front = q.front();
//     q.pop();

//     // print q front
//     cout << front->data << " ";

//     // push left & right o q.front() node in queue
//     if (front->left != NULL)
//     {
//       q.push(front->left);
//     }
//     if (front->right != NULL)
//     {
//       q.push(front->right);
//     }
//   }
// }

void levelOrderTraversal(Node *root)
{
  // using queue
  queue<Node *> q;

  // Step 1: initially push root node
  q.push(root);
  q.push(NULL);

  // Step 2: traversel
  while (q.size() > 1) // as !q.empty was giving infinite loop as when front was NULL we were putting NULL again again - if want !q.empty in while condition -> when get NULL in q telling level complete -> before pushing NULL to q -> check !q.empty -> true - push NULL
  {
    // fetch q front and pop
    Node *front = q.front();
    q.pop();

    if (front == NULL)
    {
      // level complete
      cout << endl;
      // if (!q.empty()) // when while have !q.empty condition
      // {
      //   q.push(NULL);
      // }
      q.push(NULL);
    }
    else
    {
      // Valid node wala case

      // print q front
      cout << front->data << " ";

      // push left & right o q.front() node in queue
      if (front->left != NULL)
      {
        q.push(front->left);
      }
      if (front->right != NULL)
      {
        q.push(front->right);
      }
    }
  }
}

int main()
{
  Node *root = createTree();

  // cout << root->data << endl;
  cout << "Printing PreOrder: ";
  preOrderTraversal(root);
  cout << endl;

  cout << "Printing InOrder: ";
  inOrderTraversal(root);
  cout << endl;

  cout << "Printing PostOrder: ";
  postOrderTraversal(root);
  cout << endl;

  cout << "Printing Level Order Traversal: " << endl;
  levelOrderTraversal(root);
  cout << endl;

  return 0;
}