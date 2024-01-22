import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../css/ExpenseApp/Modal.scss";
import Date from "./ModalComponents/Date";
import Expense from "./ModalComponents/Expense";
import Description from "./ModalComponents/Description";
import Payment from "./ModalComponents/Payment";
import Accessories from "./ModalComponents/Accessories";

const ExpenseModal = ({ show, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose} className="income-modal" dialogClassName="modal-90w">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Date />
          <div className="row">
            <div className="col-10">
              <Expense />
            </div>
            <div className="col-2 pkr-div">
                PKR
            </div>
          </div>
          <Description />
          <Accessories />
          <Payment />
        </Modal.Body>
        <Modal.Footer className="income-footer">
          <button className="addincome-btn">
            Add Expense
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpenseModal;

