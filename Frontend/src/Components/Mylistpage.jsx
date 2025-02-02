import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2'
const Mylistpage = () => {
    const loadeduser = useLoaderData();
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const emailel = user.email;
                const filsp = loadeduser.filter(user => user.emaill === emailel);
                setUsers(filsp);
                setLoading(false);
            }
        };
        fetchData();
    }, [loadeduser, user]);

    const handleDelete = id => {
        console.log(users);
        fetch(`https://travelo-server-eta.vercel.app/spots/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {

                          Swal.fire({
                            
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          console.log('deleted successfully');
                          const remainingusers = users.filter(user => user._id !== id);
                           setUsers(remainingusers);
                        }
                      });
                   
                }
            })
    }
    
    if (loading) {
        return <div className='text-center flex w-[100px] mx-auto'><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div>
              <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Country Name</th>
                        <th className="px-4 py-2">Tourist Spot</th>
                        <th className="px-4 py-2">Seasonality</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((user, index) => (
                        <tr key={user._id} className="border-2 border-gray-300 text-center">
                            <td className="px-4 py-2">{user.usernamee}</td>
                            <td className="px-4 py-2">{user.country_Name}</td>
                            <td className="px-4 py-2">{user.tourists_spot_name}</td>
                            <td className="px-4 py-2">{user.seasonality}</td>
                            <td className="px-4 py-2 flex ">
                               <div className='mx-auto space-x-2'> <button onClick={() => handleDelete(user._id)} className="p-1 bg-red-500 text-white rounded-md ">Delete</button>
                               <Link to={`/update/${user._id}`}>  <button className="p-1 bg-blue-600 text-white rounded-md">Update</button></Link></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Mylistpage;
