//Task 5: Implement a Queue Class

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) return "Underflow";
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) return "No elements in Queue";
      return this.items[0];
    }
  }
  
//Task 6: Simulate a Printer Queue Using Queue

class PrinterQueue extends Queue {
    printJob() {
      if (this.items.length === 0) return "No jobs in queue";
      const job = this.dequeue();
      console.log(`Printing job: ${job}`);
    }
  }
  
  // Test cases
  const printerQueue = new PrinterQueue();
  printerQueue.enqueue("Job1");
  printerQueue.enqueue("Job2");
  printerQueue.printJob(); // Output: Printing job: Job1
  printerQueue.printJob(); // Output: Printing job: Job2
  printerQueue.printJob(); // Output: No jobs in queue
  