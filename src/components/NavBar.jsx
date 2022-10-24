import Button from "./Buttons/Button";
import "../App.css";
import CartWidget from "./cartWidget/CartWidget";
import "./cartWidget/cartWidget.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function NavBar() {
    return (
    <>
    <nav className="App-NavBar">  
        <Container>
        <Row>    
            <Col>
                <h3>Mi tienda</h3>
            </Col>    
            <Col>
                <div>
                    <Button text="Calzados"/>
                    <Button text="Promos temporada"/>
                    <Button text="Party"/>
                    <Button text="Unicos"/> 
                </div>
            </Col>
            <Col>
                <div className="cW" >
                    <CartWidget />
                </div>  
            </Col>      
        </Row>  
        </Container>
            
    </nav>  
    
    </>
    ) 
        
}

export default NavBar;