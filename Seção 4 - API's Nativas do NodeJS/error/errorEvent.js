const {EventEmitter} = require('events');

const emitter = new EventEmitter()

const validaObjeto = (a) => {
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('tipo invalido'));
    }else{
    console.log('objeto valido')
    }
}

emitter.on('error', (err)=>{
    console.log('Evento:' + err.message);
});

let dados = { name:'Hcode', course: 'Node' }

validaObjeto(dados);
//validaObjeto('123');