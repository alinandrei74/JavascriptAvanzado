function repeatHello(callback) {
    setInterval(callback, 1000);
}


const sayHello = () => {
    console.log("Hello");
    /* El código es más compacto*/ 
};


repeatHello(sayHello)