var codigoPais = "593";
var codigoEmpresa = "12345";
let ram=Math.floor(Math.random(000001)*999999);
var codigoProducto =ram.toString();
var verificador ;
let concatenar = codigoPais + codigoEmpresa + codigoProducto;

let array = concatenar.split("", concatenar);
var container = [];
var suma;
for (let i = 0; i <= 13; i++) {
   
    let legtura = array[i];

    if (i == 0) {
        suma = parseInt(legtura) * 1;
        container.push(suma);
    }
    if (i % 2 != 0 && i > 0) {
        suma = parseInt(legtura) * 3;
        container.push(suma);
    }
    if (i % 2 == 0 && i > 0) {
        suma = parseInt(legtura) * 1;
        container.push(suma);
    }
}
for(let i =0; i<=13;i++ ){
suma= suma+ container[i]
transformar=parseInt(suma); 

}
suma= transformar/10;
var operacion2= Math.ceil(suma)*10;
var operacion3= operacion2-transformar;

verificador=concatenar+operacion3.toString() ;
console.log(verificador)

//codigo barras
JsBarcode("#barcode", verificador, {
    format: "codabar",
    lineColor: "#000",
    width: 3,
    height: 40,
    displayValue: true
});

// codigo barras