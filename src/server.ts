import express from 'express';
import { router } from './routers';
import './database'; // por padrao ele reconhece o index.ts

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));



// install @types/express -D to resolve and use app.listen etc.