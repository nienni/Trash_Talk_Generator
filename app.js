//set module
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const generateTrashTalk = require('./trash_talk_generator.js')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = generateTrashTalk(options)
  console.log('幹話', generateTrashTalk(options))
  res.render('index', { trashTalk: trashTalk, options: options })
})



//liston on express
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
