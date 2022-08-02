import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataBoba } from "../API/DummyAPI";

export default function login() {
  return (
    <Container className="mt-3">
      <h1>Lets Order </h1>
      <Row>
        {DataBoba.map((items, index) => (
          <Col className="mt-4">
            <Card
              className="bg-danger text-white"
              style={{ width: "18rem", border: 0, borderRadius: 20 }}
            >
              <Card.Img variant="top" src={items.image} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>{items.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
