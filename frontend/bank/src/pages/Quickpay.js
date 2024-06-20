import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import "../Style/style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Quickpay = () => {
	return (
        <div >
      <Sidenav/>
   <div className="testpay">   
          <div className="testone">   
          <h1>Quickpay</h1>
          <p>AccountNumber</p>
		  <TextField id="outlined-basic" label="AccountNumber" variant="outlined" />
		  <p>IFSC</p>
		 <TextField id="outlined-basic" label="IFSC" variant="outlined" />

     </div>
     <div className="testtwo">
     <p>Beneficiary Name</p>
		 <TextField id="outlined-basic" label="Bene Name" variant="outlined" />
     <p>Amount</p>
		 <TextField id="outlined-basic" label="Amount" variant="outlined" />
		 <p>payee will add in 30 mins</p>
		 <Button variant="contained">Pay now</Button>
		  </div>
      </div>
		</div>
	);
};

export default Quickpay;