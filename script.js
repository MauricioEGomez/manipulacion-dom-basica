const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
const parrafito = document.querySelector(`parrafito`);
const pid = document.getElementById(`pid`);
const input = document.querySelector(`input`);

console.log(input.value);
console.log(pid);
console.log(h1,
            p,
            parrafito, 
            pid, 
            input); 
/* console.log("hola mundo"); */
h1.innerHTML = "hOLIS";
h1.innerText = "hOLIS";
console.log(h1.getAttribute(`pantalla`));
