// Node class
class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

// const node = new Node(10);
// console.log(node);
// console.log(node.value);
// console.log(node.next);

// Linked List class with Tail ptr also
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(n)
  print() {
    // empty ll
    if (list.isEmpty()) {
      return console.log("Linked List is empty.", "Nothing to print.");
    } else {
      // non-empty ll
      // 1. ptr to traverse start from head
      let curr = this.head;
      // 2. a ver to print
      let listValues = "";
      // loop until curr not null
      while (curr) {
        // add node value to var
        listValues += `${curr.value} `;
        // move ptr
        curr = curr.next;
      }
      // print var
      console.log(listValues);
    }
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);

    // empty ll
    if (list.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // non-empty ll
      // 1. point node next to head
      node.next = this.head;
      // 2. point head to node
      this.head = node;
    }
    // mandatory step: size increase
    this.size++;
  }

  // O(1)
  append(value) {
    const node = new Node(value);

    // empty ll
    if (list.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // non-empty ll
      // 1. point tail to node
      this.tail.next = node;
      // 2. put tail on node
      this.tail = node;
    }
    // mandatory step: size increase
    this.size++;
  }

  // wrost case -> O()
  // best case -> O()
  removeFromFront() {
    // empty ll
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
    // mandatory step: decrease size
    this.size--;
    return value;
  }

  // wrost case -> O()
  // best case -> O()
  removeFromEnd() {
    // empty ll
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return null;
    }

    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    // mandatory step: decrease size
    this.size--;
    return value;
  }

  // Reverse the linked list
  // O(n)
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // Imp -> to put tail on head first -> or it will crash
    this.tail = this.head;
    this.head = prev;
  }
}

export default LinkedList;
const list = new LinkedList();

// console.log(list);
// console.log(list.head);
// console.log(list.size);
// console.log(list.getSize());
// console.log(list.isEmpty());

// list.print();

// list.append(10);

// list.print(); // 10

// console.log(list.append(20)); /// undefined

// list.print(); // 10 20

// list.prepend(30);

// list.print(); // 30 10 20

// console.log(list.prepend(40)); /// undefined

// list.print(); // 40 30 10 20

// // Reverse
// list.print(); // 40 30 10 20
// console.log("Convert the list in reverse order");
// list.reverse();
// list.print(); // 20 10 30 40

// // Remove from front
// list.removeFromFront();
// list.print();

// // Remove from end
// list.removeFromEnd();
// list.print();
