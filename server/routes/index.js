const express = require('express');
const router = express.Router();
const company = require('../Company')


router.get('/',async (req,res,next)=>{
   try{
       
       res.json(company(req.body,'STORE'));
   }catch(e){
       console.log(e);
       res.sendStatus(500);
   }
});

router.post('/', async (req,res,next)=>{

    console.log(req.body[0])
        try{    
           res.json(company(req.body,'ADD'))
       

        }catch(e){
            res.sendStatus(500);
        }
});

router.get('/:id', async (req,res,next)=>{

    console.log(req)
        try{    
           res.json(company({},'GETBYID',req.params.id))
       

        }catch(e){
            res.sendStatus(500);
        }
});


router.delete('/:id', async (req,res,next)=>{

    console.log(req)
        try{    
           res.json(company({},'DEL',req.params.id))
       

        }catch(e){
            res.sendStatus(500);
        }
});

router.get('/:id', async (req,res,next)=>{

    console.log(req)
        try{    
           res.json(company({},'GETBYID',req.params.id))
       

        }catch(e){
            res.sendStatus(500);
        }
});

router.post('/office', async (req,res,next)=>{

    console.log(req.body)
        try{
           res.json(company(req.body,'ADD_OFFICE'))

        }catch(e){
            res.sendStatus(500);
        }
});

router.delete('/office/:id', async (req,res,next)=>{

        try{
            res.json(company(req.body,'DEL_OFFICE',req.params.id))

        }catch(e){
            res.sendStatus(500);
        }
});

module.exports = router;