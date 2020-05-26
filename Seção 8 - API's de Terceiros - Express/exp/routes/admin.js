const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.send('Access to ADMIN via GET')
})

router.get('/:id',(req, res)=>{
    res.send('Access to ADMIN with id: ' + req.params.id)
})

router.post('/',(req, res)=>{
    const corpo = `Login: ${req.body.login}\n
    Senha: ${req.body.senha}`
    
    res.send('Access to ADMIN via POST \n' + corpo)
})

router.patch('/:id',(req, res)=>{
    res.send('Access to ADMIN via PATCH')
})

router.put('/:id',(req, res)=>{
    res.send('Access to ADMIN via PUT')
})

router.delete('/:id',(req, res)=>{
    res.send('Access to ADMIN via DELETE')
})

module.exports = router;