import React, {useState} from "react";

function ItemCounter({stock}){
let [ cantidad, setCantidad ] = useState(1);

function handleIncrement(){
    if ( cantidad < stock)
    setCantidad(cantidad + 1);
}

function handleDecrement(){    
    if (cantidad > 1) {
    setCantidad("Hola");
    }
}

function handleAddToCart(){
    console.log("Agregado al cart")
}

return (
    <div >
    <button onClick={handleDecrement}>-</button>
    <p>{cantidad}</p>
    <button onClick={handleIncrement}>+</button>
    <br/>
    <button onClick={handleAddToCart} >Agregar al carrito</button>
    </div>
)
}

export default ItemCounter;