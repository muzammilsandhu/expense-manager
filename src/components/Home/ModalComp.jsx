import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../../css/Home/ModalComp.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import google from "../../Images/google.png";
import logo from "../../Images/logo.png";

const ModalComp = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");

  const handleClose = () => setShowModal(false);

  const isEmailEmpty = email.trim() === "";

  const history = useHistory();

  const handleContinue = (e) => {
    e.preventDefault();
    history.push('../ExpenseApp/ExpenseLand');
  }
  

  return (
    <>
      <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w" className="modal-comp">
        <Modal.Header>
          <img alt="logo" src={logo} width="60" height="50" />
          <Modal.Title style={{ marginLeft: "10px" }}>
            Expense Manager
          </Modal.Title>
          <h4>
            Preferred by <span>Netflix</span>, <span>myBiz</span>,{" "}
            <span>P&G</span>, <span>Bajaj</span> & <span>46,000+</span>{" "}
            business. Join the big league!
          </h4>
          <ul>
            <li>
              <span>Free Expense Management</span> Tool
            </li>
            <li>
              <span>Simplified</span> Business Travel
            </li>
            <li>
              <span>Zero Subscription</span> Cost
            </li>
          </ul>
        </Modal.Header>
        <Modal.Body>
          <p>LOGIN/SIGN UP</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Work Email</Form.Label>
              <a href="#">Forgot Login Id?</a>
              <Form.Control
                type="email"
                placeholder="Enter your work email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <Button
                type="submit"
                disabled={isEmailEmpty}
                className="continue-btn"
                onClick={handleContinue}
                style={
                  isEmailEmpty
                    ? {
                        backgroundColor: "gray",
                        color: "white",
                        marginLeft: "8px",
                        padding: "9px 23px",
                        border: "none",
                        borderRadius: "3px",
                        marginTop: "-5px",
                      }
                    : {
                        marginLeft: "8px",
                        padding: "9px 23px",
                        border: "none",
                        borderRadius: "3px",
                        background:
                          "linear-gradient(90deg, rgb(22, 65, 171), rgb(96, 151, 162))",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: "-5px",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                      }
                }
              >
                CONTINUE
              </Button>
            </Form.Group>
          </Form>
          <p style={{ paddingTop: "15px" }}>OR USE OR BUSINESS ACCOUNT WITH</p>
          <div className="parent-container">
            <div className="google-div">
              <img src={google} width="22" height="22" alt="google_icon" />
            </div>
          </div>
          <p style={{ fontSize: "12px", fontWeight: "500", paddingTop: "8px" }}>
            By proceeding, you agree to MakeMyTrip's{" "}
            <span style={{ color: "#4b95cd" }}>T&Cs</span> and{" "}
            <span style={{ color: "#4b95cd" }}>Privacy</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComp;
