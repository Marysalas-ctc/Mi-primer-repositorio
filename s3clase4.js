 
/* var nombre= "anajunitadelmonte";
 if (nombre.length >7) {
     console.log('que nombre tan largo tienes' ); 
     alert('que nombre tan largo tienes');
 } else{
     console.log('tu nombre no es muy largo');
     alert('tu nombre es muy corto')
 }*/

 /* varios if y else:
 var num = parseInt(prompt('ingresa nombre'));
 if (num <10){
 alert('diste un numero pequeño');
} else if (num <100){
    alert('diste un numero mediano');
}else {
    alert('diste un numero grande');
}*/

// if anidados:
var temperatura =  parseInt(prompt('ingresa temperatura'));
if (temperatura >10){
    if (temperatura <26){
        alert("temperatura moderada");
    }else if (temperatura >26) {
        alert ("la temperatura esta alta.");
    }
}else {
    alert("hace calor en la ciudad")
}
