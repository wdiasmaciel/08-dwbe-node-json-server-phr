# 08-dwbe-node-json-server-phr

Material:

https://app.notion.com/p/O-que-uma-API-48544ced3625838681d6018cf5332031

https://app.notion.com/p/JSON-Server-a9044ced3625829f912781a3c0c55f3d

---

## Comandos Iniciais

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
mkdir projeto
```

```bash
cd projeto
```

```bash
npm init -y
```

No arquivo `package.json`, substituir ` "type": "commonjs"` por ` "type": "module"`:

```text
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```

## Instalando o JSON Server

Instalação global:

```bash
npm install -g json-server
```

Ou no projeto:

```bash
npm install json-server
```

Caso seja instalado no projeto, observar as alterações no arquivo `package.json`:

```js
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "json-server": "^1.0.0-beta.15"
  }
}
```

## Criando o Projeto

Crie uma pasta `db/`:

```bash
mkdir db
```

```bash
cd api-fake
```

Crie o arquivo `db.json`:

```
db.json
```

99999999999999
```bash
node 01-index.js
```

No VS Code, instalar a extensão `REST Client`:

![Extensão REST Client](./img/restclient.png)


Criar os arquivos `02-index.js` e `02-index.http`.

Conteúdo do arquivo `02-index.http`:

```text
GET http://localhost:3000
```

Criar os arquivos `03-index.js` e `03-index.http`.

Conteúdo do arquivo `03-index.http`:

```text
# Isto é um comentário.
//Isto também é um comentário.

### Isto é um separador de requisições:
GET http://localhost:3000

### Isto é um separador de requisições:
GET http://localhost:3000/

### Isto é um separador de requisições:
GET http://localhost:3000/sobre

### Isto é um separador de requisições:
GET http://localhost:3000/contato

### Isto é um separador de requisições:
GET http://localhost:3000/produtos
```

Criar os arquivos `04-index.js` e `04-index.http`.

Conteúdo do arquivo `04-index.http`:

```text
# Isto é um comentário.
//Isto também é um comentário.

// Variável:
@host = http://localhost:3000

### Isto é um separador de requisições:
GET {{host}}/dados
```

Criar os arquivos `05-index.js` e `05-index.http`.

Conteúdo do arquivo `05-index.http`:

```text
# Isto é um comentário.
//Isto também é um comentário.

// Variável:
@host = http://localhost:3000

### Isto é um separador de requisições:
GET {{host}}/dados
```

Criar os arquivos `06-index.js` e `06-index.http`.

Conteúdo do arquivo `06-index.http`:

```text
# Isto é um comentário.
//Isto também é um comentário.

// Variável:
@host = http://localhost:3000

### Isto é um separador de requisições:
GET {{host}}/dados
```

Criar os demais arquivos `#-index.js` e `#-index.http`.

---

## Exercícios

Usando `Node.js` e o módulo `http`, escreva uma `API` que:

1. Retorne a lista de produtos de uma loja. Teste a `API`, usando a extensão `REST Client` do `VS Code`. Também apresente uma página com os dados retornados. Aplique estilos CSS à página. A porta da aplicação deve ser armazenada numa variável de ambiente.

2. Retorne a lista de pacotes viagem de uma agência de turismo. Teste a `API`, usando a extensão `REST Client` do `VS Code`. Também apresente uma página com os dados retornados. Aplique estilos CSS à página. A porta da aplicação deve ser armazenada numa variável de ambiente.

3. Retorne a lista de eventos de um site de eventos. Teste a `API`, usando a extensão `REST Client` do `VS Code`. Também apresente uma página com os dados retornados. Aplique estilos CSS à página. A porta da aplicação deve ser armazenada numa variável de ambiente.