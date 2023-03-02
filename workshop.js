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



//BOTON DE FINALIZAR




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


const Catalogo = document.getElementById("catalogos");

const Carrito = document.getElementById("carrito")



let carrito = []

/*if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}*/

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

        Catalogo.appendChild(tarjeta);

        const btn = document.getElementById(`btn${catalogo.id}`);

        btn.addEventListener(`click`, () => {
            agregar(catalogo.id)
        })

        })
            
    }


mostrar();

const agregar = (id) => {
        const carritos = productos.find ((catalogo) => catalogo.id === id)
        //verCarrito()
        carrito.push(carritos);
        console.log(carritos);

        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

const vistaDeCarrito = document.getElementById("verCarrito");

vistaDeCarrito.addEventListener(`click`, () => {
    verCarrito()
})


const verCarrito = () =>{
    
    Carrito.innerHTML = "";

    carrito.forEach((catalogo) => {
        const tarjeta = document.createElement(`div`);
        tarjeta.innerHTML = `
                                <div>
                                    <img src="${catalogo.img}">
                                    <p>${catalogo.marca}</p>
                                    <p>${catalogo.precio}</p>
                                    <button type"submit" id="eliminar${catalogo.id}">Eliminar</button>
                                    <button id="finalizar${catalogo.id}">finalizar compra</button>
                                </div>
                            `

        Carrito.appendChild(tarjeta)

        const btn = document.getElementById(`eliminar${catalogo.id}`)

            btn.addEventListener (`click`, () => {
            eliminar(catalogo.id);
        })
})
    //calcularTotal();
    totalPagar()
}


const eliminar = (id) => {
    const producto = carrito.find(catalogo => catalogo.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    verCarrito();
}


/*const eliminar = (id) => {
    const carrito = productos.find(catalogo => catalogo.id === id)
    const indice = productos.indexOf(carrito)
    productos.splice(indice, 1);
    verCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito))
}*/




const pagar = document.getElementById("total")

const totalPagar = () => {
    let total = 0; 
    carrito.forEach(catalogo => {
        total += catalogo.precio * catalogo.cantidad;
        //+= es igual a poner totalComra = totalCompra + producto.precio * producto.cantidad 
    })
    pagar.innerHTML = `$${total}`;
}



const Vaciar = document.getElementById("vaciar")

Vaciar.addEventListener(`click`, () => {
    vaciarTodo()
})

const vaciarTodo = () => {
    carrito = [];
    verCarrito()

    localStorage.clear()
}



const Finalizar = document.querySelector(".finalizar")




/*const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(catalogo => {
        totalCompra += catalogo.precio * catalogo.cantidad;
        //+= es igual a poner totalComra = totalCompra + producto.precio * producto.cantidad 
    })
    total.innerHTML = `Total: $${totalCompra}`;
}*/

    


/*const pagar = document.getElementById("total")

const totalPagar = () => {
    let total = 0; 
    carrito.forEach(catalogo => {
        total += catalogo.precio * catalogo.cantidad;
        //+= es igual a poner totalComra = totalCompra + producto.precio * producto.cantidad 
    })
    pagar.innerHTML = `Total: $${total}`;
}*/

/*const verCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((catalogo) =>  {
    const tarjeta = document.createElement(`div`)
    tarjeta.innerHTML = `
    <div class ="tarjeta">
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


    })
}*/


/*contenedorCarrito.addEventListener ("click", () => {
    verCarrito();
})*/



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



        const boton = document.getElementById(`eliminar${catalogo.id}`);
        boton.addEventListener("click", () => {
            eliminar(catalogo.id);
        })
    })

}

const eliminar = () =>{
    carrito.forEach((catalogo) => {
        const eliminar = document.createElement(`div`)
        eliminar.innerHTML = `<div>
                                <p>${catalogo.marca}</p>
                                <span>${catalogo.precio}</span>
                                <button onclick="eliminar(${catalogo.id})" class="eliminar"><img class="img"></button>
                            </div>
                            `

        verCarrito()
        

            contenedorCarrito.appendChild(eliminar)


    })
    }
*/

//eliminar

//calcular total




//FUNCIONES CON FLECHA MOSTRAR, AGREGAR, ELIMINAR, CALCULARE TOTAL