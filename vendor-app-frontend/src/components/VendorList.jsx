
import React ,{useEffect,useState} from "react";
import axios  from "axios";
import './VendorList.css';


const VendorList =({setSelectedVendor}) => {
    const [vendors, setVendors] = useState([]);
    const [page, setPage]= useState(1);

    const fetchVendors = async () => {
        const res = await axios.get(`http://localhost:5000/api/vendors?page=${page}&limit=5`);
        setVendors(res.data.vendors);

    };

    useEffect(() =>{
        fetchVendors();
    }, [page]);

    const deleteVendor = async (id) => {
        if( window.confirm('Delete this vendor?')) {
            await axios.delete(`http://localhost:5000/api/vendors/${id}`);
            fetchVendors();
        }
    };

    return (
        <div className="vendor-list">
            <h3>Vendors</h3>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th><th>Account</th><th>Bank</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(v => (
                        < tr key={v.id}>
                            <td>{v.name}</td>
                            <td>{v.bankAccountNo}</td>
                            <td>{v.bankName}</td>
                            <td>
                                <button className="action-btn delete-btn"onClick={() => deleteVendor(v.id)}>Delete</button>
                            </td>
                            <td>
                            <button className="action-btn edit-btn" onClick={() => setSelectedVendor(v)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</button>
                <span> Page {page} </span>
                <button onClick={() => setPage(p => p + 1)}>Next</button>
            </div>

        </div>
    );
};

export default VendorList;