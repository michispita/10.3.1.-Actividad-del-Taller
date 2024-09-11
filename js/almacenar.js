let addbtn= document.getElementById("agregar");
let input=document.getElementById("item");
let list= document.getElementById("contenedor");

addbtn.addEventListener("click",function(){

let newItem=document.createElement("li");

if (input.value.trim()!= ""){
    newItem.innerText=input.value;
    list.appendChild(newItem);
    input.value="";

//Guardamos el valor del item en el localStorage
localStorage.setItem("inputDato", newItem.value);
console.log(localStorage)
}

});

/*Tener en cuenta que el contenido del listado (y su visualización) 
deben mantenerse aún cuando el navegador se cierre y se vuelva a abrir.

newItem.innerHTML=localStorage.getItem("inputDato"); y stringify? 
*/
