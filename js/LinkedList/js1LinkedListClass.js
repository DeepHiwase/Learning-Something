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

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);

    // empty ll
    if (list.isEmpty()) {
      this.head = node;
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

  // O(n)
  append(value) {
    const node = new Node(value);

    // empty ll
    if (list.isEmpty()) {
      this.head = node;
    } else {
      // non-empty ll
      // 1. curr ptr to traverse - start at head
      let prev = this.head;
      // 2. loop until prev.next === null
      while (prev.next) {
        prev = prev.next;
      }
      // prev.next === null -> last node of ll
      prev.next = node;
    }
    // mandatory step: size increase
    this.size++;
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

  // worst case -> O(n)
  // best case -> O(1) // index 0, prepend
  insert(value, index) {
    // Invalid or Outbound index
    if (index < 0 || index > this.size) {
      return console.log("Invalid index orr Out of bound index");
    }
    // Valid index
    // index is 0 -> prepend
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      // traverse with ptr prev to index starts at head, since index i => for loop
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      // reach prev -> index - 1
      // 1. node points to prev.next
      node.next = prev.next;
      // 2. prev. next points to node
      prev.next = node;
      // mandatory step: size increase
      this.size++;
    }
  }

  // Remove by index -> return value of removed node else null
  // wrost case -> O(n)
  // best case -> O(1)
  removeFrom(index) {
    // Invalid or Outbound index -> IMP index = size is also out of bound
    if (index < 0 || index >= this.size) {
      console.log("Invalid index orr Out of bound index");
      return null;
    }

    let removeNode;
    // index 0
    if (index === 0) {
      // 1. put remove node on head
      removeNode = this.head;
      // move head to head.next
      this.head = this.head.next;
    } else {
      // index other than 0 -> traverse ptr prev
      // start prev on head
      let prev = this.head;
      // index -> for loop until index-1 as its prev
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      // 1. put prev.next as removeNode so to get removeNode.next as for second step
      removeNode = prev.next;
      // 2. change ptr next to removeNode.next
      prev.next = removeNode.next;
    }
    // mandatory step: decrease size
    this.size--;
    // return removed node value
    return removeNode.value;
  }

  // Remove by value -> return value of removed node else null
  // wrost case -> O(n)
  // best case -> O(1)
  removeValue(value) {
    // Empty ll-> IMP index = size is also out of bound
    if (this.isEmpty()) {
      console.log("Empty Linked List.", "Can't remove value.");
      return null;
    }

    //non-empty ll
    let removeNode;
    // remove value is present at head
    if (this.head.value === value) {
      // 1. put remove node on head
      removeNode = this.head;
      // move head to head.next
      this.head = this.head.next;
    } else {
      // traverse ptr prev
      // start prev on head
      let prev = this.head;
      // while next is not null and next.value !== value
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        // 1. put prev.next as removeNode so to get removeNode.next as for second step
        removeNode = prev.next;
        // 2. change ptr next to removeNode.next
        prev.next = removeNode.next;
      } else {
        return null;
      }
    }
    // mandatory step: decrease size
    this.size--;
    // return removed node value
    return removeNode.value;
  }

  // wrost case -> O(n)
  // best case -> O(1)
  search(value) {
    // Empty ll -> return index -1
    if (this.isEmpty()) {
      console.log("Empty Linked List.", "No searching operation.");
      return -1;
    }

    // non-empty ll
    // index i to get index and curr as traverse ptr
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
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
    this.head = prev;
  }
}

const list = new LinkedList();

console.log(list);
console.log(list.head);
console.log(list.size);
console.log(list.getSize());
console.log(list.isEmpty());

list.print();

list.append(10);

list.print(); // 10

console.log(list.append(20)); /// undefined

list.print(); // 10 20

list.prepend(30);

list.print(); // 30 10 20

console.log(list.prepend(40)); /// undefined

list.print(); // 40 30 10 20
// console.log(list.getSize()); // 4
// console.log(list.isEmpty()); // false

// // Insert
// list.insert(10.1, -1); // invalid index
// console.log(list.size);
// list.insert(10.1, 5); // invalid index

// list.insert(20.1, 4); // append index, at last which has size 4
// list.print(); // 40 30 10 20 20.1

// list.insert(10.1, 3);
// list.print(); // 40 30 10 10.1 20 20.1

// list.insert(50, 0);
// list.print(); // 50 40 30 10 10.1 20 20.1

// // Remove by index
// list.removeFrom(-1); // invalid index
// console.log(list.size);
// list.removeFrom(5); // invalid index

// console.log("Removed value", list.removeFrom(4)); // append index, at last which has size 4 => null

// list.print(); // 40 30 10 20
// console.log("List size", list.size);

// console.log("Removed value", list.removeFrom(3)); // 20
// list.print(); // 40 30 10
// console.log("List size", list.size);

// console.log("Removed value", list.removeFrom(0)); //40 at index 0
// list.print(); // 30 10
// console.log("List size", list.size);

// // Remove by value
// console.log("Remove by value", "----------------------------");
// list.removeValue(100); // invalid value
// console.log(list.size);

// console.log("Removed value", list.removeValue(4)); // invalid value 4 => null

// list.print(); // 40 30 10 20
// console.log("List size", list.size);

// console.log("Removed value", list.removeValue(30)); // 30
// list.print(); // 40 10 20
// console.log("List size", list.size);

// console.log("Removed value", list.removeValue(20)); //10 at index 0
// list.print(); // 40 10
// console.log("List size", list.size);

// console.log("Removed value", list.removeValue(10));
// console.log("Removed value", list.removeValue(40));
// console.log("Removed value", list.removeValue(40));

// // Search value
// console.log("Search value", "----------------------------");
// list.print();
// console.log(
//   list.search(40) === -1 ? "40 not found" : `40 found at ${list.search(40)}`
// );
// console.log(
//   list.search(10) === -1 ? "10 not found" : `10 found at ${list.search(10)}`
// );
// console.log(
//   list.search(100) === -1 ? "100 not found" : `100 found at ${list.search(100)}`
// );
// console.log(
//   list.search(30) === -1 ? "30 not found" : `30 found at ${list.search(30)}`
// );

// Reverse
list.print(); // 40 30 10 20
console.log("Convert the list in reverse order");
list.reverse();
list.print(); // 20 10 30 40
