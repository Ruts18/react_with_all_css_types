import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
const CardComp = () => {

  return (

    <Row>
      <Col>
        <Card style={{ backgroundColor: '#a1c8ff', boxShadow: "0 0 4px 1px #4d90fc", marginLeft: '15rem', width: '29rem', marginRight: '20px', marginTop: '30px', marginBottom: '3.5rem' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px', }}>Git</Card.Title>
            <Card.Text style={{ paddingTop: '2rem' }}>This is the first card.</Card.Text>
            <button type="button" class="btn btn-outline-dark">Dark One</button>
          </Card.Body>
        </Card>
      </Col>
      
      <Col>
        <Card style={{ backgroundColor: '#8bf5ff', boxShadow: "0 0 4px 1px #78f4ff", marginLeft: '2rem', width: '29rem', marginRight: '10px', marginTop: '30px', marginBottom: '3.5rem' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px', }}>Github</Card.Title>
            <Card.Text style={{ paddingTop: '2rem' }}>This is the second card.</Card.Text>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}
export default CardComp;

