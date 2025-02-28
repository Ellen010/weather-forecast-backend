const express= require ("express");
const router= express.Router();
const User=require ("../models/users");
const { checkBody }= require ("../models/checkBody");

router.post("/singup", (req, res) => {
    if (!checkBody(req.body,["name","email", "password"])) {
        res.json({result:false, error:"Name and login must be typed"});
        return;
    }
    User.findOne ({ email:req.body.email }).then (data => {
        if (data===null) {
            const newUser =newUser ({
                name:req.body.name,
                email: req.body.email,
                password:req.body.password,
            });
            newUser.save().then(() =>{
                res.json ({result:true});
            });
        } else {
            res.json({result:false, error:"User is existing"})
        }
    })
});

router.post("/signin", (req, res) => {
    if (!checkBody(req.body,["email", "password"])) {
        res.json({result:false, error:"Name and login must be typed"});
        return;
    }
    User.findOne ({ email:req.body.email, password:req.body.password}).then (data => {
        if (data) {
            res.json({ result:true});
                } else {
                    res.json ({result:false, error:"User doesnt exist."});
                }            
});
});

module.exports=router;