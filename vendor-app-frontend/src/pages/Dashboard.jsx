import React , {useState} from 'react'
import VendorForm from '../components/VendorForm'
import VendorList from '../components/VendorList'
import './Dashboard.css';


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
        <div style={{padding: '2rem'}}>
            <div className="dashboard-header">
                <h1>Vendor Management</h1>
                <div className='user-info'>
                <span>Welcome, {user.name}</span>
                <button className="logout-btn" onClick={logout}>Logout</button>
                </div>
            </div>
            <VendorForm
                selectedVendor={selectedVendor}
                clearSelectedVendor={() => setSelectedVendor(null)}
            />
            <VendorList setSelectedVendor={setSelectedVendor} />
        </div>

    );
};

export default Dashboard;