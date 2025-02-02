import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center'>
        <div className='w-[600px] h-[200px] mt-32'>
        <h1 className=' text-6xl font-extrabold '>404 Not Found</h1>
        <Link to='/'><button className='h-[40px] w-[100px] ml-32 bg-blue-700 rounded-lg  text-white'>Go Home</button></Link></div>
        </div>
    );
};

export default Error;