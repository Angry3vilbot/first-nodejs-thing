const http = require('http')
const fs = require('fs');

http.createServer(function (req, res) {
  switch(req.url){
    case '/':
      const index = fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
      })
      break
    case '/about':
      const about = fs.readFile('about.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
      })
      break
    case '/contact':
      const contact = fs.readFile('contact-me.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
      })
      break
    default:
      const notfound = fs.readFile('404.html', (err, data) => {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
      })
  }
  
}).listen(8080);
