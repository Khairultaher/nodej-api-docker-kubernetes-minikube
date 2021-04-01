import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...!!');
});
