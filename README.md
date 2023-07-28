# API_REST

# API REST para Gerenciamento de Estudantes

Esta é uma API REST desenvolvida para permitir a gestão de estudantes por meio de operações CRUD (Criar, Ler, Atualizar e Deletar). A API é integrada ao Insomnia para facilitar os testes e também possui uma base de dados MySQL gerenciada pelo MySQL Workbench. A segurança é garantida por meio do uso de tokens JWT para autenticação de usuários e armazenamento seguro de senhas com a criptografia bcryptjs.

## Configuração do Ambiente

Antes de começar a utilizar a API, certifique-se de ter o ambiente devidamente configurado:

1. Instale o Node.js: Certifique-se de ter o Node.js instalado na sua máquina.
2. Banco de Dados: Tenha o MySQL Workbench instalado e crie a base de dados para a aplicação.
3. Insomnia: Instale o Insomnia ou qualquer outro cliente para realizar as requisições à API.


## Configuração do Banco de Dados

1. Crie uma base de dados no MySQL Workbench para a aplicação.
2. Edite o arquivo `config/db.config.js` e insira as informações de conexão com o banco de dados (host, usuário, senha e nome da base de dados).

## Executando a API

No terminal, dentro da pasta do projeto, execute o seguinte comando:

```
npm run dev
```

A API estará rodando em http://localhost:3000.

## Endpoints

A seguir estão os endpoints disponíveis nesta API:

### Autenticação

- `POST /api/auth/login`: Permite fazer o login de um usuário e recebe o token JWT para autorização das próximas requisições.

### Estudantes

- `INDEX `: Retorna a lista de todos os estudantes cadastrados.
- `SHOW :id`: Retorna os detalhes de um estudante específico com base no ID fornecido.
- `STORE `: Cria um novo estudante com os dados fornecidos no corpo da requisição.
- `UPDATE :id`: Atualiza os dados de um estudante específico com base no ID fornecido.
- `DELETE :id`: Remove um estudante com base no ID fornecido.

## Segurança

Para garantir a segurança dos usuários, as senhas são armazenadas no banco de dados de forma criptografada utilizando a biblioteca bcryptjs. Além disso, todas as operações que requerem autenticação são protegidas por meio de tokens JWT.

## Considerações Finais

Esta API é uma ferramenta poderosa para gerenciar estudantes de forma segura e eficiente. Utilizando o Insomnia, você pode testar todos os endpoints e suas funcionalidades CRUD. Lembre-se de sempre proteger suas credenciais de acesso ao banco de dados e a chave secreta do JWT. Em caso de dúvidas ou problemas, sinta-se à vontade para entrar em contato com o desenvolvedor.

Divirta-se usando a API! 😊
