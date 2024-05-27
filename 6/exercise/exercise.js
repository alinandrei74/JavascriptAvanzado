function printName() {
    const helloName = "Hello John";

function inner() {
    return helloName;
    
}

return inner;

}

const myClosure = printName();

console.log(myClosure());