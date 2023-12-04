let carrito = [];

const agregarFormProducto = document.getElementById('formAgregarProducto');
const agregarInputProducto = document.getElementById('inputAgregarProducto');
const agregarBtnProducto = document.getElementById('buttonAgregarProducto');
const listaProductos = document.getElementById('listaProductos');

let inputSearch = document.getElementById('inputBuscarProducto');
let buscado = document.getElementById('buscaProductos');

let filterInput = document.getElementById('inputFiltrarProducto');



// 1.- AGREGAR PRODUCTOS
agregarBtnProducto.addEventListener('click', (event) => {
    event.preventDefault();                     // Evita que el form se reenvie constantemente | suele usarse cuando se utiliza un button con type = 'submit'
    let producto = agregarInputProducto.value.toLowerCase().trim();  // Capturo el valor ingresado en el input
    carrito.push(producto);
    
    console.log(carrito,"<<<---- Carrito");

    listarProductos();
    agregarFormProducto.reset();                // Limpia por completo el form

})

// 2.- LISTAR PRODUCTOS
function listarProductos() {
    listaProductos.innerHTML = ''; // Vaciamos la lista, previo a cada actualizacion

    if(carrito.length !== 0){
        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            listaProductos.appendChild(li).textContent = `${index + 1}- ${producto}`;
        });
    } else {
        listaProductos.textContent = 'El carrito está vacío.';    
    }
}

// 3.- BUSCAR PRODUCTO
function buscarProducto () {

    let item = inputSearch.value.toLowerCase().trim();
    let indice = buscarEnCarrito(item);

    if(indice !== -1){
        buscado.textContent = `${indice + 1}- ${item}`;
    }else {
        buscado.textContent = `El producto ${item} no se encuentra en el carrito.`;
    }
}

function buscarEnCarrito (producto) {
    console.log(producto,"<-Producto a buscar");
    return carrito.indexOf(producto);
}


// 4.- FILTRAR PRODUCTOS
function filtrarProductos(){
    const filtro = filterInput.value.toLowerCase().trim(); 
    const filtrado = filtroProducto(filtro);

    console.log(filtrado);
}

function filtroProducto(filtro){
    return carrito.filter(producto => producto.includes(filtro));
}