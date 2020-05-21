const express = require('express')
const posts = express.Router()
const cors = require('cors')
const Post = require('../models/Post')
posts.use(cors())

posts.route('/').get(function (req, res) {

  Post.find(function(err, posts){
  if(err){
    res.json(err);
  }
  else {
    res.json(posts);
  }
});
});


posts.post('/create', (req, res) => {
  const today = new Date()
  const userData = {
    title: req.body.title,
    status: req.body.status,
    desc: req.body.desc,
    slug: req.body.slug,
    article: req.body.article,
    tags:  req.body.tags,
    likes: req.body.likes,
    comments: req.body.comments,
    author: req.body.author,
    created: today
  }

  Post.findOne({
    title: req.body.title
  })
    .then(post => {
      if (!post) {
          Post.create(userData)
            .then(post => {
              res.json({ status: post.title + ' has been created' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        }
      else {
        res.json({ error: 'Post already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})



module.exports = posts
