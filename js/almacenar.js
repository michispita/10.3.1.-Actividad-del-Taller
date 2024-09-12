let addbtn= document.getElementById("agregar");
let input=document.getElementById("item");
let list= document.getElementById("contenedor");

addbtn.addEventListener("click",function(){

let newItem=document.createElement("li");

if (input.value.trim()!= ""){
    newItem.innerText=input.value;
    list.appendChild(newItem);
    
//Guardamos el valor en el localStorage
localStorage.setItem("inputDato", JSON.stringify(input.value));/*el valor que queremos agregar que es el del input.value
                                                               no newItem que es la li en si.
                                                               el método JSON.stringify()-> string, el local solo guarda texto*/
 console.log(localStorage)
let retrieved=JSON.parse(localStorage.getItem("inputDato")) /*para revertir y obtener el valor guardado en su forma original
                                                             JSON.parse()-> Obj*/
console.log(retrieved)
}

});

