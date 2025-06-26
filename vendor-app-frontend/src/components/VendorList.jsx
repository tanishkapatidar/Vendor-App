
import React ,{useEffect,useState} from "react";
import axios  from "axios";

const VendorList =() => {
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
        <div>
            <h3>Vendor List</h3>
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
                            <td>{bankName}</td>
                            <td>
                                <button onClick={() => deleteVendor(v,id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{marginTop:'1rem'}}>
                <button disabled ={ page <= 1} onClick={()=> setPage(p => p-1)}>Prev</button>

            </div>
        </div>
    );
};

export default VendorList;