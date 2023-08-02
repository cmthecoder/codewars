// remove

// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.


class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val) {
      var node = new Node(val);
      if (this.head === null) {
          this.head = node;
          this.tail = this.head;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
      }
      this.length++;
      return this;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return undefined;

      let removedNode;
      if (index === 0) {
          removedNode = this.head;
          this.head = this.head.next;
          if (this.head) {
              this.head.prev = null;
          } else {
              this.tail = null; // List is now empty
          }
      } else if (index === this.length - 1) {
          removedNode = this.tail;
          this.tail = this.tail.prev;
          this.tail.next = null;
      } else {
          let currentNode = this.head;
          for (let i = 0; i < index; i++) {
              currentNode = currentNode.next;
          }
          removedNode = currentNode;
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
      }

      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
  }
}
