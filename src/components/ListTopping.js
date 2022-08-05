import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DataTopping } from "../API/DummyTopping";

import ButtonSubmit from "../components/inputForm/Button";

export default function ListTopping(props) {
  const [total, setTotal] = useState([props.ProductPrice]);
  let Add = (event) => {
    console.log(event.target.getAttribute("data-arg1"));
    return setTotal(Number(total) + Number(DataTopping[event].price));
  };
  return (
    <Container className="mt-5">
      <h4 className="mb-4" style={{ color: "#974A4A" }}>
        Toping
      </h4>
      <Row>
        {DataTopping.map((items, index) => (
          <Col
            md={3}
            className="text-center mb-3"
            onClick={Add}
            data-arg1={index}
          >
            <img src={items.image} alt="123" />
            <p>{items.name}</p>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 style={{ color: "#974A4A" }}>Total</h4>
        </Col>
        <Col>
          <h4 className="text-end" style={{ color: "#974A4A" }}>
            {total}
          </h4>
        </Col>
      </Row>
      <ButtonSubmit text="Add to Cart" />
    </Container>
  );
}
