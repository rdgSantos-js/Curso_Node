function soma(x, callback){
    return setTimeout(e=>{
        return callback(null, x + 5000);
    },3000) 
}

function resolveSoma(err, result){
    if(err) throw err;
    console.log(result);
}

soma(200, resolveSoma);
