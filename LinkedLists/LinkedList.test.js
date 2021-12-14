const {LinkedList} = require('./LinkedList');

describe ('Construct and mutate a linked list', () => {
    test ('validate and reverse linked lists', () => {
        let list = new LinkedList([1,2,3]);
        expect(list.toValueArray()).toEqual([1,2,3]);

        list.reverseList();
        expect(list.toValueArray()).toEqual([3,2,1]);

        list.reverseList();
        expect(list.toValueArray()).toEqual([1,2,3]);
    });

    test ('add and remove nodes, validate and reverse', () => {
        let list = new LinkedList([1,2,3]);
        let node = list.newNodeFromValue(1000);
        expect(list.toValueArray()).toEqual([1,2,3,1000]);

        list.removeNode(node);
        expect(list.toValueArray()).toEqual([1,2,3]);

        list.removeNode(list.head);
        expect(list.toValueArray()).toEqual([2,3]);

        list.removeNode(list.tail);
        expect(list.toValueArray()).toEqual([2]);

        list.newNodeFromValue(4);
        list.newNodeFromValue(6);
        list.newNodeFromValue(8);
        expect(list.toValueArray()).toEqual([2,4,6,8]);

        list.reverseList();
        expect(list.toValueArray()).toEqual([8,6,4,2]);
        list.reverseList();
        expect(list.toValueArray()).toEqual([2,4,6,8]);
    });

    test ('remove duplicates from a linked list', () => {
        let list = new LinkedList([1,2,2,3,3,3]);
        list.removeDuplicates();
        expect(list.toValueArray()).toEqual([1,2,3]);

        list = new LinkedList([1,1,1,1,2,2,3,3,3]);
        list.reverseList();
        list.removeDuplicates();
        expect(list.toValueArray()).toEqual([3,2,1]);
    });

    
})