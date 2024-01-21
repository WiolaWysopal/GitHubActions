const http = require('http')
const dodaj = require('./dodaj')

const server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    // Nie potrzebujemy przetwarzać danych wejściowych od użytkownika
    const result = dodaj.add100();
    var resultPage = `
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Wynik</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
          <div class="container mt-5">
            <h1 class="text-center">Wynik: ${result}</h1>
            <div class="row justify-content-center">
              <div class="col-md-4 text-center">
                <a href="/" class="btn btn-primary">Powrót do strony głównej</a>
              </div>
            </div>
          </div>
        </body>
      </html>`;

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(resultPage);
  } else {
    var html = `
      <html>
        <head>
        <meta charset="UTF-8">
          <title>Node.js Number Adder</title>
          <!-- Dołączanie Bootstrap CSS -->
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
          <div class="container mt-5">
            <h1 class="text-center">Node.js Number Adder</h1>
            <p class="text-center">Kliknij przycisk poniżej, aby dodać liczby od 1 do 100.</p>
            <div class="row justify-content-center">
              <div class="col-md-4 text-center">
                <form method="post" action="http://localhost:3000">
                  <input type="submit" class="btn btn-primary btn-lg" value="Add numbers from 1 to 100" />
                </form>
              </div>
            </div>
          </div>
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
