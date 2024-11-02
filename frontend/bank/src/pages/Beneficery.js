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
];

const Beneficiary = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    // Fetch beneficiaries from APIhttps://sinister-spirit-qpr7gq9vg4j2xp4v-5000.app.github.dev/
    axios.get('http://localhost:5000/api/v1/beneficery/getAll')
      .then(response => {
        // Assuming each beneficiary object has `_id` as the unique identifier
        const formattedBeneficiaries = response.data.map((beneficiary, index) => ({
          ...beneficiary,
          id: index + 1 // You can use `_id` from your API response if available
        }));
        setBeneficiaries(formattedBeneficiaries);
        toast.success('Beneficiaries loaded successfully!');
      })
      .catch(error => {
        console.error('Error fetching beneficiaries:', error);
        toast.error('Failed to load beneficiaries');
      });
  }, []);

  const handleAddBeneficiary = () => {
    const newBeneficiary = {
      accountNumber,
      ifsc,
      beneficiaryName
    };

    // Add beneficiary
    axios.post('http://localhost:5000/api/v1/beneficery/add', newBeneficiary)
      .then(response => {
        const addedBeneficiary = {
          ...response.data,
          id: beneficiaries.length + 1 // Assuming new beneficiary's id based on current length
        };
        setBeneficiaries([...beneficiaries, addedBeneficiary]);
        setAccountNumber('');
        setIfsc('');
        setBeneficiaryName('');
        toast.success('Beneficiary added successfully!');
      })
      .catch(error => {
        console.error('Error adding beneficiary:', error);
        toast.error('Failed to add beneficiary');
      });
  };

  return (
    <div className="testbox">
      <Sidenav/>
      <div className="box1">
        <h1>Beneficiary</h1>
        <h3>Account Number</h3>
        <TextField 
          id="outlined-basic" 
          label="Account Number" 
          variant="outlined"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <h3>IFSC</h3>
        <TextField 
          id="outlined-basic" 
          label="IFSC" 
          variant="outlined"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
        />
        <h3>Beneficiary Name</h3>
        <TextField 
          id="outlined-basic" 
          label="Bene Name" 
          variant="outlined"
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
        />
        <p>payee will add in 30 mins</p>
        <Button variant="contained" onClick={handleAddBeneficiary}>ADD</Button>
      </div>
      <div className="element2">
      <h1>Beneficiary List</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={beneficiaries}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
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

export default Beneficiary;
