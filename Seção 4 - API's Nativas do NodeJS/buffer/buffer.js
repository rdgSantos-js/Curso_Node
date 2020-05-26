const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso COmpleto de Node JS');

console.log(buf.toString());
console.log(buf.toString('utf16le'));

const buf_string = Buffer.from('carregando string', 'utf-8');

console.log(Buffer.isBuffer(buf_string));
console.log(buf_string.toString('utf-8', 0, 5));
