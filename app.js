const http = require('http');

const server = http.createServer(function(request,response){
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  
  response.end("<h1>Hello World!!</h1> <p> This is my firt time attempting http server!!! </p>");

});

server.listen(8080, function(){

  console.log(`Listen on port 8080.`)
});