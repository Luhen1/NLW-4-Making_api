import express from 'express';
import 'reflect-metadata';
import './database'; // por padrao ele reconhece o index.ts

const app = express();

/* 
* metodos http
* GET => busca
* POST => salvar
* PUT => alterar
* delete => deletar
* patch => alteração específica
 */

 //http://localhost:3333/users

app.get("/users", (request, response) => {

    return response.json({ message: "hello world - NVLW04"});
})

// 1 parametros => rota(recurso, api)
// 2 parametros => request, response

app.post("/", (request, response) => {
    //recebey os dados para salvar
    return response.json({ message: "os dados foram salvos com sucesso!"});
})

app.listen(3333, () => console.log("Server is running!"));



// install @types/express -D to resolve and use app.listen etc.