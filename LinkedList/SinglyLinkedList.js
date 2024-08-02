class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
 
    push(node){

        if (this.length === 0){
            this.head = node;
            this.tail= node;
            this.head.next = null;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length = this.length + 1;

    }

    traverse(){
        let head = this.head;
        console.log(this.length);
        while(head){
            console.log(head.value);
            head = head.next 
        }
    }


}

class Node{
    constructor(value){
        this.next = null;
        this.value = value
    }
}
const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);

const sl = new LinkedList();

sl.push(n1);
sl.push(n2);
sl.push(n3);

sl.traverse();