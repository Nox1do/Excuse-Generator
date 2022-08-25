let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

// let test = document.getElementById("excuse").innerHTML = "esto es una prueba";


let excuse = document.getElementById("excuse");
//funcion generadora de excusas.
function excusa(){ 
let quien = who[Math.floor(Math.random() * who.length)];
let accion = action[Math.floor(Math.random() * action.length)];
let que = what[Math.floor(Math.random() * what.length)];
let cuando = when[Math.floor(Math.random() * when.length)];
  excuse.innerHTML = quien + " " + accion + " " + que + " " + cuando;
  }    
