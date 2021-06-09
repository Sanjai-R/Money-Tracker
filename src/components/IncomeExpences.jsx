import React, { useEffect, useState } from "react";
import "../styles/inc-exp.css";
import Countup from "react-countup";
function IncomeExpences({ data }) {
  const [amounts, setAmount] = useState([]);
  useEffect(() => {
    const getAmount = () => {
      data && setAmount(data.map((item) => item.Amount));
    };
    getAmount();
  }, [data]);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  const balance = income - expense;
  return (
    <div>
      <div>
        <h2>Hey you,</h2>
        <h3>“Today save your money tomorrow the money will save you!”</h3>
      </div>
      <div  className="balance">
      <h2>Your Balance</h2><h3><Countup
                  start={0}
                  end={balance}
                  duration={1.6}
                  separator=","
                /></h3>
      </div>
      <div>
        <div className="inc-exp-container">
          <div>
            <h2>Income</h2>
            <h3 className="money plus"><Countup
                  start={0}
                  end={income}
                  duration={1.6}
                  separator=","
                /></h3>
          </div>
          <div>
            <h2>Expense</h2>
            <h3 className="money minus"><Countup
                  start={0}
                  end={expense}
                  duration={1.6}
                  separator=","
                /></h3>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default IncomeExpences;
