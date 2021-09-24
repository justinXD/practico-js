//codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados de cuadrado miden: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado*4;
console.log("el perimetro del cuadrado mide: " + perimetroCuadrado + "cm");
const areaCuadrada = ladoCuadrado*ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrada + "cm^2")
console.groupEnd();
//codigo triangulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`los lados del triangulo son: ${ladoTriangulo1} cm, 
${ladoTriangulo2} cm y 
${baseTriangulo} cm`);
console.log(`la altura del triangulo mide ${alturaTriangulo} cm`);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("el area del triangulo es: " + areaTriangulo + "cm^2") 
console.groupEnd();
// codigo circulo
console.group("circulo");
//diametro
const diametroCirculo = 8;
//Pi
const Pi = Math.PI;
//circunferencia
const perimetroCirculo = Pi*diametroCirculo;
//area
const areaCirculo = (Math.PI*Math.pow(diametroCirculo, 2))/4;
console.log("el valor de Pi es: " + Pi);
console.log(`el diametro del circulo es ${diametroCirculo} cm, 
su radio es ${diametroCirculo/2} cm, 
su circunferencia es ${perimetroCirculo} cm 
y el area es ${areaCirculo} cm^2`);
console.groupEnd();