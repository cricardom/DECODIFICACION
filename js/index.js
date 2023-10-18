import express from 'express'

const app = express()

app.set('view engine', 'pg', 'ejs');

app.set('view engine', 'html', 'ejs');

app.get('/', (req, res)=> res.sendFile('/index.html'));

app.listen(3000);
console.log('server is listening on port', 3000);