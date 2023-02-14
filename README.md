<h1 align="center"> Teste - API de orçamento </h1>

### 💻 Descrição do projeto

Esse projeto consiste em criar uma API que, além de retornar uma listagem de usuários e produtos, também retorna um orçamento baseado na taxa do usuário selecionado e no valor dos produtos escolhidos.

### :bangbang: Requisitos de elaboração

<ul>
  <li>A API deve ser elaborada em Node.js :heavy_check_mark:</li> 
  <li>A API deve ser elaborada com Typescript :sparkles::heavy_check_mark:</li>
  <li>A API deve ter um endpoint que busca os dados no mockend e retorna a lista dos usuários :heavy_check_mark:</li> 
  <li>A API deve ter um endpoint que busca os dados no mockend e retorna a lista de produtos :heavy_check_mark:</li>
  <li>A API deve ter um endpoint que recebe o id do usuário e uma lista com os ids do produto e retorna o valor que o usuário irá pagar por esses produtos :x:</li>
  <li>Os commits do projeto devem ser descritivos (gitflow):sparkles::heavy_check_mark:</li>
  <li>O Projeto deve apresentar documentação (readme) :sparkles::heavy_check_mark:</li>
  <li>A API deve ser validada por testes unitários :sparkles::x:</li>
</ul>

### 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### 📣 Utilização

1. Entre na pasta raíz do projeto `teste-api-ts`
2. No terminal do editor de código utilizado, rodar o comando `npm install`
3. No terminal do editor de código utilizado, rodar o comando `npm start`
4. Para acessar o primeiro endpoint, abra seu browser e na barra de pesquisa digite `http://localhost:3000/users`. Esse endpoint retorna a lista de usuários.
5. Para acessar o segundo endpoint, abra seu browser e na barra de pesquisa digite `http://localhost:3000/products`. Esse endpoint retorna a lista de produtos.
6. Para acessar o terceiro endpoint, abra seu browser e na barra de pesquisa digite `http://localhost:3000/calculate`. Esse endpoint ainda está em construção. 

</br>
<p align="center">
  <a href="https://github.com/flaviafogaca">Desenvolvido por Flávia Fogaça<img src="https://github.githubassets.com/images/icons/emoji/octocat.png"></a>
</p>
