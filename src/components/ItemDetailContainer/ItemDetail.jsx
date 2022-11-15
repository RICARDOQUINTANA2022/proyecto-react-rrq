import React from "react";
import Card from 'react-bootstrap/Card';

function ItemDetail (SingleProduct){
    return(
            <div  key={SingleProduct.id}>
                    <Card style={{ width: 'auto', height: "400px", background:"rgb(117, 117, 228)", textAlign:"center",padding:"20px",}} >
                    <Card.Body>
                    <Card.Title>{SingleProduct.title}</Card.Title>
                    <img src={SingleProduct.imagen} alt={SingleProduct.title} style={{width:"auto"}}/>
                    <Card.Text>${SingleProduct.price}</Card.Text>
                    <Card.Text>
                    Ingrese para conocer los detalles
                    </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
            
    )
}
export default ItemDetail