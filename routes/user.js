const { query } = require('express');
const express = require('express');
const { restoreDefaultPrompts } = require('inquirer');
const connection = require('../connection');
const router = express.Router();

router.post('/signup', (req,res)=>{
    let user = req.body;
    query = 'select email,password,role,status from user where email=?'
    connection.query(query,[user.email],(err,result) =>
    {if(!err){
        if(results.length <=0){
            query = "insert into user(name,contactNumber,email,password,status,role) values(?,?,?,?, 'false')"
        }
        else{
            return res.status(400).json({message: 'Eamil Already Exists. '})
        }
    }
    else {
        return res.status(500).json(err);
    }})
    
})
module.exports = router;
