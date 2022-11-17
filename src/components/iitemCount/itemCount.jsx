import React, {useState} from "react";
import { Button } from "react-bootstrap";


function ItemCounter({stock}){
let [ cantidad, setCantidad ] = useState(1);

function handleIncrement(){
    if ( cantidad < stock)
    setCantidad(cantidad + 1);
}

function handleDecrement(){    
    if (cantidad > 1) {
    setCantidad(cantidad - 1);
    }
}

function handleAddToCart(){
    console.log("Agregado al cart")
}

return (
<div className="flex-wrap">
<div>
    <Button onClick={handleDecrement} style={{background:"green"}}>-</Button>
    <h2>{cantidad}</h2>
    <Button onClick={handleIncrement} style={{background:"green"}}>+</Button>
    <br/>
    <Button onClick={handleAddToCart} >Agregar al carrito</Button>
</div>
</div>


    
)
}

export default ItemCounter;