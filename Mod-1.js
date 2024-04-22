const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => 
{
    //retrieves the url after the local host
    const url = req.url;

    //retrieves the method in the req 
    //by feault GET method
    const method = req.method;

    //nothing after the localhost:3000
    if(url === '/')
    {
        let data;
        try 
        {

            //retrieving data in the file message.txt
            data = fs.readFileSync('message.txt', 'utf8');
        } 
        catch (error) 
        {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<html><body><h1>Error 500: Internal Server Error</h1></body></html>');
            return res.end();
        }

        //convert the data retrieve to String an split it by lines
        //and storing it in message
        let messages = data ? data.toString().split('\n') : [];

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>Details</title></head><body>');
        res.write('<h2>Messages:</h2>');            
        res.write('<ul>');

        //Iterating through message and trimming extra spaces
        //Writing this loop in the html content where to want to display the data
        messages.forEach((msg) => 
        {
            if (msg.trim() !== '') 
            {
                res.write(`<li>${msg}</li>`);
            }
        });

            
        res.write('</ul>');
        res.write('<form action = "/message" method = "POST">');
        res.write('<input type = "text" name = "message">');
        res.write('<button type = "submit"> Send </button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    else if(url === '/message' && method === 'POST')
    {
        const body = [];
        //sets up an event listener for the 'data' event on the incoming request (req).
        req.on('data', (chunk) =>
        {
            console.log(chunk);
            body.push(chunk);
        });

        //sets up an event listener for the 'end' event of an incoming HTTP request (req)
        //This event occurs when all data has been received for the request.
        req.on('end', () => 
        {
            //used to concatenate all the data chunks received in the request body and convert them into a single string.
            //Buffer.concat(body) has binaery data
            //needs to be convert to String using toString()
            //But the data is still in JSON format with key, value pair
            //console.log(Buffer.concat(body).toString());
            const parseBody = Buffer.concat(body).toString();
            const msg = parseBody.split("=")[1];


            //Appends value of template literal msg in message.txt
            fs.appendFile('message.txt', `${msg}\n`, (err) => 
            {
                if (err) 
                {
                    console.error("Req", err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.write('<html><body><h1>Error 500: Internal Server Error</h1></body></html>');
                    return res.end();
                }
            
            //set the HTTP status code that will be sent in the response to the client.
            res.statusCode = 302;
            //s
            //tells the client to temporarily redirect to the '/' URL.
            //it sets the location to which the client should be redirected after receiving the response.
            res.setHeader('Location', '/');

            //End the response
            return res.end();
            });
        });
    }     
});


server.listen(3000, () => 
{
    console.log('Server is running on port 3000');
});