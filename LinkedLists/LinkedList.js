class ListNode {
    prev = null;
    next = null;
    value = null;

    constructor (value) {
        this.value = value;
    }
}

class LinkedList {

    head = null;
    tail = null;

    constructor (valueArray) {
        for (let value of valueArray) {
            this.newNodeFromValue(value);
        }
    }

    newNodeFromValue(value) {
        const node = new ListNode(value);
        this.newNode(node);
        return node;
    }

    newNode(node) {
        if (!this.head) {
            this.head = node;
        } else if (!this.head.next) {
            this.head.next = node;
        }

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        } else {
            node.prev = this.head;
        }
        this.tail = node;

        return node;
    }

    removeNode(node) {
        if (this.head === node) {
            this.head = node.next;
            this.head.prev = null;
        } else if (this.tail === node) {
            this.tail = node.prev;
            this.tail.next = null;
            this.tail.prev = node.prev.prev;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node = null;
    }

    reverseList() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
      
        while(node) {
          let next = node.next;
          node.next = previous;
          node.prev = next;
          previous = node;
          node = next;
        }
    }

    removeDuplicates() {
        let values = {};
        let current = this.head;
        while (current) {
            if (!values[current.value]) {
                values[current.value] = true;
                current = current.next;
            } else {
                let tmp = current;
                current = current.next;
                this.removeNode(tmp);
            }
        }
    }

    toValueArray () {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

module.exports.LinkedList = LinkedList;