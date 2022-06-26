const express = require('express')
const path = require('path')
const morgan = require('morgan')

const createPath = (page) =>
  path.resolve(__dirname, 'ejs8_views', `${page}.ejs`)

const app = express()

app.set('view engine', 'ejs')

const PORT = 3000

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'))

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createPath('index'), { title })
})

app.get('/contacts', (req, res) => {
  const title = 'Contacts'
  const contacts = [
    {
      name: 'YouTube',
      link: 'http://youtube.com',
    },
    {
      name: 'GitHub',
      link: 'http://github.com',
    },
    {
      name: 'Twitter',
      link: 'http://twitter.com',
    },
  ]
  res.render(createPath('contacts'), { contacts, title })
})

// app.get('/about-us', (req, res) => {
//   res.redirect('/contacts')
// })

app.get('/posts/:id', (req, res) => {
  const title = 'Post'
  const post = {
    id: '1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    title: 'Post title',
    date: '26.06.2022',
    author: 'Andrey',
  }
  res.render(createPath('post'), { title, post })
})

app.get('/posts', (req, res) => {
  const title = 'Posts'
  const posts = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
      title: 'Post title',
      date: '26.06.2022',
      author: 'Andrey',
    },
  ]
  res.render(createPath('posts'), { title, posts })
})

app.get('/add-post', (req, res) => {
  const title = 'Add-post'
  res.render(createPath('add-post'), { title })
})

app.use((req, res) => {
  const title = 'Error'
  res.statusCode = 404
  res.render(createPath('error'), { title })
})
