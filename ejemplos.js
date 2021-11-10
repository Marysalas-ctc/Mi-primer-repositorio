//operadores matenaticos 
var a=20; 
var b=34;
var c=2.4;

"a + b = " + (a + b);
"a - c = " + (a - c);
"b * c = " + (b * c);
"a / b = " + (a / b);
"a - c = " + (a - c);
"c**5 = " + (c**5);

//no confundir 
"a + b * c = " + (a + b * c);
"(a + b)*c = " + (a + b)*c;

//operadores de comparacion
8 == "8"; // para js no hay diferencia entre un string con el valor 8 y el numero 8
8 === "8"; // para validad que no salo tiene el mismo valor tambien el tipo, se utiliza ===
8 != "8"; // un operador distinto doble

// operadores logicos 
"true && true = " + (true && true);
"true && false = " + (true && false);
"true && true && false = " + (true && true && false);
"false && false = " + (false && false);

"true || true = " + (true || true);
"true || false = " + (true || false); 
"true || true || false = " + (true || true || false);
"false || false = " + (false || false);

// combinadas
"true && (true|| false) = " + true &&
