const url = require('url')
const express = require('express')
const app = express()

require('dotenv').config()

const port = Number(process.env.PORT)

let posts = []

// req.body를 사용하려면 JSON 미들웨어를 사용해야 합니다.
app.use(express.json())   // JSON 미들 웨어 활성화

// POST 요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true }))   // JSON 미들웨어와 함께 사용

app.get('/', (req, res) => {
  res.json(posts)
})

app.post('/post', (req, res) => {
  const { title, name, text } = req.body

  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date()})
  res.json({ title, name, text })
})

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id
  const filteredPosts = posts.filter((post) => post.id !== +id)
  const isLengthChanged = posts.length !== filteredPosts.length
  posts = filteredPosts
  if (isLengthChanged) {
    res.json('OK')
    return
  }
  res.json('NOT CHANGED')
})

app.listen(port, () => {
  console.log('welcome posts START!')
})
