import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import React from 'react'

export default function AddTransaction() {


  //date

  
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const fecha = new Date();
  const dateInfo = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());










  const [text, setText] = useState ('');
  const [amount, setAmount] = useState ('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) =>{
    e.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    console.log(dateInfo);
    addTransaction(newTransaction);

    text = ''
    
  }


  return (

    <form onSubmit={onSubmit}>

    <div className="mb-3" style={{width:"24em", margin: "auto",}}>
     <label htmlFor="text" className="form-label">Operacion</label>
     <input className="form-control"  type="text" value={text}  onChange={(event) => setText(event.target.value)} placeholder='Escribe la operacion..' />
    </div>
    
    <div className="mb-3" style={{width:"24em", margin: "auto"}}>
     <label htmlFor="amount" className="form-label">Monto</label>
     <input className="form-control" type="number"  value={amount}  onChange={(event) => setAmount(event.target.value)} placeholder='Ingresa el monto..' />
    </div>

    <button type="submit" className="btn btn-primary btn-lg">Agregar Movimiento</button>

    </form>
 
  )
}
