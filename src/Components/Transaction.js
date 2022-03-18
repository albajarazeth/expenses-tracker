import React from 'react'

export default function Transaction({ transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+'; 


  return (
    <div className='card shadow-sm justify-content-center' style={{margin: "auto", width: "24em", height: "2.5em", marginBottom: "5px", borderRadius: ".5em"}}>
    <li style={{ listStyleType:"none", margin:"0", padding:"0", display:"flex", justifyContent: "space-between"}}>
      
    <div style={{paddingLeft: "30px"}}>
        {transaction.text}
     </div>

     <div style={{paddingRight: "30px"}} className={transaction.amount < 0 ? 'text-danger fw-bold' : 'text-success fw-bold' }>
     {sign}${Math.abs(transaction.amount)}
      </div>
   </li>
   </div> 

  )
}
