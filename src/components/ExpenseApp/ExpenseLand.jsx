import React, { useState } from "react";
import IncomeModal from "./IncomeModal";
import ExpenseModal from "./ExpenseModal";
import TransferModal from "./TransferModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCog,
  faExchangeAlt
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../css/ExpenseApp/ExpenseLand.scss";
import logo from "../../Images/logo.png";
import Accounts from "./Accounts";

const ExpenseLand = () => {
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);

  const handleIncomeClick = () => {
    setShowIncomeModal(true);
  };
  const handleExpenseClick = () => {
    setShowExpenseModal(true);
  };
  const handleTransferClick = () => {
    setShowTransferModal(true);
  };

  const handleCloseIncomeModal = () => {
    setShowIncomeModal(false);
  };
  const handleCloseExpenseModal = () => {
    setShowExpenseModal(false);
  };
  const handleCloseTransferModal = () => {
    setShowTransferModal(false);
  };

  return (
    <>
      <div className="main-expense-div">
        <div className="container-fluid expense-header">
          <div className="row align-items-center">
            <div className="col-4 d-flex align-items-center">
              <img src={logo} width="50" height="50" className="mr-2" />
              <div className="d-flex flex-column align-items-start">
                <h5 className="d-inline-block align-middle mb-0 h-five">
                  Expense Manager
                </h5>
                <p className="d-inline-block align-middle mb-0 ml-2 align-items-end p-logo">
                  Manage expenses
                </p>
              </div>
            </div>
            <div className="col-5 btn-div d-flex justify-content-center align-items-center">
              <button className="income-btn" onClick={handleIncomeClick}>
                <FontAwesomeIcon icon={faPlus} /> <span> Income </span>
              </button>
              <button className="expense-btn" onClick={handleExpenseClick}>
                <FontAwesomeIcon icon={faMinus} /> <span> Expense </span>
              </button>
              <button className="transfer-btn" onClick={handleTransferClick}>
                <FontAwesomeIcon icon={faExchangeAlt} /> <span> Transfer </span>
              </button>
            </div>
            <div className="col-3 d-flex justify-content-end icon-div">
              <FontAwesomeIcon
                icon={faCog}
                style={{ color: "#a2a5a5", margin: "18px", fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Accounts />
      <IncomeModal
        show={showIncomeModal}
        handleClose={handleCloseIncomeModal}
      />
      <ExpenseModal
        show={showExpenseModal}
        handleClose={handleCloseExpenseModal}
      />
      <TransferModal
        show={showTransferModal}
        handleClose={handleCloseTransferModal}
      />
    </>
  );
};

export default ExpenseLand;
