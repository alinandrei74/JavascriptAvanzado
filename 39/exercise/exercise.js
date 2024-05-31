const isLogged = true; 

// Primera promesa
function firstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            setTimeout(() => {
                resolve(Math.random());
            }, 1000);
        } else {
            reject(new Error('User is not logged in'));
        }
    });
}

// Segunda promesa
function secondPromise(randomNumber) {
    return new Promise((resolve, reject) => {
        if (randomNumber > 0.5) {
            
            setTimeout(() => {
                resolve({ name: 'John', age: 24 });
            }, 1000);
        } else {
            reject(new Error('Number is less than or equal to 0.5'));
        }
    });
}

// Encadenamiento de promesas
firstPromise(isLogged)
    .then(randomNumber => {
        console.log('Random number:', randomNumber);
        return secondPromise(randomNumber);
    })
    .then(finalObject => {
        console.log('Final object:', finalObject);
    })
    .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Promise chain completed');
    });

