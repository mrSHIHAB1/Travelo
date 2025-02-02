import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewdetailspage = () => {
    const spotlist=useLoaderData();

    const{
        _id,
        tourists_spot_name,
        photo,
        country_Name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        totaVisitorsPerYear,
        
    }=spotlist
    console.log(spotlist)
    return (
        <div className="hero w-full  bg-white mb-20">
         
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-full lg:w-[50%] bg-slate-200 flex justify-center h-[80%]'>
            <img className='o' src={photo} alt={tourists_spot_name} />
          </div>
          <div className='lg:w-[50%] space-y-5'>
            <h1 className="text-5xl font-bold">{tourists_spot_name}</h1>
            <div className='flex'><h1 className="text-xl font-semibold text-gray-600">Country: {country_Name}</h1>
            <h1 className="text-xl ml-5 font-semibold text-gray-900">Season: {seasonality}</h1></div>
            <hr />
            <div className="badge badge-secondary bg-yellow-200 text-black border-none rounded-sm mr-5"><p className='font-bold'>Location: </p>{location}</div>
            <div className="badge badge-secondary bg-green-200 text-black border-none rounded-sm"><p className='font-bold'>Total visitors per year: </p>{totaVisitorsPerYear}</div>
            <hr />
            <p className='font-bold bg-green-200 p-3 rounded-lg w-[80px]'>Details </p>
           <div className='flex'> <p className='font-bold'>Description  </p>
            <p> {short_description}</p></div>
            <div className='flex'><p className='font-bold'>Time to travel: </p>
            <p>{travel_time}</p></div>
           
            <button className="btn bg-white border-2 text-black mr-5">Average cost: {average_cost}</button>
            <button className="btn bg-yellow-400 text-white">Contact</button>
          </div>
        </div>
        <div className='w-full h-[400px]'>

        </div>
      </div>
      
    );
};

export default Viewdetailspage;