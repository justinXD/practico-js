//codigo del cuadrado
console.group("cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados de cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado)
{
    return lado*4;
}

//const perimetroCuadrado = ladoCuadrado*4;
//console.log("el perimetro del cuadrado mide: " + perimetroCuadrado + "cm");
function areaCuadrada(lado)
{
    return lado*lado;
}
//console.log("el area del cuadrado es: " + areaCuadrada + "cm^2")
console.groupEnd();
//codigo triangulo
console.group("triangulo");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;*/
//console.log(`los lados del triangulo son: ${ladoTriangulo1} cm, 
//${ladoTriangulo2} cm y 
//${baseTriangulo} cm`);
function perimetroTriangulo(lado1, lado2, base)
{
return lado1 + lado2 + base;
}
//console.log(`la altura del triangulo mide ${alturaTriangulo} cm`);
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo(base, altura)
{
    return (base*altura)/2;
}
//console.log("el area del triangulo es: " + areaTriangulo + "cm^2") 
console.groupEnd();
// codigo circulo
console.group("circulo");
//diametro
const diametroCirculo = (radio) => radio*2;
//Pi
const Pi = Math.PI;
//circunferencia
//const perimetroCirculo = Pi*diametroCirculo;
const perimetroCirculo = (radio) => diametroCirculo(radio)*Pi;
//area
//const areaCirculo = (Math.PI*Math.pow(diametroCirculo, 2))/4;
//console.log("el valor de Pi es: " + Pi);
const areaCirculo = (radio) => Pi*radio**2;
/*console.log(`el diametro del circulo es ${diametroCirculo} cm, 
su radio es ${diametroCirculo/2} cm, 
su circunferencia es ${perimetroCirculo} cm 
y el area es ${areaCirculo} cm^2`);*/
console.groupEnd();
//aqui inicia la interracion co HTML
//
//
var mathFieldSpan = document.getElementById('math-field');
//var txtFormula = document.getElementById('txtFormula');
var latexSpan = document.getElementById('latex');

var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
  spaceBehavesLikeTab: true, // configurable
  handlers: {
    edit: function() { // useful event handlers
      latexSpan.textContent = mathField.latex(); // simple API
    }
  }
});

function calcularPerimetroCuadrado(value)
{  
    let perimetro = perimetroCuadrado(value);

    return perimetro;
}

function calcularAreaCuadrado(value)
{
    
    let area = areaCuadrada(value);
    return area;
}

function calcularPerimetroTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    let perimetro = value*3;
    return perimetro;
    
}

function calcularAreaTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    let mediaBase = value/2;
    let altura = Math.sqrt((value**2)-mediaBase**2);
    let area = (value*altura)/2;
    return area;
}

function calcularPerimetroCirculo(value)
{
    const Pi = Math.PI;
    let diametro = value*2;
    let perimetro = Pi*diametro;
    return perimetro;
}

function calcularAreaCirculo(value)
{
    let area = Pi*Math.pow(value, 2);
    return area;
}

// Events

const btnPerimetroCuadrado = document.getElementById("btnPerimetroCuadrado");
btnPerimetroCuadrado.addEventListener('click', function() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const result = calcularPerimetroCuadrado(value)
    
    let pResultadoPerimetro = document.getElementById("pResultadoPerimetro");
    pResultadoPerimetro.innerHTML = `<b>El perímetro es: </b>${result} `;
    let pUnidad = document.getElementById("pUnidad");
    pUnidad.innerHTML = ` cm`;
})

const btnareaCuadrado = document.getElementById("btnareaCuadrado");
btnareaCuadrado.addEventListener('click', function(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const resultArea = calcularAreaCuadrado(value);

    let pResultadoPerimetro = document.getElementById("pResultadoPerimetro");
    pResultadoPerimetro.innerHTML = `<b>El área es: </b>${resultArea}`;
    let pUnidad = document.getElementById("pUnidad");
    pUnidad.innerHTML = `cm^2`;
    MQ.StaticMath(pUnidad);
})

const btnperimetroTriangulo = document.getElementById("btnperimetroTriangulo")
btnperimetroTriangulo.addEventListener('click', function(){
    const resultPerimetroTriangulo = calcularPerimetroTriangulo();

    const pResultadoPerimetroTriangulo = document.getElementById("pResultadoPerimetroTriangulo");
    pResultadoPerimetroTriangulo.innerHTML = `<b>El perimetro es: </b>${resultPerimetroTriangulo} `;
    let pUnidadTriangulo = document.getElementById("pUnidadTriangulo");
    pUnidadTriangulo.innerHTML = ` cm`;
})

const btnareaTriangulo = document.getElementById("btnareaTriangulo")
btnareaTriangulo.addEventListener('click', function(){
    const resultareaTriangulo = calcularAreaTriangulo();

    const pResultadoPerimetroTriangulo = document.getElementById("pResultadoPerimetroTriangulo");
    pResultadoPerimetroTriangulo.innerHTML = `<b>El área es: </b>${resultareaTriangulo.toFixed(4)} `;
    let pUnidadTriangulo = document.getElementById("pUnidadTriangulo");
    pUnidadTriangulo.innerHTML = `cm^2`;
    MQ.StaticMath(pUnidadTriangulo);
})

const btnperimetroCirculo = document.getElementById("btnperimetroCirculo");
btnperimetroCirculo.addEventListener('click', function() {

    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const result = calcularPerimetroCirculo(value)
    
    const pResultadoPerimetroCirculo = document.getElementById("pResultadoPerimetroCirculo");
    pResultadoPerimetroCirculo.innerHTML = `<b>El perímetro es: </b>${result.toFixed(4)} `;
    let pUnidadCirculo = document.getElementById("pUnidadCirculo");
    pUnidadCirculo.innerHTML = ` cm`;
})

const btnareaCirculo = document.getElementById("btnareaCirculo");
btnareaCirculo.addEventListener('click', function() {

    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const result = calcularAreaCirculo(value)
    
    const pResultadoPerimetroCirculo = document.getElementById("pResultadoPerimetroCirculo");
    pResultadoPerimetroCirculo.innerHTML = `<b>El área es: </b>${result.toFixed(4)} `;
    let pUnidadCirculo = document.getElementById("pUnidadCirculo");
    pUnidadCirculo.innerHTML = `cm^2`;
    MQ.StaticMath(pUnidadCirculo);
})

/*
1- ID al Elemento p = resultado
2- ID al botón
3- Evento al vboton
*/