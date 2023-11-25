// Clase de Práctica

// 1.- Crear un repo en github.
// 2.- Crear la rama dev.
// 3.- Vamos a tener solo un archivo index.html y un archivo script.js
// 4.- Crear una rama por cada integrante del equipo.
// 5.- Mergeamos la branch a dev.

// Trabajo en equipo
// -> Carrito de productos
// Carrito de compras con Array:
//      *Crear una aplicación de carrito de compras donde se ingresen productos como elementos en un array.
//      *Las tareas que debe hacer son las siguientes:
//          1.) Agregar productos al carrito.
//          2.) Listar los productos del carrito.
//          3.) Buscar un producto en el carrito.
//          4.) Filtrar productos que coincidan con una palabra, parte de ella o una letra.
//          5.) Eliminar producto del carrito.



// 1-> Agregar productos al carrito.
let agregarProductos = carrito => {
    let producto;

    do{
        producto = prompt('Ingrese el producto que desea agregar al carrito:\n*Si ya finalizó, presione la tecla \'Enter\'');
        
        if(producto !== '' && producto !== null){
            carrito.push(producto);
        }

    }while(producto !== '' && producto !== null)

}


// 2-> Listar los productos del carrito.
let listarProductos = carrito => {
    console.log("\n\t>>>>>>============////// PRODUCTOS DEL CARRITO //////============<<<<<<");
    for(let i=0; i<carrito.length; i++){
        console.log(`\t${i+1}.- ${carrito[i]}`);
    }
}


// 3-> Buscar un producto en el carrito. ==> Supongo que debe devolver la primera ocurrencia.
let buscarProducto = carrito => {
    let producto = prompt("Ingrese el dato que desea buscar:").replace(/\s/g,'').split('').join('').toLowerCase();
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].toLowerCase() === producto){
            console.log(`\tSe encontró el producto ${i+1}.- ${carrito[i]}`);
            return
        }
    }
    alert("\tNO SE ENCONTRO LA OCURRENCIA");
}


// 4-> Filtrar productos que coincidan con una palabra, parte de ella o una letra.
let filtrarProducto = carrito => {
    let producto = prompt("Ingrese el dato que desea filtrar:").replace(/\s/g,'').split('').join('').toLowerCase();
    let aux=0;
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].toLowerCase().includes(producto)){
            console.log(`\tProducto ${i+1}.- ${carrito[i]}`);
            aux++;
        }
    }
    if(aux===0) alert("\tNO SE ENCONTRO LA OCURRENCIA");
}


// 5-> Eliminar producto del carrito. ==> Se considera que debe ser la ocurrencia exacta, y se elimina solo 1 producto.
let eliminarProducto = carrito => {
    let producto = prompt("Ingrese el dato que desea eliminar:").replace(/\s/g,'').split('').join('').toLowerCase();
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].toLowerCase() === producto){
            return carrito.splice(i,1);
        }
    }
    alert("\tNO SE ENCONTRO LA OCURRENCIA");
}


let productos = ["manzana", "pera", "magoya"];

agregarProductos(productos);
listarProductos(productos);
buscarProducto(productos);
filtrarProducto(productos);
eliminarProducto(productos);

console.log(productos);