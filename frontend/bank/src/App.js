import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home"; 
import  Login from "./pages/Login"; 
import Beneficiary from "./pages/Beneficery";
import Quickpay from "./pages/Quickpay";
import Transaction from "./pages/Transaction";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path ="/" element={<Homepage/>}/>
     <Route path ="/Login" element={<Login/>}/>
     <Route path ="/Beneficery" element={<Beneficiary/>}/>
     <Route path ="/pay" element={<Quickpay/>}/>
     <Route path ="/transaction" element={<Transaction/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}
export default App;