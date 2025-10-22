

function logA() {
    console.log('A');
}
function logC(){
    console.log('C');
}

function logDB(){
    setImmediate(() => {
        console.log('D');
     });
     process.nextTick(() => {
        console.log('B');
     });
     Promise.resolve().then(() => {
        console.log('B2');
     });
}


setTimeout(logA, 0);


setTimeout(logDB, 0);

setTimeout(logC, 0);

