#include <iostream>
#include <queue>
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

  // Step 2: traversal
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

int searchInOrder(int inorder[], int size, int target)
{
  for (int i = 0; i < size; i++)
  {
    if (inorder[i] == target)
    {
      return i;
    }
  }
  return -1; // there is no chance that u will reach here
}

// The most imp to pass preIndex (preorderIndex) as pass by reference🥸 the most imp to remember
Node *constructTreePreAndInOrderTraversal(int preOrder[], int inOrder[], int &preIndex, int inorderStart, int inorderEnd, int size)
{
  // base case
  if (preIndex >= size || inorderStart > inorderEnd)
  {
    return NULL;
  }

  // 1 case main solve karta hu
  int element = preOrder[preIndex];
  preIndex++;
  Node *root = new Node(element);
  // element search in inorder
  int position = searchInOrder(inOrder, size, element);

  // baki recursion sambhal lenga
  root->left = constructTreePreAndInOrderTraversal(preOrder, inOrder, preIndex, inorderStart, position - 1, size);

  root->right = constructTreePreAndInOrderTraversal(preOrder, inOrder, preIndex, position + 1, inorderEnd, size);

  return root;
}

int main()
{
  int inOrder[] = {10, 8, 6, 2, 4, 12};
  int preOrder[] = {2, 8, 10, 6, 4, 12};
  int size = 6;
  int preOrderIndex = 0;
  int inOrderStart = 0;
  int inOrderEnd = 5;

  Node *root = constructTreePreAndInOrderTraversal(preOrder, inOrder, preOrderIndex, inOrderStart, inOrderEnd, size);
  cout << "printing the entire tree: " << endl;
  levelOrderTraversal(root);

  return 0;
}