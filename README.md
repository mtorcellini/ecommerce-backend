# eCommerce Backend

![last commit](https://img.shields.io/github/last-commit/mtorcellini/ecommerce-backend)
![license-badge](https://img.shields.io/github/license/mtorcellini/ecommerce-backend)
![size](https://img.shields.io/github/repo-size/mtorcellini/ecommerce-backend)

## Description

A backend for an eCommerce application. Allows users to manipulate a database of products, categories, and tags. Demonstrates use of the Sequelize package for basic CRUD functionality with a SQL database. Can be accessed and interacted with via an API client such as [Postman](https://www.postman.com/product/api-client/) or [Insomnia](https://insomnia.rest/products/insomnia).

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
  * [Routes](#Routes)
    * [Product Endpoints](#/api/products/id)
    * [Category Endpoints](#/api/categories/id)
    * [Tag Endpoints](/api/tags/id)
* [License](./LICENSE)


## Installation

1. Clone this repo. Install dependencies by running `npm install`.

2. Create a local database called `ecommerce_db` by running the `schema.sql` file from the MySQL shell.

3. Exit the database and seed it with some starter data by running `npm run seed`

4. Create a `.env` file in the root directory with the following variables:

```
DB_NAME=ecommerce_db
DB_USER=[your SQL username]
DB_PW=[your SQL password]
```

## Usage

- Run `npm start` to start the program.

- Submit requests to any of the endpoints using an API client.

## Routes

### /api/products/id
 - id is optional (will return all products by default)
 - GET, POST, UPDATE, DELETE
 - GET returns products and associated categories and tags

Example response from GET:

![Product GET](./Assets/get-product.png?raw=true)


Example request object for POST, PUT:
  - Not all properties required for PUT

![Product POST](./Assets/post-product.png?raw=true)

### /api/categories/id
 - id is optional
 - GET, POST, UPDATE, DELETE
 - GET returns categories and associated products

![Category GET](./Assets/get-category.png?raw=true)

### /api/tags/id
  - id is optional
  - GET, POST, UPDATE, DELETE
  - GET returns tags and associated products

![Tag GET](./Assets/get-tag.png?raw=true)

## License

  [MIT License](./LICENSE)

