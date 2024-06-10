const user = {
  id: 1,
  name: "John",
  age: 25,
};


function enLocal(user) {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

enLocal(user)


// Hacer lo mismo con el mismo de variables, convertir el js al json, consumirla del local storage para randerizarla en html

