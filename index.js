const http = require('http')
const dodaj = require('./dodaj')

const server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
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
            <h1 class="text-center">Result: ${result}</h1>
            <div class="row justify-content-center">
              <div class="col-md-4 text-center">
                <a href="/" class="btn btn-primary">Back to main page</a>
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
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
          <div class="container mt-5">
            <h1 class="text-center">Node.js Number Adder</h1>
            <p class="text-center">Click the button below to add numbers from 1 to 100.</p>
            <div class="row justify-content-center">
              <div class="col-md-4 text-center">
                <form method="post">
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});


