import express, { Request, Response } from 'express'
import axios from 'axios'

const app = express()

app.listen('3000')

// 1º Endpoint: retorna lista de usuários
app.route('/users').get( (req: Request, res: Response) => {
    axios.get('https://mockend.com/juunegreiros/BE-test-api/users')
    .then((result) => res.send(result.data))
    .catch((error) => console.error(`error`))
})

// 2º Endpoint: retorna lista de produtos 
app.route('/products').get( (req: Request, res: Response) => {
    axios.get('https://mockend.com/juunegreiros/BE-test-api/products')
    .then((result) => res.send(result.data))
    .catch((error) => console.error(`error`))
})

// 3º Endpoint (para evoluir e finalizar)
app.route('/calculate').get( (req: Request, res: Response) => {
    console.log(req);
    res.send(`teste`)
});

axios
    .get('http://localhost:3000/calculate?users=2&products=1&products=4&products=50')
    .then(function (resposta) {
    console.log(resposta.data) 
});