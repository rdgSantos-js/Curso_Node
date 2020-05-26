import {EventEmitter} from 'events';

class Evento extends EventEmitter {}
const meuEvento = new Evento();

meuEvento.on('seguranca', (x,y)=>{
    console.log('executando o evento seguranca: ', x, y);
});

meuEvento.emit('seguranca', 'userAdmin', 'alterou salário');


meuEvento.on('encerrar', (data)=>{
    console.log('Assinante: ', data)
});

meuEvento.emit('encerrar', 'Encerrando a execução de importação de dados');