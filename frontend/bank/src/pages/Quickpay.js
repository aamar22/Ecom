import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import "../Style/style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quickpay = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayNow = () => {
    const paymentData = {
      accountNumber,
      ifsc,
      beneficiaryName,
      amount,
    };
    
    axios.post('http://localhost:5000/api/v1/transaction/add', paymentData)
      .then(response => {
        // Handle success
        toast.success('Payment successful!');
        setAccountNumber('');
        setIfsc('');
        setBeneficiaryName('');
        setAmount('');
      })
      .catch(error => {
        // Handle error
        console.error('There was an error processing the payment!', error);
        toast.error('Payment failed!');
      });
  };

  return (
    <div>
      <Sidenav />
      <div className="testpay">
        <div className="testone">
          <h1>Quickpay</h1>
          <p>AccountNumber</p>
          <TextField 
            id="outlined-basic" 
            label="AccountNumber" 
            variant="outlined" 
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <p>IFSC</p>
          <TextField 
            id="outlined-basic" 
            label="IFSC" 
            variant="outlined" 
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
        </div>
        <div className="testtwo">
          <p>Beneficiary Name</p>
          <TextField 
            id="outlined-basic" 
            label="Bene Name" 
            variant="outlined" 
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
          />
          <p>Amount</p>
          <TextField 
            id="outlined-basic" 
            label="Amount" 
            variant="outlined" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p>payee will add in 30 mins</p>
          <Button variant="contained" onClick={handlePayNow}>Pay now</Button>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Quickpay;