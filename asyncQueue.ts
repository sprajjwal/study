
class AsyncTaskQueue {
MAX_TASKS: number;
taskQueue: (()=>Promise<unknown>)[];
runningTasks: number;
  constructor(concurrency: number) {
    // Initialize the queue with the specified concurrency limit
    this.MAX_TASKS = concurrency;
    this.taskQueue = [];
    this.runningTasks = 0;
  }
  queue(task: () => Promise<unknown>) {
    // Add an async task to the queue
    this.taskQueue.push(task)
    this.runTasks()
  }
  runTasks() {
    while(this.taskQueue.length > 0 && this.runningTasks < this.MAX_TASKS) {
      const newTask = this.taskQueue.shift();
      if(newTask) {
        this.runningTasks += 1;
        newTask().finally(() => {
          this.runningTasks -= 1;
          this.runTasks();
        })
      }
    }
  }
}

const queue = new AsyncTaskQueue(2); // Allow up to 2 tasks to run concurrently
// Example async tasks
const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject("Task 2 failed"), 500));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));
// Queue tasks
queue.queue(task1); // Starts immediately
queue.queue(task2); // Starts immediately (concurrency = 2)
queue.queue(task3);