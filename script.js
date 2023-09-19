function puntoUno(){
    let cadena=document.getElementById("cadena").value;
    if (cadena.length>2 && cadena.length<11){
        alert("correcto")
    }else{
        alert("incorrecto")
    }
}
// function mayus() {
//     let cadena=document.getElementById("cadena").value;
//     var nombre = ''
//     var string;
//     for (i = 0; i <= cadena.length - 1; i++) {
//       string = cadena[i];  
//       if (cadena[i] == string.toUpperCase()) {
//         nombre += string.toLowerCase();
//       } else {
//         nombre += string.toUpperCase();
//       }
//     }
//     alert(nombre)
//   }
function mayus() {
    var cadena=document.getElementById("cadena").value;
    var charArray = cadena.toLowerCase().split("");
    for (var i = 1; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
    union=charArray.join("");
    alert(union)
};

function puntoDos(){
    let nacimiento=document.getElementById("nacimiento").value;
    let nacimiento2=new Date(nacimiento)
    let hoy=new Date()
    let edad=hoy.getFullYear()-nacimiento2.getFullYear()
    let meses=hoy.getMonth()-nacimiento2.getMonth();
    if(meses<0 || (meses===0 && hoy.getDate()<nacimiento2.getDate())){
        edad--
    }
    alert(edad)

// }
// function fechas(){
//     let nacimiento=document.getElementById("nacimiento").value;
//     let nacimiento2=new Date(nacimiento)
//     if(nacimiento2.getFullYear=="1900")

// }
function puntoTres(){
    let x=document.getElementById("x").value;
    let resultado=(x-1)/((x+2)*(x-2))
    let div=document.getElementById("puntotres")
    div.innerHTML=`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Resultado</h5>
    <p class="card-text">El resultado es ${resultado}</p>
  </div>
</div>
    `

}