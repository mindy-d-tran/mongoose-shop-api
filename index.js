import express from "express";
import {conn} from './db/conn.js'; conn();
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res=>{
    res.send('Welcome to the api');
}))

app.listen(PORT,()=>console.log(`server running on prot ${PORT}`));