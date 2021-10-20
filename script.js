console.log('Conexión....');


const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('change', leerTexto);
email.addEventListener('change', leerTexto);
mensaje.addEventListener('change', leerTexto);

//Capturo los datos con target y lo guardo en el objeto datos
function leerTexto (e){
    datos[e.target.id]= e.target.value;
    console.log(datos);

}

//Evento submit para enviar los datos del formulario
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //destructuring, asigno los values a unas propiedades
    const {nombre,email,mensaje} = datos;

    //Validar Formulario
    console.log(nombre,email,mensaje);

    //Enviar formulario
    console.log('Enviando Formulario');
});


// COn el target captur el valor del dato
// const nombre = document.querySelector('.text');
// console.log(nombre);
// nombre.addEventListener('input', function(evento){
//     console.log('Escribiendo...');
//     console.log(evento);
    // Captura la informacion en tiempo real
//     console.log(evento.target.value);
// });


// Este se activa cuando deja de escribir fuera del campo texto
// const nombre = document.querySelector('.text');
// console.log(nombre);
// nombre.addEventListener('change', function(evento){
//     console.log('Escribiendo...');
//     console.log(evento);
// });


// Permite identificar que esta escribiendo, mas en tiempo real
// const nombre = document.querySelector('.text');
// console.log(nombre);
// nombre.addEventListener('input', function(evento){
//     console.log('Escribiendo...');
//     console.log(evento);
// });


// EvenListener con el button
// const btnEnviar = document.querySelector('.boton');

// le registremos un evento al btnEnviar
// btnEnviar.addEventListener('click', function(evento){
    // previene la accion por defecto de recargar la pagina del button
//     evento.preventDefault();
//     console.log(evento);
//     console.log('Enviando datos... ');
// });



// function mostrarAlerta(){
//     alert('Hizo click');
// }

// function hacerClick(){
//     var lista = document.querySelector('#div1 p');
//     // El usario hace clic en un elemento HTML
//     lista.onclick = mostrarAlerta;
//     console.log(lista);
// }

// window.onload = hacerClick;

// // OTRO EVENTO

// function raton(){
//     alert('Ratón por encima');
// }

// function ratonEncima(){
//     var lista1 = document.querySelector('#div2 p');
//     // El usario hace clic en un elemento HTML
//     lista1.onmouseover = raton;
//     console.log(lista1);
// }

// window.onmouseout= ratonEncima;
