import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputText from "./InputText";
import ButtonSubmit from "./Button";

function Login() {
  const [show, setShow] = useState(false);
  const [reg, setReg] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const regClose = () => setReg(false);
  const regShow = () => setReg(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        LOGIN
      </Button>
      <Button variant="outline-danger" onClick={regShow}>
        Register
      </Button>

      <Modal className="p-4" show={show} onHide={handleClose}>
        <h1 className="m-3 mb-0" style={{ color: "#BD0707" }}>
          Login
        </h1>
        <Modal.Body>
          <InputText type="email" placeholder="Email" />
          <InputText type="password" placeholder="Password" />
        </Modal.Body>
        <ButtonSubmit type="submit" text="LOGIN" />
        <p className="text-center mt-3">Dont have an Account? click here</p>
      </Modal>

      <Modal className="p-4" show={reg} onHide={regClose}>
        <h1 className="m-3 mb-0" style={{ color: "#BD0707" }}>
          Register
        </h1>
        <Modal.Body>
          <InputText type="text" placeholder="Full Name" />
          <InputText type="email" placeholder="Email" />
          <InputText type="password" placeholder="Password" />
        </Modal.Body>
        <ButtonSubmit type="submit" text="REGISTER" />
        <p className="text-center mt-3">Already have an account ? Click Here</p>
      </Modal>
    </>
  );
}

export default Login;
