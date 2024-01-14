const http = require('http')
const dodaj = require('./dodaj')

const server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    // Nie potrzebujemy przetwarzać danych wejściowych od użytkownika
    const result = dodaj.add100()
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Result: ' + result)
  } else {
    var html = `
      <html>
        <body>
          <form method="post" action="http://localhost:3000">
            <input type="submit" value="Add numbers from 1 to 100" />
          </form>
        </body>
      </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
