//1. Capturar el H1, mediante un ID, en una variable llamada "titulo".

let titulo = document.getElementById("tituloPrinc");
console.log(titulo);

//2. Crea una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del
//título por el de esta variable.

let tituloPrincipal = "Frutas";
titulo.textContent = tituloPrincipal;
console.log(titulo);

//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.

let background = document.querySelectorAll(".demo");
console.log(background);
for (const iterator of background) {
  iterator.className = " bg-yellow-400";
}

//4. Capturar y modificar el p del footer,
//agregarle tu nombre completo y cohort.

let nombre = document.getElementsByTagName("footer");
console.log(nombre);
nombre[0].innerHTML = "Mariela Morsucci « »  Cohorte54";

//5. Crear un div dentro del main y agregarle el id
//"contenedor". Capturar ese div por medio de su id.

//Crear una tag desde js

/* let main = document.querySelector('.main')
console.log(main)

let crearAtributo= document.createElement('div')
console.log(crearAtributo)

crearAtributo.appendChild(main) */

let main = document.getElementById("contenedor");
console.log(main);

/* 6. Crear una función que devuelva la estructura de una 
card. La función debe devolver un string para más 
adelante utilizar innerHTML. 
(La card debe contener los siguientes datos: 
    nombre, foto y descripción). */

function createCard(object) {
  return `
    <div class="card flex flex-col justify-center p-2 shadow-lg ">
                <h3 class="tit_card text-center text-[27px] font-bold md:w-full">${object.nombre}</h3>
                <div class="img_card flex md:justify-center ">
                    <img class="w-9/12 object-fit md:w-1/2 " src="${object.foto}" alt="${object.nombre}">
                </div>
                <p class="texto_card text-center p-2 text-[20px] md:w-full">${object.descripcion}</p>
            </div>
            `;
}

/* 7. Con el archivo data que se encuentra en la carpeta,
 realizar un bucle para crear cards con los datos de las 
 frutas, utilizando la función del punto 6. 
 (Este bucle podría meterse en otra función y recibir el 
array por parámetro). 

8. Mostrar las cards con los datos pedidos en el div "#contenedor"

*/

//METODO 1 >> ITERANDO SOBRE HTML SIN DOC FRAGMENT

/* console.log(frutas);

for (const iterator of frutas) {
  let contenedor = document.getElementById("contenedor");
  let aux = document.createElement("div"); //armamos un div
  //al div le metemos el string de retorno de la fc y le metemos a la clase
  aux.innerHTML = createCard(iterator);
  aux.className =
    " card flex content-center p-2 shadow-lg md:w-1/4 md:content-between";

  contenedor.appendChild(aux);
} */

//METODO 2 >> ITERANDO SOBRE HTML CON DOC FRAGMENT

//pedazo de plantilla que no se guarda en la memporia. se usa y descarta
let fragmento = new DocumentFragment();
console.log([fragmento]);
let contenedor = document.getElementById("contenedor");
 
function arrayLooping(objeto) {
    for (const iterator of objeto) {
        let aux = document.createElement("div");
        aux.innerHTML = createCard(iterator);
        aux.className = " card flex content-center p-2 shadow-lg md:w-1/4 md:content-between "
        fragmento.appendChild(aux);
    }
}

arrayLooping(frutas); // crea las cards
contenedor.appendChild(fragmento); // inserta el fragmento dentro del div





/*  9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. 
Agregar al div el título "Frutas Dulces".
 10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos 
 (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar
  las frutas cuya propiedad "esDulce" sea true. 
 11. Mostrar la lista de frutas dulces en el div "#lista". 
  */



 // SIN FRAGMENT 

/* let frutaDulce = [];

for (const iterator of frutas) {
  if (iterator.esDulce == true) {
    frutaDulce.push(iterator);
  }
}

console.log(frutaDulce);

function CrearLista(object) {
    
    for (const iterator of object) {
    let lista=document.getElementById('lista');
    let aux=document.createElement('li')
    aux.innerHTML+=`${iterator.nombre}`
    aux.className=' text-red-800'
    lista.appendChild(aux)
    }
    
  return lista;
}
CrearLista(frutaDulce) */

//USANDO FRAGMENT


let fragment = new DocumentFragment();
console.log([fragment]);

let ulElement = document.createElement("ul");
ulElement.className = "m-4 text-center list-disc p-4";

let list=document.getElementById('lista');

let createLi = objeto => {
    return `<li>${objeto.nombre}</li>`;
}

function sweetFruitsSelector(array) {
    for (const iterator of array) {
        if (iterator.esDulce) {
            ulElement.innerHTML += createLi(iterator); // += para que no se borren todos las frutas extraídas y quede solo el último. 
            fragment.appendChild(ulElement);
        }
    }
}

sweetFruitsSelector(frutas);
list.appendChild(fragment);
console.log([fragment]);


let frutitas = frutas.map()