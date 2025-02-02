import { Link } from "react-router-dom";

const Touristspts = ({spot,spots,setspots}) => {
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
        totaVisitorsPerYear
    }=spot
    return (
        <div >
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl h-[400px]">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{tourists_spot_name}</h2>
    <p className="text-2xl">{country_Name}</p>
    <p className="font-semibold">Average Cost : ${average_cost}</p>
    <div className="card-actions justify-between">
      <div className="p-3 rounded-lg bg-gray-200 ">Season: {seasonality}</div>
      <Link to={`/viewdetails/${_id}`}><button className="btn bg-green-500">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Touristspts;