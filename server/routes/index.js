const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/',async (req,res,next)=>{
   try{
       let results =  await db.all();
       res.json(results);
   }catch(e){
       console.log(e);
       res.sendStatus(500);
   }
});

router.post('/', async (req,res,next)=>{

    console.log(req.body)
        try{
            let results = await db.insert(req.body);
            res.json(results);

        }catch(e){
            res.sendStatus(500);
        }
});

router.post('/login', async (req,res,next)=>{

    console.log(req.body)
        try{
            let results = await db.login(req.body);
            res.json(results);

        }catch(e){
            res.sendStatus(500);
        }
});

module.exports = router;