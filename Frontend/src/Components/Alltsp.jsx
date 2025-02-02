import  { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import Alltspcard from './Alltspcard';

const Alltsp = () => {
    const spotlist = useLoaderData();
    const [spots, setSpots] = useState(spotlist);
    const [sortBy, setSortBy] = useState(null);

    const handleSortByCost = () => {
        const sortedSpots = [...spots].sort((a, b) => a.average_cost - b.average_cost);
        setSpots(sortedSpots);
        setSortBy('cost');
    };
    
    return (
        <div>
       <div className='w-[200px] mx-auto mb-5'> <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Select</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li><a onClick={handleSortByCost}>Sort By Cost</a></li>
    
  </ul>
</div></div>
        <div className=' grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3'>
           {
          spots.map(spot=><Alltspcard key={spot._id}
          spots={spots}
          spot={spot}
          setsSpots={setSpots}
          >

          </Alltspcard>)
        }
        </div>
        </div>
    );
};

export default Alltsp;