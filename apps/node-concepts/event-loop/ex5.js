

function bar(){
    console.log('bar');
    return setTimeout(bar, 0);
}

bar();