function sum(...numeros) {
    /*return num1 + num2 + num3 + num4 + num5;*/
    return numeros.reduce((uno, dos) => uno + dos, 0);


}



console.log(sum(1, 2, 3, 4, 5));