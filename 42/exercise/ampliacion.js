const user = {
    id:1,
    name: "John",
    age: 25,
};

function enLocal(user){
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
}


function obtenerDesdeLocal() {
    const userJson = localStorage.getItem("user");
    if (userJson) {
        return JSON.parse(userJson);
    }
    return null;
}