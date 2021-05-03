# ECommerce Backend

## Description

A backend for an eCommerce application. Allows users to manipulate a database of products, categories, and tags. Demonstrates use of the Sequelize package for basic CRUD functionality with a SQL database. 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
  * [Product Endpoints](#/api/products/id)
  * [Category Endpoints](#/api/categories/id)
  * [Tag Endpoints](/api/tags/id)
* [License](./LICENSE)


## Installation

1. Clone this repo. Install dependencies by running `npm i`.

2. Create a local database called `ecommerce_db` by running the `schema.sql` file from the MySQL shell.

3. Exit the database and seed it by running `npm run seed`

4. Create a `.env` file in the root directory with the following variables:

```
DB_NAME=ecommerce_db
DB_USER=[your SQL username]
DB_PW=[your SQL password]
```

## Usage

- Run `npm start` to start the program.

- Submit requests to any of the endpoints by using software such as Insomnia or Postman

## Routes

### /api/products/id
 - id is optional (will return all products by default)
 - GET, POST, UPDATE, DELETE
 - GET returns products and associated categories and tags

Example response from GET:

```
 [
 {
    "id": 2,
    "product_name": "Running Sneakers",
    "price": 90,
    "stock": 25,
    "category_id": 5,
    "categoryId": 5,
    "category": {
      "id": 5,
      "category_name": "Shoes"
    },
    "tags": [
      {
        "id": 6,
        "tag_name": "white",
        "product_tag": {
          "id": 4,
          "product_id": 2,
          "tag_id": 6,
          "productId": 2,
          "tagId": 6
        }
      }
    ]
  },
    {
    "id": 5,
    "product_name": "Cargo Shorts",
    "price": 30,
    "stock": 22,
    "category_id": 2,
    "categoryId": 2,
    "category": {
      "id": 2,
      "category_name": "Shorts"
    },
    "tags": [
      {
        "id": 3,
        "tag_name": "blue",
        "product_tag": {
          "id": 12,
          "product_id": 5,
          "tag_id": 3,
          "productId": 5,
          "tagId": 3
        }
      }
    ]
  },
...
]
```

Example request object for POST, PUT:
  - Not all properties required for PUT

```
{
  "product_name" : "Reusable Rocket Booster,
  "price" : 200.00,
  "stock" : 7,
  "category_id" : 3,
  "tagIds" : [1, 2, 3, 4]
}
```

### /api/categories/id
 - id is optional
 - GET, POST, UPDATE, DELETE
 - GET returns categories and associated products

Example request object:
```
{
  "category_name" : "brass instruments"
}
```

### /api/tags/id
  - id is optional
  - GET, POST, UPDATE, DELETE
  - GET returns tags and associated products

example request object:
```
{
  "tag_name" : "extra spicy"
}
```
