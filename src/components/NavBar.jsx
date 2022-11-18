import Button from "./Buttons/Button";
import "../App.css";
import CartWidget from "./cartWidget/CartWidget";
import "./cartWidget/cartWidget.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import Logo from "./Venum-Logo-1280x725.png"



function NavBar() {
    return (
    <>
    <nav className="App-NavBar">  
        <Container>
        <Row>    
            <Col className="col-md-1 my-2">
                <Link to="/"><img src={Logo} alt=""  style={{width: '100px'}}/></Link>
            </Col>    
            <Col className="col-md-10 my-2" style={{textAlign:"center"}}>
                <div>
                    <Link to="/category/men's clothing"><Button text="men's clothing"/></Link>
                    <Link to="/category/jewelery"><Button text="jewelery"/></Link>
                    <Link to="/category/electronics"><Button text="electronics"/></Link>
                    <Link to="/category/women's clothing"><Button text="women's clothing"/></Link>   
                </div>
            </Col>
            <Col className="col-md-1 my-2">
                <div className="cW" >
                <Link style={{color:"white"}}><CartWidget /></Link>
                </div>  
            </Col>      
        </Row>  
        </Container>
            
    </nav>  
    
    </>
    ) 
        
}

export default NavBar;