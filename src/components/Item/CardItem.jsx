import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardItem () {
  const [mercadoList, setmercadoList] = useState([]);
  const [params, setparams] = useState({
      offset: 0,
      limit: 12
  });


const query = "bulldog";
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${params.limit}&offset=${params.offset}`;


const apiFetch = async () => {
  const response = await fetch (url);
  const json = await response.json();
  setmercadoList(json.results)
  }

useEffect( ()=> {
  apiFetch();
}, [])

  return (
      <div className="row">   
      <h1 style={{textAlign: "center"}}>MUNDO CAMINO</h1>
              {mercadoList.map((item) => (
                  <div className="col-md-3 my-3">
                      <Card style={{ width: 'auto', height: "350px", background:"yellow", textAlign:"center",padding:"20px"}} >
                      <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <img src={item.thumbnail} alt={item.title} style={{width:"auto"}}/>
                      <Card.Text>${item.price}</Card.Text>
                      <Card.Text>
                          Ingrese para conocer los detalles
                      </Card.Text>
                      <Button variant="primary">Ver mas</Button>
                  </Card.Body>
                  </Card>
                  </div>
                  
              ))}
      </div>
  )
}

export default CardItem;
