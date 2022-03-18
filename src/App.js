import AddTransaction from "./Components/AddTransaction";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";


import { GlobalProvider } from "./Components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div style={{ textAlign:"center" }}>
   <div className="card  text-center shadow" style={{width: "24em", borderRadius: "2em", margin:"auto" }}>
     <div className="card-body">
       <Balance />
       <IncomeExpenses />
     </div>   
    </div> 
    <TransactionList />
    <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
