
const user = {
  id: 1,
  name: "John",
  age: 25,
};


function enLocal(user) {
  const archivoJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

function delLocal() {
  const archivoJSON = localStorage.getItem("user");

  if (archivoJSON) {
    const user = JSON.parse(archivoJSON);
    console.log(user);
  } else {
    console.log("No hay nanai en el local")
  }
}

enLocal(user)

delLocal();