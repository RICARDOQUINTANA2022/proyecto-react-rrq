import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem ({ title, url}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img src={url} alt={title} />
        <Card.Text>
          Ingrese para conocer los detalles
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
    
    
  );
}

export default CardItem;
