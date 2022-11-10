import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ApiList from '../Api/Api';
import CardItem from '../Item/CardItem';


function ItemListContainer () {
    
    return (
        <Container>
            <Row>
                <Col>
                <CardItem />
                </Col>
            </Row>
        </Container>
       
    )
}

export default ItemListContainer