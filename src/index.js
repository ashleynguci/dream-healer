import express from 'express';
import bodyParser from "body-parser";
import {healTheDream} from './controller';

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.post('/analyze', healTheDream);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 