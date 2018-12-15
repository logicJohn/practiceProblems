let counter;
let nodeCounter;
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.nodeCount();
  }

  nodeCount() {
    if (typeof nodeCounter == "undefined") {
      nodeCounter = 0;
    }
    nodeCounter++;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.count();
  }

  count() {
    if (typeof counter == "undefined") {
      counter = 0;
    }
    counter++;
  }

  static printCount() {
    if (counter != null) {
      console.log(`number of linked List ${counter}`);
    } else console.log(`counter is null`);
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printList() {
    //console.log(this.head);
    let temp = this.head;
    while (temp != null) {
      console.log(`node: ${temp.element}`);
      temp = temp.next;
    }
  }
}

let a = new LinkedList();

a.add(1);
a.printList();
console.log(`number of nodes ${nodeCounter}`);
LinkedList.printCount();
console.log("-----------");
a.add(2);
a.printList();
console.log(`number of nodes ${nodeCounter}`);
LinkedList.printCount();
console.log("-----------");
a.add(3);
a.printList();
console.log(`number of nodes ${nodeCounter}`);
LinkedList.printCount();
console.log("-----------");

a.add(1254);
a.add(5019);
a.add(1549);
a.add(1243);
a.add(2398);
a.add(3140);
a.add(154);
a.add(1243);
a.add(2398);
a.add(3140);
a.add(2);
a.add(2);
a.add(2);

a.printList();
console.log(`number of nodes ${nodeCounter}`);
LinkedList.printCount();
console.log("-------------");

function deleteNext(head) {
  console.log("begining delete");
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    let temp = head;
    head = null;

    console.log(head);
    console.log(temp);
    return temp;
  } else {
    let temp = head;
    head = head.next;

    console.log(temp);
    console.log(head);

    return temp;
  }
}

//searches linked list and removes all 2's
function testDelete(a) {
  let tempHead = a;
  let search = tempHead.head;
}

testDelete(a);
a.printList();
