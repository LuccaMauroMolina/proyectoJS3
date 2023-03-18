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

/*const productos = [nikeMetcon, metcon, skeachers, adidasAFA, nike, nikeFit, reebok, undergroundZ, undergroundR];
*/
const productos = []
const json = "../json/productos.json";

fetch(json)
    .then(response => response.json())
    .then(data => {
        productos.push(data)
    })

console.log(productos)

//MOSTRAR CON DOM


const Catalogo = document.getElementById("catalogos");

const Carrito = document.getElementById("carrito")



let carrito = []

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

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
        verCarrito()
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

    localStorage.setItem("carrito", JSON.stringify(carrito));
})

const table = document.getElementById(`card-table`)

const verCarrito = () => {
    
    table.innerHTML = "";

    carrito.forEach((catalogo) => {
        const tables = document.createElement(`table`);
        tables.innerHTML = `
        <table width="100%">
        <thead>
            <tr>
                <th><img src="${catalogo.img}"></th>
                <th>${catalogo.marca}</th>
                <th>$ ${catalogo.precio}</th>
                <th><button id='aumentar${catalogo.id}' onclick="carrito" value="aumentar">+</button></th>
                <th><button id='disminuir${catalogo.id}' onclick="carrito" value="disminuir">-</button></th> 
                <th><p id='contador${catalogo.id}' value="0"></p></th>
                <th class="cantidad"><input type='text' id="cantidad" value="${catalogo.cantidad}"></th>
                <th><i class='bx bx-x-circle' id='eliminar${catalogo.id}'></i></th>
            </tr>
        </thead>
        </table>
        <div>
            <button id="finalizar">finalizar compra</button>
        </div>
                            `                
                            const finalizar = document.getElementById("finalizar")


    finalizar.addEventListener("click", () => {
        Swal.fire({
            title: "se confirmo todos los productos",
            icon: "success"
        })
    })

    
            table.appendChild(tables)

            const aumentar = document.getElementById(`aumentar${catalogo.id}`)
        aumentar.addEventListener("click", () => {
            aumento(catalogo.id);
        })

        const disminuir = document.getElementById(`disminuir${catalogo.id}`)
        disminuir.addEventListener("click", () => {
            disminuye(catalogo.id);
        })

        const eliminar = document.getElementById(`eliminar${catalogo.id}`)
        eliminar.addEventListener("click", () => {
            eliminar(catalogo.id);
        })
        totalPagar();
})

}


const aumento = (id) => {
    const productos = carrito.find((catalogo) => catalogo.id === id);
    productos.cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    verCarrito();
}

const disminuye = (id) => {
    const productos = carrito.find((catalogo) => catalogo.id === id);
    productos.cantidad--;
    if (productos.cantidad === 0) {
        eliminar(id);
        productos.cantidad = 0;
    } else {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    verCarrito();


}

const eliminar = (id) => {
    const productos = carrito.find(catalogo => catalogo.id === id);
    const indice = carrito.indexOf(productos);
    carrito.splice(indice, 1);
    productos.cantidad = 1;
    verCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const pagar = document.getElementById("total")

const totalPagar = () => {
    let total = 0; 
    carrito.forEach(catalogo => {
        total += catalogo.precio * catalogo.cantidad; 
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




const finalizar = document.getElementById("finalizar")


    finalizar.addEventListener("click", () => {
        Swal.fire({
            title: "se confirmo todos los productos",
            icon: "success"
        })
    })