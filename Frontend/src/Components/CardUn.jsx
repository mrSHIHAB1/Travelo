
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CardUn = () => {
    const { Country } = useParams();
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://travelo-server-eta.vercel.app/spots?country=${Country}`);
                const data = await response.json();
                // Filter the data based on matching country_Name
                const filteredData = data.filter(spot => spot.country_Name === Country);
                setCountryData(filteredData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchData();
    }, [Country]);

    if (!countryData) {
        return <div className='w-full mx-auto'><span className="loading loading-spinner loading-lg"></span></div>;
    }
    return (
        <div className=' grid md:grid-cols-2 gap-5 lg:grid-cols-3 '>
        {countryData.length === 0 ? (
                <p className='text-4xl text-center'> {Country} has no data added  at the moment.</p>
            ) : (
                countryData.map((spot) => (
                    <div key={spot._id} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                        <figure><img src={spot.photo} alt={spot.tourists_spot_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{spot.tourists_spot_name}</h2>
                            <p className="text-2xl">{spot.country_Name}</p>
                            <p className="font-semibold">Average Cost : ${spot.average_cost}</p>
                            <p className="font-semibold">Location : {spot.location}</p>
                            <div style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}><p className="">  {spot.short_description}</p></div>
                            <div className="card-actions justify-between">
                                <div className="p-3 rounded-lg bg-gray-200 ">Season: {spot.seasonality}</div>
                                <Link to={`/viewdetails/${spot._id}`}><button className="btn bg-green-500">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
    </div>
    );
};

export default CardUn;