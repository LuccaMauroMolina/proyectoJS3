/*let LMM = alert("Hola que tal, que se les ofrece, tenemos toda ropa deportiva de zapatillas, pantalon y remeras");



let remeras = "nike, adidas, puma";

let pantalon = "reebok, adidas, underground";

let zapatillas = "running, topper, nike";



// cree una funcion para poder comprar, la cual tiene el bucle

function comprar(){

    let catalogo = prompt("elegir los catalogos en remeras, pantalon y zapatillas");

    if(catalogo == "remeras"){

        catalogoRemeras()

    }else if(catalogo == "pantalon"){

         catalogoPantalones()

    }else if(catalogo == "zapatillas"){

          catalogoZapatillas()

    }else{

        alert("vuelva a ingresar");

    }

    let opcion;

    while( opcion != "ESC"){

         opcion = prompt("si quiere volver a seleccionar pulse si o no")

         // si opcion es igual al string si  vuelve a ejecutarse la funcion

         if(opcion == "si"){

            comprar()

         }else{

            //en caso de que sea no u otra cosa, da el alert y sale ya que opcion es igual a "ESC"

            alert("muchas gracias")

            opcion = "ESC"

         }

   }

  

}

comprar()

// en este caso hice que cada item tenga su catalogo, pero como vimos con los array y sus metodos  se puede ahorrar mucho esto

function catalogoRemeras(){

   let pedido = prompt("marcas que tenemos son nike, adidas y puma, selecciona alguna de esas");

    switch (pedido) {

        case "nike":

            alert("de nike tenemos del talle S al L");

        break;

        case "adidas":

               alert("de adidas tenemos del talle M al XL");

        break;

        case "puma":

             alert("tenemos todos los talles");

        break;

        default:

             alert("no esta disponible");  

        break;

    } //remeras = (catalogos);

  }



  function catalogoPantalones(){

    let pedido = prompt("marcas tenemos underground, adidas y reebok");

    switch (pedido){

        case "adidas":

             alert("tenemos del talle S al L");

        break;   

        case "reebok":

            alert("tenemos del M al XXL");

        break;

        case "underground":

            alert("todo disponible de underground");

        break;

        default:

         alert("no esta disponible");  

        break;  

   }

  }

  

function catalogoZapatillas(){

    let pedido = prompt("nos quedan de running, topper y nike, seleccione una");



    switch (pedido){

     case "running":

          alert("tenemos del calzado 35 al 40");

     break;   

     case "nike":

         alert("del calzado 38 al 44");

     break;

     case "topper":

         alert("del calzado 35 al 42");

     break;  

    }

    

}*/



/*let remeras = "nike, adidas, puma";

let pantalon = "reebok, adidas, underground";

let zapatillas = "running, topper, nike";*/


let LMM = alert("Hola que tal, que se les ofrece, tenemos toda ropa deportiva de zapatillas, pantalon y remeras");

class catalogos{
    constructor (catalogo, marca){
        this.catalogo = catalogo
        this.marca = marca
    }
}

const remeras = new catalogos ("remera", "nike, adidas, puma")
const pantalones = new catalogos ("pantalon", "reebok, adidas, underground")
const zapatillas = new catalogos ("zapatilla", "running, topper, nike")

console.log(catalogos)
console.log(remeras)
console.log(pantalones)
console.log(zapatillas)

const productos = [remeras, pantalones, zapatillas]

/*class objectRemeras {
    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;

        sumaIva({
            this: precio = precio * 1.21
        });

    }
}*/

class objectRemeras{
constructor (marca, precio) {
        this.marca = marca;
        this.precio = precio;

        sumaIva() ;{
            this.precio = this.precio * 1.21;
        }

    }

}

const arrayRemeras = [{marca:"nike", precio:8000},
                      {marca:"adidas", precio:9999},
                      {marca:"puma", precio:6000},
                      {marca:"nike", precio:8500},
                      {marca:"puma", precio:4999},
                      {marca:"puma", precio:12750}]




console.log(objectRemeras)
console.log(arrayRemeras)



let catalogo = prompt("si quieres el catalogo remera pulse remeras, pantalones, zapatillas")

if(catalogo == "remeras"){
     Remeras()
}else if(catalogo == "pantalones"){
     Pantalon()
}else if(catalogo == "zapatillas"){
     Zapatilla()
}else{
    alert("vuelva a ingresar");
}



function Remeras(){

    

    let remeras = prompt("elija nike, adidas, puma")

    const arrayVacio = [] 

    switch(remeras){
         case "nike":
                 alert("se agrega nike");
         break;
         case "adidas":
               alert("se agrega adidas");
         break;
         case "puma":
               alert("se agrega puma");
         break;
         default:
              alert("volve a ingresar");
              Remeras()
        break;
    }


    const carritoArray = arrayVacio.push(remeras)
    console.log(carritoArray);
    console.log(remeras);


    const eliminar = arrayVacio.shift(remeras);
    console.log(eliminar);
    console.log(remeras)
}

