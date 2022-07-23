class ListNode {
    static ID_COUNTER = 0;
    id = 0;
    prev = null;
    next = null;
    value = null;

    constructor (value) {
        this.value = value;
        this.id = ListNode.ID_COUNTER++;
    }
}

class LinkedList {
    head = null;
    tail = null;

    constructor (valueArray) {
        ListNode.ID_COUNTER = 0;
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
        const hastCycleNode = this.hasCycle();
        if (hastCycleNode) {
            throw new CycleError(hastCycleNode);
        }

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
        const hastCycleNode = this.hasCycle();
        if (hastCycleNode) {
            throw new CycleError(hastCycleNode);
        }

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
        const hastCycleNode = this.hasCycle();
        if (hastCycleNode) {
            throw new CycleError(hastCycleNode);
        }

        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    /*
    * hasCycle - determine if this linked list has a cycle
    *
    * @returns false | node
    */
    hasCycle () {
        if (!this.head) {
            return false;
        }
        let slow = this.head; // 1 hop per iteration
        let fast = this.head.next; // 2 hops per iteration

        while (fast && fast.next && slow) {
            if (fast === slow) {
                return fast;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        
        return false;
    }
}

class CycleError extends Error {
    constructor(node) {
        super();
        this.message = `List cycle detected at node id=${node.id}, value=${node.value}`;
        console.log(this.message);
    }
}

module.exports.LinkedList = LinkedList;
module.exports.CycleError = CycleError;