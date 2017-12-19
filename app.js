import express from 'express';
import router from './server';

const app = express();

app.use('/', router);

app.listen(3000);

console.log(`running on 3000`);
