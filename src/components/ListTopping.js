import React from "react";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DataTopping } from "../API/DummyTopping";
import formatPrice from "../utils/formatPrice";
import "../assets/Topping/StyleToping.css";

import ButtonSubmit from "../components/inputForm/Button";

export default function ListTopping(props) {
  const [checkedState, setCheckedState] = useState(
    new Array(DataTopping.lenght).fill(false)
  );
  const [total, setTotal] = useState(0);
  const handleOnChange = (position) => {
    const updateCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updateCheckedState);
    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + DataTopping[index].price;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

  // function Add() {
  //   // console.log(id);
  //   return setTotal(Number(total) + Number(DataTopping[0].price));
  // }
  return (
    <Container className="mt-5">
      <h4 className="mb-4" style={{ color: "#974A4A" }}>
        Toping
      </h4>
      <Row>
        {DataTopping.map((items, index) => (
          <Col md={3} className="text-center mb-3" key={index}>
            <input
              type="checkbox"
              id={`id-${index}`}
              onChange={() => handleOnChange(index)}
              className="toppingCeckbox"
            />
            <label htmlFor={`id-${index}`}>
              <img
                src={items.image}
                alt="123"
                id="toping"
                style={{ cursor: "pointer" }}
              />
            </label>
            <p htmlFor="toping">{items.name}</p>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 style={{ color: "#974A4A" }}>Total</h4>
        </Col>
        <Col>
          <h4 className="text-end" style={{ color: "#974A4A" }}>
            {formatPrice(props.ProductPrice + total)}
          </h4>
        </Col>
      </Row>
      <ButtonSubmit text="Add to Cart" />
    </Container>
  );
}
