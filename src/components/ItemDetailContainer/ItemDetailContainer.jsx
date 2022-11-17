import React, {useState, useEffect} from "react";
import { getSingleItemFromMock } from "../../mock/mock";
import Card from 'react-bootstrap/Card';
import ItemCounter from "../iitemCount/itemCount";
import {useParams} from "react-router-dom";


function ItemDetailContainer() {
  const [Item, setItem] = useState ([]);

  let params = useParams()
  let id = params.id

  useEffect(() =>{
    getSingleItemFromMock(id)
    .then((productMock) => {
      setItem(productMock);
    }).catch( error=>alert(error))
  }, []);

  
return (

  <div>
  <div>
                    <Card style={{ width: 'auto', height: "auto", background:"rgb(117, 117, 228)", textAlign:"center",padding:"20px",}} >
                    <Card.Body>
                    <h1>{Item.title}</h1>
                    <img src={Item.image} alt={Item.title} style={{width:"300px"}}/>
                    <h2>${Item.price}</h2>
                    <p>{Item.description}</p>
                    </Card.Body>
                    <div><ItemCounter stock={Item.Stock}/></div>
                    </Card>
                  
                    
            </div>
  </div>
 
);
}
export default ItemDetailContainer