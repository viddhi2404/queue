class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(val) {
        this.arr.push(val);
    }

    dequeue() {
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.arr.shift()
    }
    
    front() {
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length == 0
    }

    size() {
        return this.arr.length
    }

    print() {
        return this.arr;
    }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
// console.log(myQueue.print());

// console.log(myQueue.front());

myQueue.dequeue()
myQueue.dequeue()

// console.log(myQueue.print());

myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.enqueue(60);

console.log(myQueue.front());
console.log(myQueue.print());