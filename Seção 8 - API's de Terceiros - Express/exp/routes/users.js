const express = require('express')
const router = express.Router()

function logReq(req, res, next){
    console.log('middleware p/ rota users')
    return next()
}

router.get('/',logReq, (req, res)=>{
    res.send('Listando usuários')
})

router.get('/:id',(req, res)=>{
    res.send('Listando usuário: ' + req.params.id)
})

module.exports = router