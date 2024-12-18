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
  const queue = new Queue();


queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);


queue.dequeue(); 
queue.dequeue(); 
queue.enqueue(6); 
queue.enqueue(7); 
queue.enqueue(8); 


queue.print(); 