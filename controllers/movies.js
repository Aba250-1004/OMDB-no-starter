require('dotenv').config()
const express = require('express')
const router = express.Router();
const fs = require('fs')

router.get('/',(request,res)=>{
    res.render('./movies/index.ejs')
})


module.exports = router;