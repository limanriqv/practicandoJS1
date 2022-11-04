// MiTienda 

//Sistema de control de stock de productos
let stock=100;

let opcion;
do{
    
    opcion=parseInt(prompt('1--Registrar venta\n2 -- Reponer\n3 -- Salir'));
    let cantidad;

    switch (opcion) {
        case 1:
            cantidad= parseInt(prompt('Ingrese la cantidad de productos a vender'));
            Ventas(cantidad);
            break;
        case 2:
            cantidad= parseInt(prompt('Cuantos productos desea reponer'));
            Reposicion(cantidad);
            break;
        case 3:
            alert('Ha salido correctamente de stock');
            break;
    
        default:
            console.log('Opción incorrecta');
            break;
    }
    

}while(opcion !== 3);

function Ventas(cantidad){
    if (cantidad > stock){
        alert('Sin stock para esa cantidad. '+'\n El stock disponible es '+ stock +' unidades');
    }else {
        stock = stock - cantidad;
        alert('Ha realizado la venta de '+ cantidad +' productos correctamente \n El nuevo stock es de '+ stock+ ' unidades' );
    }

}

function Reposicion(cantidad){
    stock=stock + cantidad;
    alert('Ha realizado la carga de '+ cantidad +' productos correctamente \n El nuevo stock es de '+ stock+ ' unidades' );
}





