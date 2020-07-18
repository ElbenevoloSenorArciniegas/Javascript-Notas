//Para buscar el local storage en el navegador (Chrome):
//- Inspeccionar > Application > Storage 

//En el local storage los datos permanezcan aunque actualice la página
//En el session storage los datos permanecen solo hasta que cierre el navegador

//Agregar al local storage
localStorage.setItem('nombre', 'maria');

//Agregar al session storage
sessionStorage.setItem('nombre', 'pedro');

//Eliminar del local storage
//localStorage.removeItem('nombre');

localStorage.setItem('nombre', 'juan');

//obtener
localStorage.getItem('nombre');

//limpiar el local storage
localStorage.clear();