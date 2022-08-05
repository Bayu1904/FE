import React from "react";

// components
import InputText from "../../components/inputForm/InputText";
import ButtonSubmit from "../../components/inputForm/Button";
import Header from "../../components/Header";

// reactBootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Topping from "../../assets/Rectangle 4Addtopping.png";

export default function AddProduct() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="w-75 mt-5">
        <Row>
          <Col sm={7} className="px-5">
            <form action="">
              <h1 className="mb-5">Add Product</h1>
              <InputText type="text" placeholder="Product Title" />
              <InputText type="text" placeholder="Price" />
              <InputText type="file" />
              <ButtonSubmit type="submit" text="AddTopping" />
            </form>
          </Col>
          <Col sm={5} className="text-center">
            <img src={Topping} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
