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
    }

    function at(index) {
        let currentNode = newNode;
        let count = 0;
        let tempNode;

        if (count < index && currentNode.next === null) return "error: invalid index";

        while (count !== index) {
            count += 1;
            currentNode = currentNode.next;
        }
        tempNode = node();
        tempNode.value = currentNode.value;

        return tempNode;
    }

    function pop() {
        let currentNode = newNode;

        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = null;

        return newNode;
    }

    function contains(value) {
        let currentNode = newNode;

        while (currentNode.value !== value) {
            currentNode = currentNode.next;

            if (currentNode.value !== value && currentNode.next === null) return false;
        }

        return true;
    }

    function find(value) {
        let currentNode = newNode;
        let index = 0;

        while (currentNode.value !== value) {
            index += 1;
            currentNode = currentNode.next;

            if (currentNode.value !== value && currentNode.next === null) return null;
        }

        return index;
    }

    function toString() {
        let currentNode = newNode;
        let stringedNode = "";

        while (currentNode.next !== null) {
            stringedNode += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;

            if (currentNode.next === null) return stringedNode += `( ${currentNode.value} ) -> null`;
        }

        return stringedNode;
    }

    function insertAt(value, index) {
        let currentNode = newNode;
        let count = 0;

        while (count !== index - 1) {
            count += 1;
            currentNode = currentNode.next;

            if (count < index && currentNode.next === null) return "error: invalid index";
        }

        let tempNode = currentNode.next;
        let standByNode = node();
        standByNode.value = value;
        standByNode.next = tempNode;
        currentNode.next = standByNode;

        return newNode;
    }

    function removeAt(index) {
        let currentNode = newNode;
        let count = 0;

        if (count < index && currentNode.next === null) return "error: invalid index";

        while (count !== index - 1) {
            count += 1;
            currentNode = currentNode.next;
        }

        let tempNode = currentNode.next.next;
        currentNode.next = tempNode;
        
        return newNode;
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
