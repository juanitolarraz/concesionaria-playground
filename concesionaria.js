//Check Point - Enunciado 1 v.2
//Juan menciona sus tres ideas para que lo ayudes a elegir la correcta. ¿Cuál de las siguientes ideas te parece la más correcta para representar un auto?
//RESPUESTA ---> Un objeto literal con las propiedades de cada auto.

//Check point JS 101 - Enunciado 1b V5
//Juan pensó también en opciones para representar la lista. Las presentó de la siguiente manera en código. ¿Podrías ayudarlo una vez más a elegir la que te parezca correcta?
//RESPUESTA ---> let autos = [ { }, { }, { } ]; COMENTARIO: En el ejercicio original del playground, en su momento, había seleccionado otra opción que era incorrecta. 

//Check point JS 101 - Enunciado 2 v4
//Ahora que tenemos guardada la lista de vehículos, Juan se pregunta cómo hará el sistema para usar esa información dentro de diferentes archivos. María te consulta cuál sería la manera correcta de resolver la duda de Juan.
//RESPUESTA ---> Exportando el contenido de la variable mediante "module.exports" y requiriéndolo en los archivos que lo necesiten.

//¡Al fin es momento de codear!
/*En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:

El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.
*/

//RESOLUCIÓN
let autos = 
[
    {
        marca : "Ford",
        modelo :  "Fiesta",
        precio : 150000,
        km : 200,
        color : "Azul",
        cuotas : 12,
        anio : 2019,
        patente : "APL123",
        vendido : false,
    },
    {
        marca : "Toyota",
        modelo : "Corolla",
        precio : 100000,
        km : 0,
        color : "Blanco",
        cuotas : 14,
        anio : 2019,
        patente : "JJK116",
        vendido : false,
    }
];

module.exports = autos

//El proyecto sigue avanzando v3
/*

A la semana, el proyecto avanza y María nos pide otro requerimiento, esta vez un poco más avanzado. Nos comenta que la concesionaria ahora necesita poder buscar los automóviles por patente y venderlos. Para esto, María nos encargó pensar la forma en que representaremos a la concesionaria.



Al terminar la reunión, Juan se acerca para comentarte tres ideas que tuvo. María, a unos metros, escuchó las opciones y te encargó definir cuál será la más eficaz.
*/

//RESPUESTA ---> Podríamos tener un objeto literal que represente a la concesionaria con los autos que creamos y que esta tenga las funcionalidades de buscar por patente y marcar como vendido un auto. (la respuesta que indico es distinta a la que indiqué en PG en su momento)

/*
Etapa 1
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
*/
/* requerir módulo autos */
let autos = require("./autos")

const concesionaria = {
    /* completar */
   autos: autos
};

/*
Etapa 2
Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.
*/
let autos = require("./autos")


let concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){

      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i]
         }
       }
       return null
      }
   };
console.log(concesionaria.buscarAuto("APL123"))

/*
Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.
*/
let autos = require("./autos")

let concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){

      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i]
         }
      }
       return null
    },

    venderAuto : function (patente) {
      let auto = this.buscarAuto(patente);
        if (auto) {
          auto.vendido = true
        }
    }
};
console.log(concesionaria.venderAuto())

/*
Funcionalidad extra
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
};

/*
Una nueva funcionalidad extra
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
    
        autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100)
    },
};

//Check point JS 101 - Feedback Intermedio
//RESPUESTA ---> en esta caja de comentarios brindé feedback sobre la consigna.

/*
Más funcionalidades
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
    
    autosNuevos: function(){
         let autosParaVender = this.autosParaLaVenta();
         return autosParaVender.filter(function (autos){
            return autos.km<100
      })
    },

    listaDeVentas: function () { 
      let autosVendidos = this.autos.filter( auto => {
        return auto.vendido == true 
      });
      let listaDePreciosAutosVendidos = autosVendidos.map( auto => {
        return auto.precio
      })
        return listaDePreciosAutosVendidos;
      },   
};

/*
Total de ventas
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
    
    autosNuevos: function(){
         let autosParaVender = this.autosParaLaVenta();
         return autosParaVender.filter(function (autos){                  return autos.km<100
      })
    },

    listaDeVentas: function () { 
      let autosVendidos = this.autos.filter( auto => {
        return auto.vendido == true 
      });
      let listaDePreciosAutosVendidos = autosVendidos.map( auto => {
        return auto.precio
      })
        return listaDePreciosAutosVendidos;
      },

    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num )
        
    },
};

/*
Agregando funcionalidades
Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
    
    autosNuevos: function(){
         let autosParaVender = this.autosParaLaVenta();
         return autosParaVender.filter(function (autos){                  return autos.km<100
      })
    },

    listaDeVentas: function () { 
      let autosVendidos = this.autos.filter( auto => {
        return auto.vendido == true 
      });
      let listaDePreciosAutosVendidos = autosVendidos.map( auto => {
        return auto.precio
      })
        return listaDePreciosAutosVendidos;
      },

    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num )  
    },

puedeComprar: function (autoSelec, personaSelec) {
        let costoTtl = autoSelec.precio;
        let costoCts = costoTtl / autoSelec.cuotas;
        console.log(costoCts)
        console.log(costoTtl)
        return costoTtl <= personaSelec.capacidadDePagoTotal && costoCts <= personaSelec.capacidadDePagoEnCuotas ? true : false
    },
};

/*
Agregando funcionalidades
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?





Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
let autos = require("./autos")

const concesionaria = {
    autos: autos,
    
    buscarAuto: function(x){
      for (i=0; i < autos.length; i++){
         if (autos[i].patente == x){
         return autos[i];
         };
       };
       return null;
      },

      venderAuto:function(patente){
          let auto=this.buscarAuto(patente);
          if (auto){
           auto.vendido=true;
          }
      },

    autosParaLaVenta: function() {
      let listaDisponible = this.autos.filter(function(auto) {
        return auto.vendido == false;
      });
      return listaDisponible;
      },
    
    autosNuevos: function(){
         let autosParaVender = this.autosParaLaVenta();
         return autosParaVender.filter(function (autos){                  return autos.km<100
      })
    },

    listaDeVentas: function () { 
      let autosVendidos = this.autos.filter( auto => {
        return auto.vendido == true 
      });
      let listaDePreciosAutosVendidos = autosVendidos.map( auto => {
        return auto.precio
      })
        return listaDePreciosAutosVendidos;
      },

    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num )  
    },

puedeComprar : function (autoSelec, personaSelec) {
        let costoTtl = autoSelec.precio;
        let costoCts = costoTtl / autoSelec.cuotas;
        return costoTtl <= personaSelec.capacidadDePagoTotal && costoCts <= personaSelec.capacidadDePagoEnCuotas ? true : false
    },

    autosQuePuedeComprar: function(personaSelec){
        let autosEnVenta = this.autosParaLaVenta();
        let puede = autosEnVenta.filter((auto) => this.puedeComprar(auto,personaSelec) == true)
        return puede
    }
};

//Check point JS 101 - Enunciado 5
//RESPUESTA ---> En esta consigna brindé feedback sobre los ejercicios de todo el cierre del módulo. 


