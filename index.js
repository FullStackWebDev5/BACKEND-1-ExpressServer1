const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const middleware1 = (req, res, next) => {
  console.log('Middleware 1 executed')
  const test = false
  if(test) 
    next()
  else
    res.send(`You don't have access to this page`)
}

const middleware2 = (req, res, next) => {
  console.log('Middleware 2 executed')
  next()
}

app.use(bodyParser.urlencoded())
app.use(express.static('public'))
app.use(middleware1)
app.use(middleware2)

app.get('/', (req, res) => {
  res.send('Our first express server :)')
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/html/register.html')
})

app.post('/process-data', (req, res) => {
  const { firstName, lastName } = req.body
  res.send(`Thank you for registering, ${firstName} ${lastName}!`)
})

app.listen(3000, () => {
  console.log('Server is running :)')
})


/*
  # Middlewares
    - An application that lies between client and server
    - It is a function that has access to the req, res, and the next function
    - Examples:
      - Check whether the user is logged in or not
      - Check user's subscription
      - Check where a specific user is an admin or not

    - Attach middlewares to express server
      - .use(): Pass the middleware as an argument

    - Types of middlewares
      - Custom/ user-defined middlewares *
        - Function
          - 3 arguments: req, res, next
          - next(): Proceed to the next middleware/handler
      - External middlewares
        - express.static(): Make the contents of a specific folder publicly available
        - bodyParser.urlencoded() *: Parse incoming request bodies in a middleware before your handlers

  # Resources:
    - body-parser: https://www.npmjs.com/package/body-parser
*/