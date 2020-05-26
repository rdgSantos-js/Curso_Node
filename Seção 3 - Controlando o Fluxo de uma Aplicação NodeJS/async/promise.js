function soma(x){
    return new Promise((resolve, reject)=>{    
    setTimeout(e=>{
        resolve(x + 5000);
    },3000);
    });
}

soma(4124)
.then(resultado=>{
    console.log('Resolvido! ', resultado);
})
.catch(err=>{
    console.log(err);
});

