const { writeFile } = require('fs');

writeFile("arquivo.txt", `Criando arquivo de txt`, err=>{
    if(err) throw err;
})

