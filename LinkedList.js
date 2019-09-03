class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertCycleItem(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } 
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // inserts a new node before a given node containing a key
  insertBefore(item, node){
    // if no nodes, use insertFirst
    if (this.head === null) {
      this.insertFirst(item);
    }
    else{
      // track the address of current and previous node
      let currNode = this.head;
      let previousNode = this.head;

      // traverse to the insertion point
      while ((currNode !== null) && (currNode.value !== node)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer 
      newNode.next = previousNode.next;
      // set the previous node's next pointer to new node
      previousNode.next = newNode;
    }
  }
  // inserts a new node after a node containing a key
  insertAfter(item, node){
    // if no nodes, insert first
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
    // track the address of current and next node
      let currNode = this.head;
      let nextNode = currNode.next;

      // traverse to the insertion point
      while ((currNode !== null) && (currNode.value !== node)) {

        currNode = currNode.next;
        nextNode = currNode.next;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer to ---
      newNode.next = nextNode;
      // set the previous node's next pointer to new node
      currNode.next = newNode;
    }
  }
  
  // inserts an item at a specific position in the linked list
  insertAt(item, position){
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      let positionCounter = 0;

      // traverse to the insertion point
      while ((currNode !== null) && (positionCounter !== position)) {
        previousNode = currNode;
        currNode = currNode.next;
        positionCounter++;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer to ---
      newNode.next = previousNode.next;
      // set the previous node's next pointer to new node
      previousNode.next = newNode;
    }
  }
}