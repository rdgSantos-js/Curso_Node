const fs = require ("fs");

fs.readFile("file.txt", (err, data)=>{
    if(err) throw err;
    console.log(data);
    fs.unlinkSync("file.txt", (err)=>{
        if(err) throw err;
        console.log("excluido")
    });
});
