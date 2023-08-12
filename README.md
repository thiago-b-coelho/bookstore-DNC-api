# API Biblioteca DNC

## Front-end web page
[Front-end page from the DNC 'library' project](https://bookstore-dnc-api-front.vercel.app)

## Back-end API web environment
[Back-end API page from the DNC 'library' project](https://bookstore-dnc-api.vercel.app)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```bash
# Clone the repository

$ git clone https://github.com/thiago-b-coelho/bookstore-DNC-api/

# Move to the project directory:

$ cd bookstore-DNC-api

# Create '.env' file and add environment variables

# Install dependencies

$ npm install

# Run the project

$ npm run dev
```

## Usage

With the system up and running on __http://localhost:3000__, use the insomnia software to test the following routes:

### GET
#### Get all books
    /livros       
#### Get book by id
    /livros/{id}   
### POST
#### Add new book
    /livros/cadastro
### PUT
#### Update existing book info
    /livros/edicao/{id}
### DELETE
#### Delete book
    /livros/{id}

