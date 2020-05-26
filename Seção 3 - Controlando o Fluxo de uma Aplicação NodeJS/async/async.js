function sum(x){
    return new Promise((resolve, reject)=>{
        if(Number(x === NaN) || Number (x) == undefined || typeof x !== 'number'){
            reject('Eroooooou')
        }   
        setTimeout(e=>{
            resolve(x + 5000);
        },3000);
    });
}

async function main(){
    try{
        const resultado = await sum('#');
        console.log('resultado com async await', resultado);
    }catch(err){
        console.log('temos problemas', err);
        console.log(process.env.USERNAME);
    }
}


main();