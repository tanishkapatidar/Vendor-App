
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './VendorForm.css';

const BE_URL = import.meta.env.VITE_BE_URL;

const VenderForm =({selectedVendor,clearSelectedVendor}) => {
    const initialForm ={
        name:'',
        bankAccountNo: '',
        bankName:'',
        addressLine1: '',
        addressLine2: '',
        city:'',
        country:'',
        zipCode:'',
    };

    const[vendor, setVendor] = useState(initialForm);

    useEffect(() => {
        if (selectedVendor){
            console.log('selectedVendor changed:', selectedVendor);
            setVendor(selectedVendor);
        }
    },[selectedVendor]);

    const handleChange =(e) => {
        setVendor({...vendor, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Submitting vendor:', vendor);
        try{
            if (vendor.id) {
                await axios.put(`${BE_URL}/api/vendors/${vendor.id}`, vendor);
                alert('Vendor Updated');
              } else {
                await axios.post(`${BE_URL}/api/vendors`, vendor);
                alert('Vendor Created');
              }
            setVendor(initialForm);
            clearSelectedVendor();
            // window.location.reload();
        } catch (err){
            console.error(err);
            alert('Error saving vendor')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3>{vendor.id ? "Edit Vendor": "Create Vendor"}</h3>
            <input name="name" required placeholder="Vendor Name*" value={vendor.name} onChange={handleChange}  /><br />
            <input name="bankAccountNo" required placeholder="Bank Account No*" value={vendor.bankAccountNo} onChange={handleChange} /><br />
            <input name="bankName" required placeholder="Bank Name*" value={vendor.bankName} onChange={handleChange} /><br />
            <input name="addressLine1" required placeholder="Address Line 1" value={vendor.addressLine1} onChange={handleChange} /><br />
            <input name="addressLine2" required placeholder="Address Line 2" value={vendor.addressLine2} onChange={handleChange} /><br />
            <input name="city" required placeholder="City" value={vendor.city} onChange={handleChange} /><br />
            <input name="country" required placeholder="Country" value={vendor.country} onChange={handleChange} /><br />
            <input name="zipCode" required placeholder="Zip Code" value={vendor.zipCode} onChange={handleChange} /><br />
            <div className="form-buttons">
                <button type="submit">{vendor.id ? "Update Vendor" : "Create Vendor"}</button>
                {vendor.id && (
                    <button type="button" onClick={() => {
                    setVendor(initialForm);
                    clearSelectedVendor();
                    }}>Cancel</button>
                )}
                </div>

        </form>
    );
};

export default VenderForm;
