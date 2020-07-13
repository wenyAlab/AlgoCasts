// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next ;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.insertAt(data, 0);

        // this.head = new Node(data,this.head);
    }


    size(){
        let counter = 0;
        let node = this.head;

        while(node) {
            counter ++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        // return this.head;
        return this.getAt(0);
    }

    getLast(){
        // if (!this.head) {
        //     return null;
        // }

        // let node = this.head;
         
        // while(node) {
        //     if (!node.next) {
        //         return node;
        //     }

        //     node = node.next;
        // }
        return this.getAt(this.size() - 1);
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        // if (!this.head) {
        //     return;
        // }
        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast(){
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
         
        while(node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;

    }

    insertLast(data){

        const last = this.getLast();
        if (last) {

            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index){
        let counter = 0;
        let node = this.head;

        while(node) {
            if (counter === index) {
                return node;
            }
            counter ++;
            node = node.next;
        }

        return null;
        
    }

    // getAt(num){ // mine
    //     if (!this.head || num>this.size() - 1) {
    //         return null;
    //     }
    //     let counter = 0;
    //     let node = this.head;

    //     while(node) {
    //         if (counter === num) {
    //             return node;
    //         }
    //         counter ++;
    //         node = node.next;
    //     }       
    // }
     removeAt(index){
        if (!this.head)  {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        

        const previous = this.getAt(index -1);
        if (!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
    }
    // removeAt(index){   // mine
    //     if (!this.head || index>this.size() - 1)  {
    //         return null;
    //     }
    //     if (index === 0) {
    //         this.head = this.head.next;
    //         return;
    //     }
        

    //     const previous = this.getAt(index -1);

    //     previous.next = previous.next.next;
    // }

    insertAt(data, index){
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // if (index>this.size() -1) {
        //     this.getLast().next = new Node(data);
        //     return;
        // }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);

        previous.next = node;

    }

    forEach(fn){
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while(node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
