const number = 15;

const comprobador = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("El número es más grande que 10")
    } else {
        reject("El número es menor que 10")
    }
});

comprobador
    .then((mensaje) => {
        console.log(mensaje);
    })

    .catch((error) => {
        console.error(error);
    })