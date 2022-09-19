const formSocio         = document.querySelector(`#formulario`);
const inputNombres      = document.querySelector(`#socioNombres`);
const inputApellidos    = document.querySelector(`#socioApellidos`);
const inputDocumento    = document.querySelector("#socioDocumento");
const inputMail         = document.querySelector("#socioMail");
const inputTel          = document.querySelector("#socioTel");
const inputCel          = document.querySelector("#socioCel");
const inputDireccion    = document.querySelector("#socioDirección");
const inputLocalidad    = document.querySelector("#socioLocalidad");
const btnControlar      = document.querySelector(`#btnVerificar`);

formSocio.addEventListener(`submit`,btnOnClic);
//btnControlar.addEventListener("click",btnOnClic);
console.log("Hola");
//console.log(inputNombres.value)
function btnOnClic(event){
    event.preventDefault();
    verificado=console.log(`inputNombres:${inputNombres.value}  inputApellidos:${inputApellidos.value}`);
    console.log(verificado);
}
