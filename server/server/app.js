import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { serverPort } from '../etc/config.json'
import * as db from './utils/DataBaseUtils';

db.setUpConnection();
const app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.get('/news', (req, res) => {
    db.listNews().then(data => res.send(data));
})

app.post('/news', (req, res) => {
    db.createNews(req.body).then(data => res.send(data));
})

app.delete('/news/:id', (req, res) => {
    db.deleteNews(req.params.id).then(data => res.send(data));
})

const server = app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
})