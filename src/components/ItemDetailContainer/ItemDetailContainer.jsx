import React, {useState, useEffect} from "react";
import { getSingleItemFromMock } from "../../mock/mock";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import ItemCounter from "../iitemCount/itemCount";


function ItemDetailContainer() {
  const [Item, setItem] = useState ([]);

  useEffect(() =>{
    getSingleItemFromMock().then((productMock) => {
      setItem(productMock);
    },[]);

  })
return (

  <div>
  <div  key={Item.id}>
                    <Card style={{ width: 'auto', height: "auto", background:"rgb(117, 117, 228)", textAlign:"center",padding:"20px",}} >
                    <Card.Body>
                    <Card.Title>{Item.title}</Card.Title>
                    <img src={Item.image} alt={Item.title} style={{width:"250"}}/>
                    <Card.Text>${Item.price}</Card.Text>
                    <Card.Text>
                    Ingrese para conocer los detalles
                    </Card.Text>
                    <Button variant="primary">Ver mas</Button>
                    </Card.Body>
                    </Card>
                    <div className="col-3"><ItemCounter/></div>
                    
            </div>
  </div>
 
);
}
export default ItemDetailContainer