
function repeatHello(callback) {
    /*Primer intervalo metido en una constante*/
    
    const intervalo = setInterval(callback, 1000);


    setTimeout(() => {
        clearInterval(intervalo);
    }, 5000);
}


const sayHello = () => {
    console.log("Hello");
    /* El código es más compacto*/ 
};


repeatHello(sayHello)