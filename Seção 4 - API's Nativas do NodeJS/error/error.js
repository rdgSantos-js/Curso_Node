

function execute(){
    executeTo();
}

function executeTo(){
    throw new Error('erroooooooou');
}

function init(){
    try {
        execute()
    } catch (error) {
        console.log('temos um problema', error.message);
    }
}
init();
console.log('depois do erro');
