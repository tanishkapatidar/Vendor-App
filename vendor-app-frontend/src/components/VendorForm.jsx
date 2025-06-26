
import React, { useState } from "react";
import axios from 'axios';

const VenderForm =() => {
    const[vendor, setVendor] = useState({
        name:'',
        bankAccountNo: '',
        bankName:'',
        addressLine1: '',
        addressLine2: '',
        city:'',
        country:'',
        zipCode:'',
    });

    const handleChange =(e) => {
        setVendor({...vendor, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:500/api/vendors',vendor);
            alert('Vendor Created');
            window.location.reload();
        } catch (err){
            console.error(err);
            alert('Error creating vendor')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Vendor</h3>
            <input name="name" required placeholder="Vendor Name*" onChange={handleChange} /><br />
            <input name="bankAccountNo" required placeholder="Bank Account No*" onChange={handleChange} /><br />
            <input name="bankName" required placeholder="Bank Name*" onChange={handleChange} /><br />
            <input name="addressLine1" required placeholder="Address Line 1" onChange={handleChange} /><br />
            <input name="addressLine2" required placeholder="Address Line 2" onChange={handleChange} /><br />
            <input name="city" required placeholder="City" onChange={handleChange} /><br />
            <input name="country" required placeholder="Country" onChange={handleChange} /><br />
            <input name="zipCode" required placeholder="Zip Code" onChange={handleChange} /><br />
            <button type="submit"> Create Vendor</button>
        </form>
    );
};

export default VenderForm;
