# Shop Api
A CRUD API using Mongoose and Express.
## Routes
### /api/users
- Create a new user: `POST api/users`
- Read all of the users: `GET api/users`
- Read a single user: `GET api/users/:id`
- Update a single user: `PUT api/users/:id`
- Delete a single user: `DELETE api/user/:id`
### /api/products
- Create a new product: `POST api/products`
- Read all of the products: `GET api/products`
- Read a single product: `GET api/products/:id`
- Update a single product: `PUT api/products/:id`
- Delete a single product: `DELETE api/products/:id`
### /api/wishLists
Wish lists are automatically created when a user is created. Can not delete a wish list from a user.
- Read all wish lists: `GET api/wishLists`
- Read a wish list from a specific user: `GET api/wishLists/:id`
- Add an item to a wish list from a specific user: `PUT api/wishLists/:id/add`
- Remove an item to a wish list from a specific user: `PUT api/wishLists/:id/remove`