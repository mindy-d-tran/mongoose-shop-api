# Shop Api
A CRUD API using Mongoose and Express. 
## /api/users
### Create a new user: 
`POST api/users`
#### body (JSON)
```
{
    "name": String (optional),
    "email": String (required, must be unique),
    "password": String (required, length: 8-20),
}
```
### Read all of the users: 
`GET api/users`
### Read a single user: 
`GET api/users/:id` 
- id = user _id
### Update a single user: 
`PUT api/users/:id`
- id = user _id
#### body (JSON)
```
{
    "name": String (optional),
    "email": String (optional),
    "password": String (optional),
}
```
### Delete a single user: 
`DELETE api/user/:id`
- id = user _id
## /api/products
### Create a new product: 
`POST api/products`
#### body (JSON)
```
{
    "product_name": String (required, unique),
    "price": Number (required),
    "img_src": String (required),
}
```
### Read all of the products: 
`GET api/products`
### Read a single product: 
`GET api/products/:id`
- id = product _id
### Update a single product: 
`PUT api/products/:id`
- id = product _id
#### body (JSON)
```
{
    "product_name": String (optional),
    "price": Number (optional),
    "img_src": String (optional),
}
```
### Delete a single product: 
`DELETE api/products/:id`
- id = product _id
## /api/wishLists
Wish lists are automatically created when a user is created. Can not delete a wish list from a user.
### Read all wish lists: 
`GET api/wishLists`
### Read a wish list from a specific user: 
`GET api/wishLists/:id`
- id = wish list _id
### Add an item to a wish list from a specific user: 
`PUT api/wishLists/:id/add`
- id = wish list _id
#### body (JSON)
```
{
    "product_id": String 
}
```

### Remove an item to a wish list from a specific user: 
`PUT api/wishLists/:id/remove`
- id = wish list _id
#### body (JSON)
```
{
    "product_id": String 
}
``````