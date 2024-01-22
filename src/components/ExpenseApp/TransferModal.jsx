import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../css/ExpenseApp/Modal.scss";
import Date from "./ModalComponents/Date";
import Transfer from "./ModalComponents/Transfer";
import Description from "./ModalComponents/Description";
import Category from "./ModalComponents/Category";
import Payment from "./ModalComponents/Payment";

const TransferModal = ({ show, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose} className="income-modal" dialogClassName="modal-90w">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Transfer Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Date />
          <div className="row">
            <div className="col-10">
              <Transfer/>
            </div>
            <div className="col-2 pkr-div">
                PKR
            </div>
          </div>
          <Description />
          <Category />
          <Payment />
        </Modal.Body>
        <Modal.Footer className="income-footer">
          <button className="addincome-btn">
            Transfer
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TransferModal;

