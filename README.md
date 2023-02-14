# Delivery App

# Contexto
Projeto Delivery App desenvolvido por: Rafael Colombo, Thiago Guarino, Marcos Campos, Lucas Quintela e Gabriel Pondaco.
Trata-se do desenvolvimento da aplicação completa, tanto front quanto back-end, de um aplicativo de entregas para uma distribuidora de bebidas.


  - Ter acesso via login: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  - Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". 
  
  - Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

## Tecnologias utilizadas:

<details>
  <summary><strong>Front-End</strong></summary>

  - JavaScript;
  - React;
  - React Router;
  - Context API.
</details>

<details>
  <summary><strong>Back-End</strong></summary>

  - JavaScript;
  - Node.Js;
  - Express;
  - Sequelize;
  - MySQL;
  - Json Web Token (JWT);
  - express-async-errors;
  - Joi.
</details>


## Requisitos para executar o projeto localmente

- ⚠️ O projeto só instala as dependências com a versão 16 do `node` para evitar conflitos de versão, caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.
- Banco de dados Mysql instalado localmente ou em um container Docker
- Dentro do diretório `back-end` há um arquivo `.env`, seu conteúdo deve ser alterado para a configuração do seu Mysql.

```bash
NODE_ENV=development
API_PORT=3001 #Porta de execução da API, melhor não mudar :)
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=SeuUsuarioMySql # Seu usúario do Mysql
MYSQL_PASSWORD=SuaSenhaMysql # Sua senha do Mysql
MYSQL_DB_NAME=delivery-app
EVAL_ALWAYS_RESTORE_DEV_DB=true
```

 # Iniciando o projeto

> Caso você queira testar o projeto na sua máquina

1. Para clonar o projeto para a sua máquina use o comando abaixo no seu terminal.

```bash
git clone git@github.com:gabrielpondaco/delivery-app.git
```

2. Entrando no diretório e instalando as dependências.
```bash
cd delivery-app

npm install
```

3. Subindo os serviços (A aplicação vai iniciar e abrir no seu browser)

```bash
npm start
```

4. Entrando na aplicação:
- Você pode criar um novo usuário para você clicando no botão de criar conta, em seguida vai ser redirecionado para a página de produtos onde poderá realizar pedidos.
- Caso queira logar como vendedor para ver os pedidos que fez e poder mudar o status, você pode usar o login abaixo.

```json
"email": "fulana@deliveryapp.com",
"password": "fulana@123"
```

- Caso queira logar como pessoa administradora, você pode usar o login abaixo.

```json
"email": "adm@deliveryapp.com",
"password": "--adm2@21!!--"
```
