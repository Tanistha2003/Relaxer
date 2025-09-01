const express=require('express')
const router=express.Router()
const demo = require('../controllers/demo');

const authenticate=require('../services/auth')
const cron=require('node-cron')

router.post('/login',(req,res,next)=>{
    console.log("Demo")
    demo.save(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/weeklyactivity',authenticate.authenticate,(req,res,next)=>{
    demo.weekly(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>
    {
        res.status(500).send(err)
    })
})

router.get('/monthlyactivity',authenticate.authenticate,(req,res,next)=>{
    demo.monthly(req).then(resp=>{
        res.send(resp)
    }).catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/badges',authenticate.authenticate,(req,res,next)=>{
    demo.badges(req).then(resp=>{
        res.send(resp)
    }).catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/getinfo',authenticate.authenticate,(req,res,next)=>{
    demo.getinfo(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/leaderboard',authenticate.authenticate,(req,res,next)=>{
    demo.leaderboard(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.post('/editinfo',authenticate.authenticate,(req,res,next)=>{
    demo.editInfo(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.post('/addwater',authenticate.authenticate,(req,res,next)=>{
    demo.addWater(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.post('/addexercise',authenticate.authenticate,(req,res,next)=>{
    demo.addExercise(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.post('/addmeditation',authenticate.authenticate,(req,res,next)=>{
    demo.addMeditation(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.post('/addmood',authenticate.authenticate,(req,res,next)=>{
    demo.addMood(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

module.exports=router