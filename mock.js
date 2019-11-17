const express = require('express')
const Mock = require('mockjs')
const fs = require('fs')
const path = require('path')

const app = express()

const getJsonFile = (filePath) => {
  const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
  return JSON.parse(json)
}

app.use('/api/getData', (req, res) => {
  const json = getJsonFile('./mock/getData.json')
  res.json(Mock.mock(json))
})

app.listen(3008)
