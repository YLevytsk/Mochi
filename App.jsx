/* eslint-disable no-unused-vars */
import React from "react";
import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <div>
      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;






