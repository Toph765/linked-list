const node = (value = null, next = null) => {
    return {
        value,
        next
    };
};

const linkedList = (() => {
    let newNode = node();

    function getNode() {return newNode};

    function append(value) {
        let currentNode = newNode;
        let tempNode = node();

        if (currentNode.value === null) {
            currentNode.value = value;
            return currentNode;
        }

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        };

        tempNode.value = value;
        currentNode.next = tempNode;

        return currentNode;
    }

    function prepend(value) {
        if (newNode.value === null && newNode.next === null) {
            newNode.value = value;
            return newNode;
        }
        else {
            let preNode = node(value);
            preNode.next = newNode;
            newNode = preNode;
            return newNode;
        }
    }

    function size() {
        let count = 1;
        let currentNode = newNode;

        if (currentNode.value === null) return count = 0;

        while (currentNode.next !== null) {
            count += 1;
            currentNode = currentNode.next;
        }

        return count;
    }

    function head() {
        let headNode = node();
        headNode.value = newNode.value;
        return headNode
    }

    function tail() {
        let currentNode = newNode;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode;


        /* if (currentNode.value && currentNode.next === null) {
            let tailNode = node();
            tailNode.value = currentNode.value;
            return tailNode;
        } else return tail(currentNode.next); */
    }

    function at(
        index,
        count = 0,
        currentNode = newNode) {
        
        if (count < index && currentNode.next === null) return "error: invalid index";

        if (count === index) {
            let queriedNode = node();
            queriedNode.value = currentNode.value;
            return queriedNode;
        } else {
            count += 1;
            return at(index, count, currentNode.next);
        }
    }

    function pop(currentNode = newNode) {
        if (currentNode.next.next === null) {
            currentNode.next = null;
            return newNode;
        } else return pop(currentNode.next);
    }

    function contains(
        value,
        currentNode = newNode) {
        
        if (currentNode.value != value && currentNode.next === null) return false;

        if (currentNode.value === value) return true
        else return contains(value, currentNode.next);
    }

    function find(
        value,
        currentNode = newNode,
        index = 0) {
        
        if (currentNode.value === value) return index;

        if (currentNode.value != value && currentNode.next === null) { return null }
        else {
            index += 1
            return find(value, currentNode.next, index)
        }
    }

    function toString(
        currentNode = newNode,
        stringedNode = "") {
        
        if (currentNode.next === null) return stringedNode += `( ${currentNode.value} ) -> null`;
        else {
            stringedNode += `( ${currentNode.value} ) -> `;
            return toString(currentNode.next, stringedNode);
        }
    }

    function insertAt(
        value,
        index,
        currentNode = newNode,
        count = 0) {
        
        if (count < index && currentNode.next === null) return "error: invalid index";

        if (count === index - 1) {
            let tempNode = currentNode.next;
            let standByNode = node();
            standByNode.value = value;
            standByNode.next = tempNode;
            return currentNode.next = standByNode;
        } else {
            count += 1;
            return insertAt(value, index, currentNode.next, count)
        }
    }

    function removeAt(
        index,
        currentNode = newNode,
        count = 0) {
        
        if (count < index && currentNode.next === null) return "error: invalid index";

        if (count === index - 1) {
            let tempNode = currentNode.next.next;
            return currentNode.next = tempNode;
        } else {
            count += 1;
            return removeAt(index, currentNode.next, count);
        }
    }

    return {
        getNode, append, prepend, size, head, tail, at, pop, contains, find,toString, insertAt, removeAt
    }
})()

// TESTING

// append new node
console.log("// APPEND //");
console.log(linkedList.append(1));
console.log(linkedList.append(2));
console.log(linkedList.append(3));
console.log(linkedList.append(4));
console.log(linkedList.append("end"));

// prepend new node
console.log("// PREPEND //");
console.log(linkedList.prepend('d'));
console.log(linkedList.prepend('c'));
console.log(linkedList.prepend('b'));
console.log(linkedList.prepend('a'));

// return size of linked list
console.log("// SIZE //");
console.log(linkedList.size());

// return first node of linked list
console.log("// HEAD //");
console.log(linkedList.head());

// return last node of linked list
console.log("// TAIL //");
console.log(linkedList.tail());

// return node with specific index
console.log("// AT //");
console.log(linkedList.at(0));
console.log(linkedList.at(5));

// remove last node
console.log("// POP //");
console.log(linkedList.pop());
console.log(linkedList.tail());
console.log(linkedList.size());

// return true if value is in the linked list, return false if otherwise
console.log("// CONTAINS //");
console.log(linkedList.contains(3));
console.log(linkedList.contains(5));

//return node that contains the value
console.log("// FIND //");
console.log(linkedList.find('b'));
console.log(linkedList.find(4));
console.log(linkedList.find('end'));

// return linked list as string
console.log("// TO STRING //");
console.log(linkedList.toString());

// insert node at specific index
console.log("// INSERT AT //");
console.log(linkedList.insertAt("hello", 2));
console.log(linkedList.toString());

// remove node at specific index
console.log("// REMOVE AT //");
console.log(linkedList.removeAt(2));
console.log(linkedList.toString());
