/*
 # Express Server boilerplate code:
  const express = require('express')

  const app = express()

  app.get('/', (req, res) => {
    res.send('Our first express server :)')
  })

  app.listen(3000, () => {
    console.log('Server is running :)')
  })

*/

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to our server :)')
})

app.get('/users', (req, res) => {
  res.send('This is a route for reading users')
})

app.post('/users', (req, res) => {
  res.send('This is a route for creating a new user')
})

app.get('/dogs', (req, res) => {
  res.send('This is a route for reading dogs')
})

app.post('/dogs', (req, res) => {
  res.send('This is a route for creating a new dog')
})

app.get('/students', (req, res) => {
  const STUDENTS = [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Jane Doe'
    },
    {
      id: 3,
      name: 'Alice Doe'
    }
  ]
  res.set('Content-Type', 'application/json')
  res.send(STUDENTS)
})

app.get('/students-2', (req, res) => {
  const STUDENTS = [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Jane Doe'
    },
    {
      id: 3,
      name: 'Alice Doe'
    }
  ]
  res.json(STUDENTS)
})

app.get('/students-3', (req, res) => {
  res.status(204).json()
})

app.get('/dogs-content', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

app.get('/cats-content', (req, res) => {
  res.send('Cats content')
})

app.get('/dummy-pdf', (req, res) => {
  res.sendFile(__dirname + '/files/dummy.pdf')
})

app.get('/download-dummy-pdf', (req, res) => {
  res.download(__dirname + '/files/dummy.pdf')
})

app.listen(3000, () => {
  console.log('Server is running :)')
})

/*
  --------------------------
  # Node.js Frameworks:
    - Express.js
    - Fastify.js
    - Hapi.js

  # Express.js: Fast, unopinionated, minimalist web framework for Node.js
    - Advantages:
      - Easy to learn and use
      - High performance
      - Extensibility: External modules, etc. can be integrated easily
    - With Express.js, the following problems were solved:
      - Routing: Hanldes HTTP requests based on methods and has seperate method for each of them
        - GET: .get()
        - POST: .post()
        - PUT: .put()
        - PATCH: .patch()
        - DELETE: .delete()
      - Middleware
      - Template Engines/ View Engines

    - Response methods:
      - set(): To set headers (metadata) for HTTP response
        - Syntax: .set('key', 'value')
        - Examples:
          - 'Content-Type': Set the content type of the response
            - application/json: JSON data
            - text/html: Text/HTML data
      - status(): Set the status code of the HTTP response
        - Status codes:
          - 100-199: Information
          - 200-299: Success (200: OK, 201: Created, 204 No content, etc.)
          - 300-399: Redirection
          - 400-499: Client Error (400: Bad Request, 401: Unauthorized, 403: Forbidden, 404: Not Found)
          - 500-599: Server Error (500: Internal Server Error)
      - send(): Return string/ JSON/ buffer data
      - json(): Return JSON data only
      - sendFile(): Return a file from the server
      - download(): Download a file from the server

    # Reference Links:
      - Response methods: https://www.geeksforgeeks.org/express-js-response-complete-reference/
      - HTTP status codes: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
*/