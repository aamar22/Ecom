import React, { useState, useEffect } from "react";
import Sidenav from "../Components/Sidenav";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'accountNumber', headerName: 'Account Number', width: 130 },
  { field: 'ifsc', headerName: 'IFSC', width: 130 },
  { field: 'beneficiaryName', headerName: 'Beneficiary Name', width: 160 },
  { field: 'amount', headerName: 'Amount', width: 100 },
  { field: 'date', headerName: 'Date', width: 180 },
];

const Transaction = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
	// https://ominous-guacamole-64697grv4jq25xx5-5000.app.github.dev/api/v1/transaction/add
    axios.get('https://ominous-guacamole-64697grv4jq25xx5-5000.app.github.dev/api/v1/transaction/getAll')
      .then(response => {
        // Assuming each transaction object has `_id` as the unique identifier
        const formattedTransactions = response.data.map((transaction, index) => ({
          ...transaction,
          id: index + 1, // You can use `_id` from your API response if available
          date: new Date(transaction.date).toLocaleString() // Format date if needed
        }));
        setTransactions(formattedTransactions);
        toast.success('Transactions loaded successfully!');
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
        toast.error('Failed to load transactions');
      });
  }, []);

  const handleAddTransaction = () => {
    const newTransaction = {
      accountNumber,
      ifsc,
      beneficiaryName,
      amount,
      date: new Date().toISOString()
    };

    axios.post('https://ominous-guacamole-64697grv4jq25xx5-5000.app.github.dev/api/v1/transactions/add', newTransaction)
      .then(response => {
        setTransactions([...transactions, { ...response.data, id: transactions.length + 1 }]);
        setAccountNumber('');
        setIfsc('');
        setBeneficiaryName('');
        setAmount('');
        toast.success('Transaction added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the transaction!', error);
        toast.error('Failed to add transaction');
      });
  };

  return (
    <div className="test">
      <Sidenav />
      <h1>Transaction List</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
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

export default Transaction;

