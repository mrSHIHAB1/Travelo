import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://travelo-server-eta.vercel.app/Countrylist`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
     
      {
    countries.map(county=>(
      <Link  key={county._id}  to={`/con/${county.Country}`}>
      <div  className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-[200px]" src={county.imgs} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{county.Country}</div>
          <p className="text-gray-700 text-base">
            {county.description}
          </p>
        </div>
       
      </div>
      </Link>
    ))
      }
    </div>
  );
};
export default Country;
