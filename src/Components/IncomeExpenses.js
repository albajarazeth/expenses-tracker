import React, { useContext } from 'react';
import {GlobalContext} from './context/GlobalState'



export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    
    <div  className="row g-0">
        <div className="col">
        <p style={{ margin:"0", padding:"0" }} className="text-success">Ingresos</p>
        <p className="text-success fw-bolder fs-3">+${income}</p>
        </div>
        <div className="col">
            {/* Font Awesome Here */}
        </div>
        <div className="col">
        <p style={{ margin:"0", padding:"0" }} className="text-danger">Gastos</p>
        <p className="text-danger fw-bolder fs-3">-${expense}</p>
        </div>
        <p style={{color:"grey", marginBottom: "0"}}>Ver analiticas</p>
    </div>

  )
}
