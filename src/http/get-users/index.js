// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')

// TODO: modify the body object!
let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>
    <h1 class="center-text">
      Users
    </h1>
    <p class="center-text">
      Get users
    </p>
  </body>
</html>
`

// Basic Begin HTTP GET Function
exports.handler = async function http(req) {
  console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/
