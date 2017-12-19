'use strict'
const api = require('express').Router()
const db = require('../db')

api.use('/students', require('./student'))
api.use('/campus', require('./campus'))

api.use(function( req, res, next) {
  res.status(404).end()
})

module.exports = api
