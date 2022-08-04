import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LogoBrand from "../assets/logo-brand.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import InputText from "./inputForm/InputText";
import ButtonSubmit from "./inputForm/Button";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [show, setShow] = useState(false);
  const [reg, setReg] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const regClose = () => setReg(false);
  const regShow = () => setReg(true);
  useEffect(() => {
    if (reg) {
      handleClose();
    }
  }, [reg]);
  useEffect(() => {
    if (show) {
      regClose();
    }
  }, [show]);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LogoBrand}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="logo brand"
          />
        </Navbar.Brand>

        <div className="d-flex">
          <Button
            variant="outline-danger"
            className="px-4"
            onClick={handleShow}
          >
            Login
          </Button>
          <Button variant="danger" className="px-4 ms-2" onClick={regShow}>
            Register
          </Button>
          <Modal className="p-4" show={show} onHide={handleClose}>
            <h1 className="m-3 mb-0" style={{ color: "#BD0707" }}>
              Login
            </h1>
            <form action="">
              <Modal.Body>
                <InputText type="email" placeholder="Email" />
                <InputText type="password" placeholder="Password" />
              </Modal.Body>
              <ButtonSubmit type="submit" text="LOGIN" />
            </form>
            <p className="text-center mt-3">
              Dont have an Account? click{" "}
              <button
                className="link"
                style={{
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "white",
                  padding: 0,
                }}
                onClick={regShow}
              >
                here
              </button>
            </p>
          </Modal>

          <Modal className="p-4" show={reg} onHide={regClose}>
            <h1 className="m-3 mb-0" style={{ color: "#BD0707" }}>
              Register
            </h1>
            <form action="">
              <Modal.Body>
                <InputText type="text" placeholder="Full Name" />
                <InputText type="email" placeholder="Email" />
                <InputText type="password" placeholder="Password" />
              </Modal.Body>
              <ButtonSubmit type="submit" text="REGISTER" />
            </form>
            <div className="text-center my-3">
              Already have an account ? Click{" "}
              <button
                className="link"
                style={{
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "white",
                  padding: 0,
                }}
                onClick={handleShow}
              >
                here
              </button>
            </div>
          </Modal>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
