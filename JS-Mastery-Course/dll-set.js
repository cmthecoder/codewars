// set

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.


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

  set(index, val) {
      if (index < 0 || index >= this.length) {
          return false;
      }

      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
      }

      currentNode.val = val;
      return true;
  }
}