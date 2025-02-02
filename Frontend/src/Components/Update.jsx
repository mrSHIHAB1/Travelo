import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const Update = () => {
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
    
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const tourists_spotname = form.tourists_spot_name.value;
        const countryName = form.country_Name.value;
        const locationn = form.location.value;
        const shortdes = form.short_description.value; 
        const avcost = form.average_cost.value; 
        const season = form.seasonality.value;
        const photoo = form.photo.value;
        const travtime = form.travel_time.value;
        const spotss  = { 
             tourists_spotname,
            photo,
            countryName,
            locationn,
            shortdes,
            season ,
            photoo,
            travtime,
            avcost }; 
        console.log(spotss)
        fetch(`https://travelo-server-eta.vercel.app/spots/${_id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(spotss)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title:'Success!',
                        text:'Coffe updated added successfully',
                        icon:'success',
                        confirmButtonText:'Done'
                    })
                }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Add The Tourist Spot</h1>
                        <p className="py-6">As an admin, you could add the tourist spot of a location based on your website demand. The spot will be recorded with the username and email automatically.</p>
                    </div>
                    <div className=" card w-full shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-3 p-5">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">tourists_spot_name</span>
                                </label>
                                <input type="text" defaultValue={tourists_spot_name} name="tourists_spot_name" placeholder="tourists_spot_name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo </span>
                                </label>
                                <input defaultValue={photo} type="text" name="photo" placeholder="Photo " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">country_Name</span>
                                </label>
                                <input defaultValue={country_Name} type="text" name="country_Name" placeholder="country_Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">location</span>
                                </label>
                                <input defaultValue={location}  type="text" name="location" placeholder="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">short description</span>
                                </label>
                                <input defaultValue={short_description}  type="text" name="short_description" placeholder="short description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">average_cost</span>
                                </label>
                                <input defaultValue={average_cost}  type="text" name="average_cost" placeholder="average_cost" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">seasonality</span>
                                </label>
                                <input defaultValue={seasonality}  type="text" name="seasonality" placeholder="seasonality" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">travel_time</span>
                                </label>
                                <input defaultValue={travel_time}  type="text" name="travel_time" placeholder="travel_time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">totaVisitorsPerYear </span>
                                </label>
                                <input defaultValue={totaVisitorsPerYear}  type="text" name="totaVisitorsPerYear" placeholder="totaVisitorsPerYear" className="input input-bordered" required />
                            </div>
                            <div className="form-control col-span-2">
                                <input type="submit" value="Update" className="btn bg-green-600 w-full" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;