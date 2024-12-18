
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
  
 
  queue.enqueue([100, 200, 300]); 
  queue.dequeue(); 
  queue.enqueue([400]); 
  queue.dequeue(); 
  queue.dequeue(); 
  queue.enqueue([500, 600]); 
  
  console.log(queue.isEmpty()); 
  
  
  console.log(queue.print()); 
  