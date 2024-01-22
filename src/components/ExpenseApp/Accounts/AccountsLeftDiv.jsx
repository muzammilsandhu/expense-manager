import React  from "react";
import '../../../css/ExpenseApp/Accounts.scss'; 

const AccountLeftDiv = () => {
  const bankAccountValue = 1234567.89;
  const creditCardValue = 98765.43;
  const easyPaisaValue = 25369.5;
  const jazzCashValue = 7643.91;

  const totalValue =
    bankAccountValue + creditCardValue + easyPaisaValue + jazzCashValue;
  return (
    <>
      <p>Total amount on accounts</p>
      <h3>Rs. {totalValue.toFixed(2)}</h3>
      <div className="line-accounts"></div>
      <h6>My Accounts</h6>
      <div className="row no-gutters my-accounts">
        <div className="col-6">
          <p>Bank account</p>
        </div>
        <div className="col-6">
          <p style={{ float: "right" }}>Rs. {bankAccountValue.toFixed(2)}</p>
        </div>
        <div className="col-6">
          <p>Credit Card</p>
        </div>
        <div className="col-6">
          <p style={{ float: "right" }}>Rs. {creditCardValue.toFixed(2)}</p>
        </div>
        <div className="col-6">
          <p>EasyPaisa</p>
        </div>
        <div className="col-6">
          <p style={{ float: "right" }}>Rs. {easyPaisaValue.toFixed(2)}</p>
        </div>
        <div className="col-6">
          <p>JazzCash</p>
        </div>
        <div className="col-6">
          <p style={{ float: "right" }}>Rs. {jazzCashValue.toFixed(2)}</p>
        </div>
        <div className="line-accounts"></div>
      </div>
    </>
  );
};

export default AccountLeftDiv;
