import express from 'express'
import router from './router.js'

const server = express();
const port = process.env.PORT || 3000;

server.use('/api', router)

server.listen(port, () => console.log(`localhost:${port}`));