class opRemeras{
    constructor(iva){
         this.iva = iva * 1.21 
    }
}

class objectPantalones{
    constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    }
      sumaIva(){
       this.precio = precio * 1.21
      }
}

const arrayPantalones = [{nombre:"reebok",precio: 6800},
                         {nombre:"adidas",precio: 11000},
                         {nombre:"underground",precio: 14999},
                         {nombre:"reebok",precio: 8500},
                         {nombre:"underground",precio: 20000},
                         {nombre:"adidas",precio: 135000}]


console.log(arrayPantalones)

function Pantalon(){


    let pantalon = prompt("elija reebok, adidas, underground")

    const arrayVacio = []

    switch(pantalon){
        case "reebok":
              alert("se agrego reebok");
        break;
        case "adidas":
              alert("se agrego adidas");
        break;
        case "underground":
              alert("se agrego underground");
        break;
        default:
              alert("volve a ingresar");
              Pantalon()
        break;
    }
    const carritoArray = arrayVacio.push(pantalon)
    console.log(carritoArray);
    console.log(pantalon);
}

class objectZapatilla{
      constructor(nombre, precio){
         this.nombre = nombre;
         this.precio = precio;
      }
      sumaIva(){
         this.precio = precio * 1.21
      }
}

const arrayZapatilla = [{nombre:"running",precio:20000},
                        {nombre:"topper",precio:18000},
                        {nombre:"nike",precio:35000},
                        {nombre:"running",precio:25000},
                        {nombre:"topper",precio:12000},
                        {nombre:"nike",precio:28990}]


console.log(objectZapatilla)
console.log(arrayZapatilla)

function Zapatilla(){
     
    let zapatilla = prompt("elija running, topper, nike");

    arrayVacio = []

    switch(zapatilla){
          case "running":
                alert("se agrego running");
          break;
          case "topper":
                alert("se agrego topper");
          break;
          case "nike":
                alert("se agrego nike");
          break;
          default:
              alert("volve a ingresar");
              Zapatilla()
        break;
    }
    const carritoArray = arrayVacio.push(zapatilla)
    console.log(carritoArray);
    console.log(zapatilla);
}

let agregar = prompt("quieres agregar algo del carrito pulse si agregar y si quiere eliminar algo pulse si eliminar y si no quiere agregar nada pulse no")



switch(agregar){
    case "si agregar":
         Agregar();
    break;
    case "si eliminar":
          Eliminar();
    break;
    case "no":
         alert("muchas gracias")
    break;
    default:
         alert("que tenga buen dia");
    break;
}

//FUNCIONES DE AGREGO Y DE ELIMINAR. AGREGO CON PUSH O UNSHIFT, ELIMINAR SHIFT O POP 

function Agregar(){

    let agregar = prompt("¿que desea agregar remeras, zapatilla o pantalon?")

    switch (agregar){
         case "remeras":
             Remeras()
         break;
         case "pantalon":
              Pantalon()
         break;
         case "zapatillas":
              Zapatilla()
         break;
    }


}

function Eliminar(){
      let eliminar = prompt("que desea eliminar pantalon, remeras, zapatilla?")

    switch(eliminar){
        case "pantalon":
              Pantalon();
        break;
        case "remeras":
              Remeras();
        break;
        case "zapatillas":
              Zapatilla();
        break;
        default:
              alert("no se detecta nada");
        break;
    }

}

const arrayIvaPantalon = arrayPantalones.map( (objectPantalones) => {
    return {
        nombre: objectPantalones.nombre,
        precio: objectPantalones.precio * 1.21

    }
});

console.log(arrayIva)

const arrayIvaRemeras = arrayPantalones.map( (objectRemeras) => {
    return {
        nombre: objectRemeras.nombre,
        precio: objectRemeras.precio * 1.21

    }
});

const arrayIvaZapatillas = arrayZapatilla.map( (objectZapatilla) => {
    return {
        nombre: objectZapatilla.nombre,
        precio: objectZapatilla.precio * 1.21

    }
});

//MAP, REDUCE Y PUEDE SER SOME

const menosRemeras = arrayRemeras.filter(arrayRemeras => arrayRemeras.precio < 9000)

console.log(menosRemeras);

const mayorRemeras = arrayRemeras.filter(arrayRemeras => arrayRemeras.precio > 9000)

console.log(mayorRemeras);

const menosPantalones = arrayPantalones.filter(arrayPantalones => arrayPantalones.precio < 8500)

console.log(menosPantalones);

const mayorPantalones = arrayPantalones.filter(arrayPantalones => arrayPantalones.precio > 11000)

console.log(mayorPantalones);

const menosZapatilla = arrayZapatilla.filter(arrayZapatilla => arrayZapatilla.precio < 25000)

console.log(menosZapatilla);

const mayorZapatilla = arrayZapatilla.filter(arrayZapatilla => arrayZapatilla.precio > 28000)

console.log(mayorZapatilla);