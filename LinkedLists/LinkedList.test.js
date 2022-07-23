const { LinkedList, CycleError } = require('./LinkedList');

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

    test ('show that a list intialized with value array does not have a cycle', () => {
        let nonCycleList = new LinkedList([1,2,3,3,3,3,3,3]);
        expect(nonCycleList.hasCycle()).toBeFalsy();
    });

    test ('show that we can detect a cycle if a cycle is injected into the list', () => {
        let cycleList = new LinkedList([1,2,3]);
        let cycleToThisNode = cycleList.newNodeFromValue(4);
        cycleList.newNodeFromValue(5);
        cycleList.newNodeFromValue(6);
        let cycleFromThisNode = cycleList.newNodeFromValue(7);
        cycleList.newNodeFromValue(8);
        cycleList.newNodeFromValue(9);
        expect(cycleList.hasCycle()).toBeFalsy();

        // inject cycle here
        cycleFromThisNode.next = cycleToThisNode;
        expect(cycleFromThisNode.next === cycleToThisNode).toBeTruthy();
        expect(cycleList.hasCycle()).toBeTruthy();
        expect(() => { cycleList.toValueArray(); }).toThrow(CycleError);
        expect(() => { cycleList.reverseList(); }).toThrow(CycleError);
        expect(() => { cycleList.removeDuplicates(); }).toThrow(CycleError);
    });

    
})