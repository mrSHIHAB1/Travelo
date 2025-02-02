import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const Addtsp = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const photo = form.photo.value; 
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value; 
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value; 
        const usernamee=user.displayName;
        const emaill=user.email

        const newTouristSpot = {
            tourists_spot_name,
            photo,
            country_Name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            totaVisitorsPerYear,
            usernamee,
            emaill
        };

       
        console.log("New Tourist Spot:", newTouristSpot);
        fetch(`https://travelo-server-eta.vercel.app/spots`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title:'Success!',
                        text:'Spot added successfully',
                        icon:'success',
                        confirmButtonText:'Done'
                    })
                }
        })
        form.reset();
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
                                <input type="text" name="tourists_spot_name" placeholder="tourists_spot_name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo </span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">country_Name</span>
                                </label>
                                <input type="text" name="country_Name" placeholder="country_Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">location</span>
                                </label>
                                <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">short description</span>
                                </label>
                                <input type="text" name="short_description" placeholder="short description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">average_cost</span>
                                </label>
                                <input type="text" name="average_cost" placeholder="average_cost" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">seasonality</span>
                                </label>
                                <input type="text" name="seasonality" placeholder="seasonality" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">travel_time</span>
                                </label>
                                <input type="text" name="travel_time" placeholder="travel_time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">totaVisitorsPerYear </span>
                                </label>
                                <input type="text" name="totaVisitorsPerYear" placeholder="totaVisitorsPerYear" className="input input-bordered" required />
                            </div>
                            <div className="form-control col-span-2">
                                <input type="submit" value="Add Tourist Spot" className="btn bg-green-600 w-full" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtsp;
