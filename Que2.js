/*
let fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

fruits = fruits.map(fruit => {
    if(fruit === ' ')
        {
            return 'empty string';
        }
    else
        return fruit;
});

//fruits.push('try');
console.log(fruits);

*/

/*
Video 11 - Async & Promises 

const promises = (x) => {
    const promise = new Promise((resolve, reject) =>
    {
            resolve(x);
    });
    return promise;
};

console.log('a');
promises('b')
.then((resultb) => 
{
    console.log(resultb);
    return promises('c');
})
.then((resultc) => 
{
    console.log(resultc);
    //return promises();
}) 

*/
/*
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Write the response content
  res.end('My name is ChatGPT!\n');
});

server.listen(4000, () => {

    console.log('Server running');
});

*/