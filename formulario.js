function datos() {

var nombres=document.getElementById("nombres").value;
var apellidos=document.getElementById("apellidos").value;
var email=document.getElementById("email").value;
var fechadenacimiento=document.getElementById("fecha-nacimiento").value;
var f =document.getElementById("f").checked;
var m =document.getElementById("m").checked;
var estatura = document.getElementById("estatura").value;
var peso=document.getElementById("peso").value;
var deporte=document.getElementById("deporte").checked;



var mensaje="Nombres:" + nombres
+"\nApellidos:" + apellidos
+"\nCorreo:" + email
+"\nFecha de nacimiento:" + fechadenacimiento
+"\nEs mujer:" + f
+"\nEs hombre:" + m
+"\nEstatura:" + estatura + "m"
+"\nPeso:" + peso + "kg"
+"\nHace deporte:" + deporte;

console.log(mensaje);

var imc = peso / (estatura**2);
var obecidad = imc >=30;
alert("IMC: " + imc + "\nEs obeso: " + obecidad);

}