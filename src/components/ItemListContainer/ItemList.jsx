import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"



function ItemList (item) {
    return(
                <div>
                    <div key={item.id} >
                    <Card style={{ width: 'auto', height: "auto", background:"rgb(117, 117, 228)", textAlign:"center",padding:"20px",}} >
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <img src={item.image} alt={item.title} style={{maxWidth: "250px"}}/>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text>
                    Ingrese para conocer los detalles
                    </Card.Text>
                    <Link to="/detalle"><Button variant="primary">Ver mas</Button></Link>
                    </Card.Body>
                    </Card>
                    </div>
                </div>

    )
}
export default ItemList