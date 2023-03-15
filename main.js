
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

//ELIMINAR POR UNA Y SUMAR
//USAR SWEAT O MODAL PARA EL CARRITO
//DARLE BUEN ESTILO
//USAR FETCH Y DEMAS
//BOTON DE FINALIZAR
//que se me vea la tabla



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

        Toastify({
            text:"se agrego al carrito",
            duration: 2000, 
            gravity: "top",
            position: "right", 
            style: {
                background: "black",
                
            }
        }).showToast();
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

const btnFinalizar = document.getElementById("finalizar")

const finalizar = () => {
    btnFinalizar.addEventListener("click", () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'          
        )
        
    })
}
const table = document.getElementById(`card-table`)

const tableCard = () => {

    carrito.forEach((catalogo) => {
        
        const tables = document.createElement(`table`)
        tables.innerHTML = `
        <table width="100%">
        <thead>
            <tr>
                <th>#</th>
                <th>item ${catalogo.marca}</th>
                <th>cantidad${catalogo.cantidad}</th>
                <th>accion${catalogo.agregar}</th>
                <th>Total${catalogo.totalPagar}</th>
            </tr>
        </thead>
        </table>
                            `
    
            table.appendChild(tables)
    
        })
    console.log(tableCard)
}


tableCard()

/*<div>
        <table width="100%">
        <thead>
            <tr>
                <th>#</th>
                <th>item ${catalogo.marca}</th>
                <th>cantidad${catalogo.cantidad}</th>
                <th>accion${catalogo.agregar}</th>
                <th>Total${catalogo.totalPagar}</th>
            </tr>
        </thead>
        <tbody id="items"></tbody>
        <tfoot>
            <tr id="footer">
                <th>no hay nada en el carrito</th>
            </tr>
        </tfoot>
        </div>
    </table>*/