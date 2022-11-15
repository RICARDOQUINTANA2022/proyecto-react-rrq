import Button from "./Buttons/Button";
import "../App.css";
import CartWidget from "./cartWidget/CartWidget";
import "./cartWidget/cartWidget.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import Logo from "./fordlogo2.png"


function NavBar() {
    return (
    <>
    <nav className="App-NavBar">  
        <Container>
        <Row>    
            <Col className="col-md-1 my-2">
                <Link to="/"><img src={Logo} alt=""  style={{width: '150px'}}/></Link>
            </Col>    
            <Col className="col-md-10 my-2" style={{textAlign:"center"}}>
                <div>
                    <Link to="Usados"><Button text="Usados"/></Link>
                    <Link to="okm"><Button text="0 KM"/></Link>
                    <Link to="pick"><Button text="Pick"/></Link>
                    <Link to="Unicos"><Button text="Unicos"/></Link>   
                </div>
            </Col>
            <Col className="col-md-1 my-2">
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