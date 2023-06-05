const http = require('node:http');

http.createServer( (req, res) =>{

    console.log(req);

    // res.writeHead(200, { 'Content-Type': 'application/json' })
 
    
    res.write('Hola mundo')
    res.end();
    // res.end(JSON.stringify({
    //     data: 'Hello World!',
    //   }));
})
.listen( 8080 );

console.log("escuchanbdo el puerto", 8080)

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: 'Hello World!',
//     }));
//   });
  
//   server.listen(8000);