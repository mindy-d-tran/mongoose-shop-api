import './localEnv.js';
import {conn} from './db/conn.js'; conn();
import express from "express";
import morgan from "morgan";

import usersRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';
// import ordersRoutes from './routes/orders.js';
import wishListRoutes from './routes/wishLists.js';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);
// app.use('/api/orders', ordersRoutes);
app.use('/api/wishLists', wishListRoutes);

app.get('/', (req,res)=>{
    res.send('Welcome to the api');
})

app.listen(PORT,()=>console.log(`server running on port ${PORT}`));