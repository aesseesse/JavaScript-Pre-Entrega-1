//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

let precio=0;
let impuestos=0;
let descuentos=0;
let cantidad=0;

let codigoArticulo = prompt("ingrese codigo del articulo art.01 / art.02 / art.03 / art.04 o ESC para salir");

while (codigoArticulo != 'ESC'){
    
    switch(codigoArticulo){
        case "art.01":
            precio= parseInt(90);
            impuestos=precio*0.21;
            descuentos=precio*0.1;
            cantidad= parseInt(prompt("ingrese cantidad art.01"));
            while(cantidad <= 0){
                alert("la cantidad no puede ser menor o igual a 0")
                cantidad= parseInt(prompt("ingrese cantidad art."));
            }
            total= (precio + impuestos - descuentos)* cantidad;
            console.log("precio= $"+ precio)
            console.log("impuestos (21%)=$"+ impuestos)
            console.log("descuentos (10%)=$"+ descuentos)
            console.log("cantidad= " + cantidad +" unidad/es")
            console.log (total)
            break


        case "art.02":
            precio= parseInt(150);
            impuestos=precio*0.21;
            descuentos=precio*0.15;
            cantidad= parseInt(prompt("ingrese cantidad art.02"));
            while(cantidad <= 0){
                alert("la cantidad no puede ser menor o igual a 0")
                cantidad= parseInt(prompt("ingrese cantidad art."));
            }
            total= (precio + impuestos - descuentos)* cantidad;
            console.log("precio= $"+ precio)
            console.log("impuestos (21%)=$"+ impuestos)
            console.log("descuentos (15%)=$"+ descuentos)
            console.log("cantidad= " + cantidad +" unidad/es")
            console.log (total)
            break
        case "art.03":
            precio= parseInt(110);
            impuestos=precio*0.21;
            descuentos=precio*0.15;
            cantidad= parseInt(prompt("ingrese cantidad art.03"));
            while(cantidad <= 0){
                alert("la cantidad no puede ser menor o igual a 0")
                cantidad= parseInt(prompt("ingrese cantidad art."));
            }            
            total= (precio + impuestos - descuentos)* cantidad;
            console.log("precio= $"+ precio)
            console.log("impuestos (21%)=$"+ impuestos)
            console.log("descuentos (15%)=$"+ descuentos)
            console.log("cantidad= " + cantidad +" unidad/es")
            console.log (total)
            break


        case "art.04":
                precio= parseInt(prompt("ingrese precio de art.04"));
            while(precio <= 0){
                alert("el precio ingresado es menor a 0")
                precio= parseInt(prompt("ingrese precio de art.04"));
            }

            impuestos=precio*0.21;

            desc= parseInt(prompt("ingrese descuento de art.04"));
            while(desc < 0){
                alert("el descuento ingresado es invalido, ingrese un descuento entre 0 y 100")
                desc= parseInt(prompt("ingrese descuento de art.04"));
            }
            descuentos=precio*desc/parseInt(100);

            cantidad= parseInt(prompt("ingrese cantidad art.04"));
            while(cantidad <= 0){
                alert("la cantidad no puede ser menor o igual a 0")
                cantidad= parseInt(prompt("ingrese cantidad art.04"));
            }

            total= (precio + impuestos - descuentos)* cantidad;
            console.log("precio= $"+ precio)
            console.log("impuestos (21%)=$"+ impuestos)
            console.log("descuentos (10%)=$"+ descuentos)
            console.log("cantidad= " + cantidad +" unidad/es")
            console.log (total)
            break

        default:
            precio= parseInt(prompt("ingrese precio de art.generico"));
            while(precio <= 0){
                alert("el precio ingresado es menor a 0")
                precio= parseInt(prompt("ingrese precio de art.generico"));
            }

            impuestos=precio*0.21;

            desc= parseInt(prompt("ingrese descuento de art.generico"));
            while(desc < 0){
                alert("el descuento ingresado es invalido, ingrese un descuento entre 0 y 100")
                desc= parseInt(prompt("ingrese descuento de art.generico"));
            }
            descuentos=precio*desc/parseInt(100);

            cantidad= parseInt(prompt("ingrese cantidad art.generico"));
            while(cantidad <= 0){
                alert("la cantidad no puede ser menor o igual a 0")
                cantidad= parseInt(prompt("ingrese cantidad art.generico"));
            }

            total= (precio + impuestos - descuentos)* cantidad;
            console.log("precio= $"+ precio)
            console.log("impuestos (21%)=$"+ impuestos)
            console.log("descuentos (10%)=$"+ descuentos)
            console.log("cantidad= " + cantidad +" unidad/es")
            console.log (total)
            break
    }


    codigoArticulo= prompt("ingrese codigo del articulo art.01 / art.02 / art.03 / art.04 o ESC para salir");

}


