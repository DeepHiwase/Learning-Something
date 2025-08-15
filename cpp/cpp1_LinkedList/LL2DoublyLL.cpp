#include <iostream>
using namespace std;

class Node
{
public:
  int data;
  Node *prev;
  Node *next;

  Node()
  {
    this->prev = NULL;
    this->next = NULL;
  }

  Node(int data)
  {
    this->data = data;
    this->prev = NULL;
    this->next = NULL;
  }
};

void printDoublyLL(Node *head)
{
  Node *temp = head;
  while (temp != NULL)
  {
    cout << temp->data << "->";
    temp = temp->next;
  }
  cout << endl;
}

int getDoublyLLLength(Node *head)
{
  Node *temp = head;
  int length = 0;
  while (temp != NULL)
  {
    temp = temp->next;
    length++;
  }
  return length;
}

void insertAtHead(Node *&head, Node *&tail, int data)
{
  // empty LL
  if (head == NULL)
  {
    // create new node
    Node *newNode = new Node(data);
    // point head & tail on newNode
    head = newNode;
    tail = newNode;
  }
  else
  {
    // non-empty ll
    // Step 1-> new node creation
    Node *newNode = new Node(data);
    // Step 2-> connect nodes head & newNode each other
    newNode->next = head;
    head->prev = newNode;
    // Step 3-> put head on newNode
    head = newNode;
  }
}

void insertAtTail(Node *&head, Node *&tail, int data)
{
  // empty LL
  if (head == NULL)
  {
    // create new node
    Node *newNode = new Node(data);
    // point head & tail on newNode
    head = newNode;
    tail = newNode;
  }
  else
  {
    // non-empty ll
    // Step 1-> new node creation
    Node *newNode = new Node(data);
    // Step 2-> connect nodes head & newNode each other
    tail->next = newNode;
    newNode->prev = tail;
    // Step 3-> put head on newNode
    tail = newNode;
  }
}

void insertAtPosition(Node *&head, Node *&tail, int data, int position)
{
  // empty LL
  if (head == NULL)
  {
    // Step 1-> create new node
    Node *newNode = new Node(data);
    // Step 2-> put head & tail on new Node
    head = newNode;
    tail = newNode;
  }
  else
  {
    // non empty ll
    int len = getDoublyLLLength(head);
    if (position == 1)
    {
      insertAtHead(head, tail, data);
    }
    else if (position == len + 1)
    {
      insertAtTail(head, tail, data);
    }
    else
    {
      // Step 1-> create new node
      Node *newNode = new Node(data);
      // Step 2->create & traverse currNode & prevNode to position & position previous it
      Node *prevNode = NULL;
      Node *currNode = head;
      while (position != 1)
      {
        prevNode = currNode;
        currNode = currNode->next;
        position--;
      }
      // Step 3->join pointers of currNode & prevNode to newNode
      prevNode->next = newNode;
      newNode->prev = prevNode;
      newNode->next = currNode;
      currNode->prev = newNode;
    }
  }
}

void deleteNode(Node *&head, Node *&tail, int position)
{
  // empty ll
  if (head == NULL)
  {
    cout << "Cannot delete, because LL is empty" << endl;
    return;
  }

  // single node in Doubly LL
  if (head == tail)
  {
    Node *temp = head;
    delete temp;
    head = NULL;
    tail = NULL;
    return;
  }

  int len = getDoublyLLLength(head);
  if (position == 1)
  {
    // deletion at head
    // Step 1-> create temp to isolate node for deletion and points on head
    Node *temp = head;
    // Step 2-> move head
    head = head->next;
    // Step 3-> isolate temp
    temp->next = NULL;
    head->prev = NULL;
    // Step 4-> delete temp
    delete temp;
  }
  else if (position == len)
  {
    // delete at tail
    // Step 1-> create prevNode to isolate tail for deletion and points to tail->prev
    Node *prevNode = tail->prev;
    // Step 2-> isolate tail
    prevNode->next = NULL;
    tail->prev = NULL;
    // Step 3-> delete tail node
    delete tail;
    // Step 4-> point tail ptr to prevNode
    tail = prevNode;
  }
  else
  {
    // delete from any position in middle
    // Step 1-> set prevNode & currNode & nextNode
    Node *prevNode = NULL;
    Node *currNode = head;
    while (position != 1)
    {
      prevNode = currNode;
      currNode = currNode->next;
      position--;
    }
    Node *nextNode = currNode->next;
    // Step 2-> isolate currNode
    prevNode->next = nextNode;
    currNode->prev = NULL;
    currNode->next = NULL;
    nextNode->prev = prevNode;
    // Step 3-> delete currNode
    delete currNode;
  }
}

int main()
{
  Node *head = NULL;
  Node *tail = NULL;

  // insertAtHead(head, tail, 10);
  // insertAtHead(head, tail, 20);
  // insertAtHead(head, tail, 30);
  // insertAtHead(head, tail, 40);

  insertAtTail(head, tail, 10);
  insertAtTail(head, tail, 20);
  insertAtTail(head, tail, 30);
  insertAtTail(head, tail, 40);

  cout << getDoublyLLLength(head) << endl;
  printDoublyLL(head);

  // insertAtPosition(head, tail, 100, 3);
  // printDoublyLL(head);

  // deleteNode(head, tail, 1);
  // deleteNode(head, tail, 1);
  deleteNode(head, tail, 3);
  printDoublyLL(head);

  return 0;
}