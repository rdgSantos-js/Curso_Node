const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qual a melhor? ', (ans)=>{
    console.log('a melhor é:', ans);
    switch(ans){
        case "command":
            console.log('ligou drone');
        break;
        case "takeoff":
            console.log('decolando drone')
    }
    rl.close();
});