import React, { useState } from "react";
import '../styles/addTransaction.css';
import db from '../firebase/firebase_config';
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("Cash").add({
      Amount: parseInt(amount),
      Remarks: text,
      Date:  new Date().toLocaleDateString(),
      time : new Date().toLocaleTimeString()
    })
  };

  return (
    <>
      <h1>Add new transaction</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Add Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
