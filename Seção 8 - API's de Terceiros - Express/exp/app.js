const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');

app.use('/static',express.static('public'))

app.use(cookieParser())
app.use(express.json())



app.use((req, res, next)=>{
    console.log('executando middleware em nível de aplicação')
    return next();
})


app.get('/setcookie',(req, res)=>{
    res.cookie('user', 'Rodrigu1n', {maxAge:900000, httpOnly: true})
    return res.send('cookie gravado');
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user'];
    if(user){
        res.send(user);
    }
})

app.get('/',(req, res)=>{
    res.send('Hello World')
})

app.use('/admin', adminRouter)
app.use('/users', usersRouter)

app.get('*',(req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Temos um Problema'))
    })
})

app.use((err, req, res, nex)=>{
    console.log('erro')
    res.status(500).json({message: err.message})
})

app.listen(3000, ()=>{
    console.log('server running')
})