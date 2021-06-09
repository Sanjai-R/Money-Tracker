import React from "react";
import "../styles/history.css";

function History({ amount, remarks, date,time }) {
  const sign = amount < 0 ? "" : "+";
  return (
    <div className="history">
    
      <div className="Remarks"><h3>{remarks}</h3>{date}  {time}</div>
      <div className={amount < 0 ? "minus" : "plus"}>
        <h3>{sign}
        {amount}</h3>
      </div>
    </div>
  );
}

export default History;

