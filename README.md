# API Web Biblioteca - Gerenciamento de Livros

Este projeto consiste no desenvolvimento de uma API Web Backend para o gerenciamento de uma biblioteca, focando nas operações CRUD (Create, Read, Update, Delete) para a entidade **Livro**.

O projeto foi desenvolvido como parte da avaliação da disciplina **Eletiva 01 - Arquitetura e Desenvolvimento Back-end**, ministrada pelo **Prof. Danilo Farias**.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando o ecossistema **TypeScript** conforme os requisitos técnicos:

- **Node.js** (Runtime JS)
- **TypeScript** (Superset tipado)
- **Express.js** (Framework Web)
- **TypeORM** (ORM para persistência de dados)
- **SQLite** (Banco de dados relacional simplificado)

## 🏗 Arquitetura

A solução segue uma arquitetura em camadas ajustada, separando responsabilidades:

- **Controller:** Gerencia as requisições HTTP e contém a lógica de negócio.
- **Repository:** Responsável pela comunicação direta com o banco de dados via ORM.
- **Entity:** Define o modelo de dados (tabela) do Livro.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado.
- Git instalado.

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/vinifvision/bibliotecaLivros-api.git](https://github.com/vinifvision/bibliotecaLivros-api.git)
    cd biblioteca-api-backend
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor em modo de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Acesse a API:**
    O servidor iniciará na porta 3000. A URL base é: `http://localhost:3000/api`

## 📚 Documentação da API (Endpoints)

Abaixo estão listados os endpoints disponíveis para teste via Insomnia ou Postman.

### 1. Criar Livro

- **Método:** `POST`
- **URL:** `/api/livros`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "titulo": "Coraline",
    "autor": "Neil Gaiman",
    "isbn": "978-8551006757",
    "anoPublicacao": 2020,
    "disponivel": true
  }
  ```

### 2. Listar Todos os Livros

- **Método:** `GET`
- **URL:** `/api/livros`
- **Retorno:** Retorna um array com todos os livros cadastrados.

### 3. Buscar Livro por ID

- **Método:** `GET`
- **URL:** `/api/livros/{id}`
- **Exemplo:** `/api/livros/1`

### 4. Atualizar Livro

- **Método:** `PUT`
- **URL:** `/api/livros/{id}`
- **Descrição:** Atualiza qualquer campo do livro.
- **Corpo da Requisição (JSON):**
  ```json
  {
    "disponivel": false
  }
  ```

### 5. Excluir Livro

- **Método:** `DELETE`
- **URL:** `/api/livros/{id}`
- **Retorno:** Status 204 (No Content).

## 🗂 Estrutura de Pastas

```json
biblioteca-api/
├── src/
│ ├── controller/ <-- Lógica de Negócio e Requisições
│ ├── entity/ <-- Modelo do Banco de Dados
│ ├── data-source.ts <-- Configuração do Banco de Dados
│ ├── routes.ts <-- Definição das Rotas
│ └── index.ts <-- Ponto de entrada
├── package.json
└── tsconfig.json
```

---

## Desenvolvido por

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/119247208?s=400&u=a41a122510e3447159fb98c4797d79ff19b43e39&v=4" width=115><br><sub>Vinícius Fernandes</sub>](https://github.com/vinifvision)
