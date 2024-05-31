import fetch from 'node-fetch';

async function fetchFuncion() {
    try {
        const pagina = await fetch("https://jsonplaceholder.typicode.com/todos");
    
        if (!pagina.ok) {
            throw new Error("Error al recuperar los datos");
        }

        const todos = await pagina.json();
        return todos;
    } catch (error) {
        console.error("Hubo un problema en la solicitud", error);
    }
}

fetchFuncion().then(todos => {
    console.log(todos);
});
