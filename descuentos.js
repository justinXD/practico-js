
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcularPrecioFinal(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseInt(inputDiscount.value);
    const verificationCupons = verifyCoupons();
    const finalDiscount = discountValue + verificationCupons;
    console.log(`${verificationCupons} ${finalDiscount} ${priceValue} ${discountValue}`);

    const precioFinal = calcularPrecioConDescuento(priceValue, finalDiscount);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio final es $" + precioFinal;
}

function verificar() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    if (!priceValue || !discountValue) {
        alert("ingresa un numero mayor a 0 en el precio y/o descuento");
    }
    else{
        calcularPrecioFinal();
    }
}

// undefined, false, null, 0, ''

// function testValor() {

//     let valor = null // undefined, false, null, 0, ''
    
//     if (!valor) {
//         console.log('Ingrese un valor')
//         return 
//     }
    
//     console.log(`Mi valor es ${valor}`)
    
//     }
    
//     testValor()

const verifyCoupons = function(){
    const cupones =[0, 5, 10, 25];
    const cupon = document.getElementById("coupons");
    const valueCoupon = parseInt(cupon.value);
    if (valueCoupon === cupones[0]) {
        return cupones[0];
    } else if(valueCoupon === cupones[1]){
        return cupones[1];
    } else if(valueCoupon === cupones[2]){
        return cupones[2];
    } else if(valueCoupon === cupones[3]){
        return cupones[3];
    }
    
}

document.addEventListener('keyup', (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
        verificar();
        //calcularPrecioFinal();
    }
  });
