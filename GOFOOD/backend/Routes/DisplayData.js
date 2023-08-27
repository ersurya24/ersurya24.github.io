const express = require("express");
const router = express.Router();
router.get('/foodData',(req,res)=>{
    try{
        console.log(global.food_items)
        res.status(200).send({ food_items:global.food_items,food_category: global.food_category });
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
  
    }
})
module.exports = router;
