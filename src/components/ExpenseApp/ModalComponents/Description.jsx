import React from "react";
import "../../../css/ExpenseApp/Modal.scss";

const Discription = () => {
  return (
    <div className="description-form">
      <textarea id="description" name="description" placeholder="Description" rows="4" cols="50" />
    </div>
  );
};

export default Discription;
