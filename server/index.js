const express = require('express');
const app = express();
const apiBrasil = express();
const cors = require('cors');
const pool = require('./db');
const api = require('./api');


app.use(cors());
app.use(express.json());
apiBrasil.use(express.json());



//   ROUTES   //
app.listen(5000, () =>{
    console.log("app server has start on port 5000");
});
apiBrasil.listen(8001,() =>{
    console.log("apiBrasil server has start on port 8000");
});



// APi Brasil CEP//
api.get('/cep:id'), async (req,req) => {
    try{
        
    }catch{

    }
};




// Banco de dados //
app.get("/cidade/:id"), async (req,req) => {
    try{
        const {id} =req.params;
        const todo = await pool.query("SELECT * FROM cidade Where cidade_id =$1",[id] );
        res.json(cidade.row[0]);
    }catch(err){
        console.error(err.message);
    }
    
};