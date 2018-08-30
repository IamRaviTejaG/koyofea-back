import middleware from './middleware'
const express = require('express')
const router = require('express').Router()

// Direct require dotenv, see https://www.npmjs.com/package/dotenv#usage
// for more.
require('dotenv').config()

let app = express()

router.get('/', (req, res) => {
  res.status(200)
    .sendFile('/home/ubuntu/koyofea-backend/landing_page/index.html')
})

middleware(app)

export default app
