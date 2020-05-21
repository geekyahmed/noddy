'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
slug: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  desc: {
    type: String,
    required: true

  },
article: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true

  },
  likes: {
type : Boolean
  },
comments: {
      type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('posts', PostSchema)
