//1) Mostrar en el HTML de formá dinámica el stock de productos. 
//2) Agregar productos al carrito. 
//3) Evitar la carga de productos repetidos en el carrito. 
//4) Mostrar el carrito en el HTML de forma dinámica. 
//5) Eliminar productos del carrito. 
//6) Calcular el total de la compra. 
//7) Vaciar carrito. 
//8) Guardar el carrito en el localStorage. 

//Dos puntos importantes para el TP Final (que no hacemos hoy!!). 
//Boton de finalizar compra!!!
//Cambiar las cantidades desde el carrito.

/*let LMM = alert("Hola que tal, que se les ofrece, tenemos toda ropa deportiva de zapatillas, pantalon y remeras");
*/
class catalogo{
    constructor (id, catalogo, marca, img, precio){
        this.id = id;
        this.catalogo = catalogo;
        this.marca = marca;
        this.img = img;
        this.precio = precio;
        this.cantidad = 1
    }
}

const nikeMetcon = new catalogo (1, "zapatilla", "nike metcon", "img/zapatilla--mujer--nikeMetcon.jpg", 25000 );
const metcon = new catalogo (2, "zapatilla", "metcon", "img/zapatilla--nike-metcon3.jpg", 19999 );
const skeachers = new catalogo (3, "zapatilla", "skeachers","img/zapatilla--skeachers--mujer.jpg", 8500 );
const adidasAFA = new catalogo (4, "remeras", "adidas", "img/remera--adidasAFA.jpg", 7000 );
const nike = new catalogo (5, "pantalon", "nike", "img/pantalon--nike.jpg", 14999 );
const nikeFit = new catalogo (6, "pantalon", "nike dri-fit", "img/pantalon--nikefit.jpg", 24500 );
const reebok = new catalogo (7, "remeras", "reebok", "img/remera--reebok.jpg", 9000 );
const undergroundZ = new catalogo (8, "zapatilla", "underground", "img/zapatilla--underground--hombre.jpg", 34999 );
const undergroundR = new catalogo (9, "remeras", "underground" , "img/remera--underground.jpg", 11250 );

const productos = [nikeMetcon, metcon, skeachers, adidasAFA, nike, nikeFit, reebok, undergroundZ, undergroundR];

console.log(productos)

//MOSTRAR CON DOM

let carrito = []

const contenedorCatalogo = document.getElementById("catalogos");

const contenedorCarrito = document.getElementById("carrito")


const mostrar = () => {
    productos.forEach(catalogo => {
        const tarjeta = document.createElement(`div`)
        tarjeta.innerHTML = `
        <div class="tarjeta">
        <div class="mod">
        <img src="${catalogo.img}" alt="">
        <div class="fondo">
        <span class="tarjeta">${catalogo.marca}</span>
        <span class="precio">${catalogo.precio}</span>
        <button type="submit" id="btn${catalogo.id}">agregar al carrito</button>
        </div>
        </div>
        </div>
        `

        contenedorCatalogo.appendChild(tarjeta);

        const btn = document.getElementById(`btn${catalogo.id}`);

        btn.addEventListener(`click`, () => {
            agregar(catalogo.id)
        })

        })
            
    }


mostrar();

contenedorCarrito.addEventListener ("click", () => {
    verCarrito();
})



const verCarrito = () => {
    carrito.forEach(catalogo => {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
                        <div class ="card">
                            <img src = "${catalogo.img}" class = "card-img-top imgProductos" alt = "${catalogo.marca}">
                            <div>
                                <h5> ${catalogo.nombre} </h5>
                                <p> ${catalogo.precio} </p>
                                <p> ${catalogo.cantidad} </p>
                                <button class = "btn colorBoton" id="eliminar${catalogo.id}" > Eliminar </button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(tarjeta);

        //Eliminamos productos desde el carrito: 
        const boton = document.getElementById(`eliminar${catalogo.id}`);
        boton.addEventListener("click", () => {
            eliminar(catalogo.id);
        })
    })

}

const agregar = (id) =>{
    const carritos = productos.find ((productos) => productos.id === id);
    eliminar()
    carrito.push(carritos);
    console.log(carritos);
}


const eliminar = () =>{
    carrito.forEach((catalogo) => {
        const eliminar =document.createElement(`div`)
        eliminar.innerHTML = `<div>
                                <p>${catalogo.marca}</p>
                                <span>${catalogo.precio}</span>
                                <button onclick="eliminar(${catalogo.id})" class="eliminar"><img class="carrito" src="img/anadir-a-la-cesta.png"></button>
        
                            </div>
                            `


            contenedorCarrito.appendChild(eliminar)
    })
}


//eliminar

//calcular total


/*const verCarrito = () => {
    carrito.forEach(catalogo => {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
                        <div class ="card">
                            <img src = "${catalogo.img}" class = "card-img-top imgProductos" alt = "${catalogo.marca}">
                            <div>
                                <h5> ${catalogo.nombre} </h5>
                                <p> ${catalogo.precio} </p>
                                <p> ${catalogo.cantidad} </p>
                                <button class = "btn colorBoton" id="eliminar${catalogo.id}" > Eliminar </button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(tarjeta);

        //Eliminamos productos desde el carrito: 
        const boton = document.getElementById(`eliminar${catalogo.id}`);
        boton.addEventListener("click", () => {
            eliminar(catalogo.id);
        })
    })

}*/

//FUNCIONES CON FLECHA MOSTRAR, AGREGAR, ELIMINAR, CALCULARE TOTAL