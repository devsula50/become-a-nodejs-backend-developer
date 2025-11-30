const url = require('url')
const express = require('express')
const app = express()

require('dotenv').config()

const port = Number(process.env.PORT)

app.listen(port, () => {
  console.log(`START SERVER : use ${port}`)
})

app.get('/', (_, res) => res.end('HOME'))

app.get('/user', user)

app.get('/feed', feed)

function user(req, res) {
  const userInfo = url.parse(req.url, true).query

  res.json(`[user] name: ${userInfo.name}, age: ${userInfo.age}`)
}

function feed(req, res) {
  res.json(`<ul>
<li>picture1</li>
<li>picture2</li>
<li>picture3</li>
</ul>
`)
}
