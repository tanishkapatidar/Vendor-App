import React , {useState} from 'react'
import VendorForm from '../components/VendorForm'
import VendorList from '../components/VendorList'

const Dashboard = () => {

    const [selectedVendor, setSelectedVendor] = useState(null);

    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };
    
    
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = '/';
        return null;
    }
    return (
        <div style={{padding:'2rem'}}>
            <h1>Vendor Dashboard</h1>
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
            <hr />
            <VendorForm 
                selectedVendor={selectedVendor}
                clearSelectedVendor={() => setSelectedVendor(null)}
            />

            <VendorList setSelectedVendor = {setSelectedVendor} />
        </div>
    );
};

export default Dashboard;