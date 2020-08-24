//ejemplo consumir api usando Async Await
// se usó https://jsonplaceholder.typicode.com/

async function leer_todos() {

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //promise cuando la respuesta esté hecha
    const datos = await respuesta.json();
    return datos;
}
console.log(leer_todos()); // imprime que es una promesa y no mostrará el result

//para imprimir el result
leer_todos()
    .then(usuarios => console.log(usuarios)); //usuarios es el return de la funcion en caso normal