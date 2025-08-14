#include <iostream>
using namespace std;

class Node
{
public:
  int data;
  Node *next;

  Node()
  {
    // cout << "I am in default constructor" << endl;
    this->next = NULL;
  }

  Node(int data)
  {
    // cout << "I am in parameterised constructor" << endl;
    this->data = data;
    this->next = NULL;
  }
};

void printLL(Node *head)
{
  Node *temp = head;

  while (temp != NULL)
  {
    cout << temp->data << "->";
    temp = temp->next;
  }

  cout << endl;
}

int getLLLength(Node *head)
{
  Node *temp = head;

  int length = 0;

  while (temp != NULL)
  {
    length++;
    temp = temp->next;
  }

  return length;
}

void insertAtHead(Node *&head, Node *&tail, int data)
{
  if (head == NULL)
  {
    // Empty LL

    // Step 1-> Create new node
    Node *newNode = new Node(data);
    // Step 2-> put head & tail on new node
    head = newNode;
    tail = newNode;
    return;
  }
  // Step 1-> Create new node
  Node *newNode = new Node(data);
  // Step 2-> point next of new node to head
  newNode->next = head;
  // Step 3-> put head on new node
  head = newNode;
}

void insertAtTail(Node *&head, Node *&tail, int data)
{
  // for Empty LL
  if (head == NULL)
  {
    // Step 1-> Create new Node
    Node *newNode = new Node(data);
    // Step 2-> put head & tail on new Node
    head = newNode;
    tail = newNode;
    return;
  }
  // non-empty LL
  // Step 1-> create new node
  Node *newNode = new Node(data);
  // Step 2-> point tails next to new Node
  tail->next = newNode;
  //  Step 3-> put tail on new node
  tail = newNode;
}

void createTail(Node *&head, Node *&tail)
{
  Node *temp = head;

  while (temp->next != NULL)
  {
    temp = temp->next;
  }
  tail = temp;
  return;
}

void insertAtPosition(Node *&head, Node *&tail, int data, int position)
{
  if (head == NULL)
  {
    // empty LL
    insertAtHead(head, tail, data);
    return;
  }

  // non-empty LL
  int length = getLLLength(head);

  // if (position < 1)
  // {
  //   cout << "Can't insert at this position, please give valid position" << endl;
  //   // in some context we need to insert at head
  //   return;
  // }
  if (position <= 1)
  {
    insertAtHead(head, tail, data);
    return;
  }
  else if (position > length)
  {
    insertAtTail(head, tail, data);
    return;
  }
  else
  {
    // at middle of >1 & <5
    // Setp 1-> create node
    Node *newNode = new Node(data);
    // Step 2->traverse curr ptr to given position with prev ptr
    Node *prev = NULL;
    Node *curr = head;

    while (position != 1)
    {
      // Step 3-> prev to curr, curr to next, traverse curr & prev
      prev = curr;

      curr = curr->next;
      position--;
    }
    // Step 4->attach prev to new Node
    prev->next = newNode;
    // Step 5-> attach new Node to curr
    newNode->next = curr;
  }
}

int main()
{

  // Creation of Node
  // Static
  // Node a;
  // Dynamic
  // Node *head = new Node();

  // Node *first = new Node(10);
  // Node *second = new Node(20);
  // Node *third = new Node(30);
  // Node *fourth = new Node(40);
  // Node *fifth = new Node(50);

  // connecting nodes to create LL
  // first->next = second;
  // second->next = third;
  // third->next = fourth;
  // fourth->next = fifth;

  // Node *head = first;
  // Node *tail = NULL;
  // createTail(head, tail);
  // Node *head = NULL;
  // Node *tail = NULL;

  // cout << "Printing the entire singly LL: ";
  // printLL(head);

  // cout << "Length of LL: " << getLLLength(head) << endl;

  // cout << "Inset at Begining of LL: " << endl;
  // insertAtHead(head, tail, 5);
  // printLL(head);
  // cout << "Length of LL: " << getLLLength(head) << endl;

  //   cout << "Tail value " << tail->data << endl;
  // cout << "Insert at End of LL: " << endl;
  // insertAtTail(head, tail, 4);
  // printLL(head);
  // cout << "Length of LL: " << getLLLength(head) << endl;

  Node *head = NULL;
  Node *tail = NULL;

  insertAtTail(head, tail, 10);
  insertAtTail(head, tail, 20);
  insertAtTail(head, tail, 30);
  insertAtTail(head, tail, 50);
  printLL(head);

  // insertAtPosition(head, tail, 500, 0);
  // insertAtPosition(head, tail, 500, getLLLength(head) + 1);
  // insertAtPosition(head, tail, 500, 1);
  insertAtPosition(head, tail, 500, getLLLength(head));
  insertAtPosition(head, tail, 1000, 2);
  printLL(head);

  return 0;
}