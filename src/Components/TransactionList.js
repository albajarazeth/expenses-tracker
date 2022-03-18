import React, { useContext } from 'react'
import {GlobalContext} from './context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

 

  return (
    <>
    <ul style={{padding: "0", paddingTop: "30px"}}>
     {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />   ))}
        


        

    </ul>
    </>
  )
}
