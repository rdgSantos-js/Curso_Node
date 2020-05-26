require('./subdir/sub');
console.log('-----------------------------')
console.log(`Nome :`, __filename);
console.log(`Diretório :`, __dirname);
console.log(`Paramêtros de execução :`, process.argv);
console.log(`Ambiente da plataforma :`, process.platform);
// console.log(`Ambiente do Servidor :`, process.env);
console.log(`Idioma :`, process.env.LANG);
console.log('Nome do Computador: ', process.env.COMPUTERNAME);
console.log('Diretório: ', process.cwd());
