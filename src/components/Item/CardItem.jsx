import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardItem () {
  const [mercadoList, setmercadoList] = useState([]);
  const [params, setparams] = useState({
      offset: 0,
      limit: 12
  });


const query = "ford";
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${params.limit}&offset=${params.offset}`;


const apiFetch = async () => {
  const response = await fetch (url);
  const json = await response.json();
  setmercadoList(json.results)
  }

useEffect( ()=> {
  apiFetch();
}, [params])

function handlenext () {
  let newparams = {...params};
  newparams.offset += 10
  setparams(newparams)
} 
function handleprev () {
  let newparams = {...params};
  newparams.offset += 10
  setparams(newparams)
} 

  return (
      <div className="row">
        <div className="row">
        <Button className="col-md-6 my-3" style={{}} variant="primary" onClick={handleprev}>{"<-"}   Previous page</Button>
        <Button className="col-md-6 my-3" variant="primary" onClick={handlenext}>Next page   {"->"}</Button>
        </div>  
      <h1 style={{textAlign: "center", color:"blue"}}>MUNDO FORD</h1>
              {mercadoList.map((item) => (
                  <div className="col-md-3 my-3" key={item.id}>
                      <Card style={{ width: 'auto', height: "400px", background:"rgb(117, 117, 228)", textAlign:"center",padding:"20px",}} >
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
