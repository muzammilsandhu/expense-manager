import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../css/ExpenseApp/Modal.scss";

const AmountInput = () => {
  const [amountValue, setAmountValue] = useState("");

  const handleAmountChange = (event) => {
    const { value } = event.target;
    const onlyDigits = /^[0-9]*$/;

    if (onlyDigits.test(value) || value === "") {
      setAmountValue(value);
    }
  };

  return (
    <>
      <Form.Control
        className="income-form"
        type="text"
        placeholder="Income"
        value={amountValue}
        onChange={handleAmountChange}
      />
    </>
  );
};

export default AmountInput;
