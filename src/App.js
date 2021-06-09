import "./App.css";
import { useEffect, useState } from "react";
import { AddTransaction } from "./components/AddTransaction";
import db from "./firebase/firebase_config";
import Income from "./components/IncomeExpences";
import History from "./components/history";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = () => {
    db.collection("Cash").onSnapshot((querySnapShot) => {
      setData(
        querySnapShot.docs.map((doc) => ({
          id: doc.id,
          Amount: doc.data().Amount,
          date: doc.data().Date,
          remarks: doc.data().Remarks,
          time: doc.data().time
        }))
      );
    });
  };
  console.log(data);
  return (
    <div className="App">
      <h1 className="Header">Cash registration</h1>
      <Income data={data} />

      <div className="history-trans">
        <div className="trans">
        <p>Add new transaction</p>
          <AddTransaction />
        </div>

        <div className="his">
          <h1>History</h1>
          {data.map((item) => (
            <History
              remarks={item.remarks}
              amount={item.Amount}
              date={item.date}
              time = {item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
