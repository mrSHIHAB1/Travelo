
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Css/styles.css';
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import Touristspts from './Touristspts';
import { useState } from 'react';
import Country from './Country';

const Banner = () => {
  const dspots =useLoaderData();
  const[spots,setspots]=useState(dspots);
  const [text] = useTypewriter({
    words: ['TRAVELO', 'Your desired desitnation plan', 'Get connnected with us', 'Happy Journey'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/alltsp">
              <img src={i1} alt="Image 1" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/alltsp">
              <img src={i2} alt="Image 2" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/alltsp">
              <img src={i3} alt="Image 3" />
            </Link>
          </SwiperSlide>
        </Swiper>
        
        <div className='App text-center p-5 my-10'>
      <span className='text-6xl'>{text}</span>
      <Cursor  cursorColor='red' />
      
    </div>
    <h1 className='text-4xl font-semibold text-center my-10'>Tourist Spots</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       {
          spots.map(spot=><Touristspts key={spot._id}
          spots={spots}
          spot={spot}
          setspots={setspots}
          >

          </Touristspts>)
        }
       </div>
      <h1 className='text-4xl text-center font-bold p-5 my-24'>Visit Different Countries</h1>
      <div className=''>
      {
        <Country></Country>
      }
      </div>
      </>
    );
  };
  
  export default Banner;