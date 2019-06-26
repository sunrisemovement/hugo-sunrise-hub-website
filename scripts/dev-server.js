const express = require('express')
const fsMiddleware = require('netlify-cms-backend-fs/dist/fs');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.static('.'))
fsMiddleware(app)
app.listen(1316, () => console.log(
    `
    Server listening at http://localhost:1316/
    API listening at http://localhost:1316/api
    `
))