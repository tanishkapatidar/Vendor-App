import React from 'react'
import VendorForm from '../components/VendorForm'
import VendorList from '../components/VendorList'

const Dashboard = () => {
    return (
        <div style={{padding:'2rem'}}>
            <h1>Vendor Dashboard</h1>
            <VenderForm />
            <VendorList />
        </div>
    );
};

export default Dashboard;