const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const content = 'criando um arquivo usando promisify';

writeFile('utilArquivo.txt', content)
.then(()=>{
    console.log('arquivo criado com sucesso')
}).catch(()=>{
    console.log('Deu erro', err)
})