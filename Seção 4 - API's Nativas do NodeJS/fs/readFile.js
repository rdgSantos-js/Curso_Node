const fs = require('fs');

// Não bloqueante
/* fs.readFile('text.txt', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
}); */

// Bloaqueante
const text = fs.readFileSync("text.txt");
console.log('texto: ', text.toString());