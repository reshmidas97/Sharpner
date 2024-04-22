

//imports the Node.js fs module, which provides file system-related functionality.
//After 10 seconds, the file reading starts
const fs = require('node:fs');
function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

//It took the the exact time the control same the this line
//then enter the setTimeout block and waits for the timer to run out to print the delayed time
const timeoutScheduled = Date.now();

//Set Timeout block is called only after the entire execution of the file is done
//The execution reached here after 5 sec, till then 5 sec of setTimeout block is over
//Another 5 sec are left, so it will complete those 5 secs and then print on the screen
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 10000);


// do someAsyncOperation which takes 95 ms to complete
//someAsyncOperation() is called and a function is passed as a callback to this function
//the callback function gets executed till 10 ms and causes a delay by utilising the CPU cycle 
//After 10 ms, the control is transferred to the function 
someAsyncOperation(() => {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 5000) {
    // do nothing
  }
});