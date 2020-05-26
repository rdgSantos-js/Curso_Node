const {spawn} = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

//stdio
ls.stdout.on('data', (data)=>{
    console.log('stdout:', data.toString());
});
ls.stderr.on('data', (data)=>{
    console.log('stdout:', data);
});

ls.on('close', (code)=>{
    console.log('processo em 2 plano finalizado com sucesso:', code);
});