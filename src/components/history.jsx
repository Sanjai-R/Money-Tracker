import React from "react";
import "../styles/history.css";

function History({ amount, remarks, date,time }) {
  const sign = amount < 0 ? "" : "+";
  return (
    <div className="history">
    
      <div className="Remarks"><h4>{remarks}</h4><h5 style={{fontWeight: 300}}>{date}  {time}</h5></div>
      <div className={amount < 0 ? "exp" : "inc"}>
        <p  >{sign}
        {amount}</p>
      </div>
    </div>
  );
}

export default History;

