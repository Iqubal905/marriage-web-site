import React, { useState } from 'react';

import VideoModal from './VideoModal';
import img from '../../../src/assets/banner/banner/30.webp'
const Choice = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const videoUrl = 'https://www.youtube.com/watch?v=tyBJioe8gOs';

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
   

const imgWith = {
    width: '800px',
    height: '600px',
}


  const VideoIcon = () => {

    const iconStyle = {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const svgStyle = {
        display: 'block',
      };


    return (
      <div className="video-icon"
      style={iconStyle}
      
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={svgStyle}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="6"
            stroke="#3498db"
          />
          <polygon
            points="38,30 38,70 70,50"
            fill="#3498db"
          >
            <animate
              attributeName="points"
              begin="0s"
              dur="2s"
              values="38,30 38,70 70,50; 28,30 28,70 60,50; 38,30 38,70 70,50"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    );
  };


  const BulletIcon = ({ size, color }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || '16'}
        height={size || '16'}
        fill={color || 'black'}
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    );
  };


    return (
       <div className=' flex    justify-center  py-16  bg-gray-100'>

<div className='pr-12'>
        <h2 className=' font-bold text-3xl pb-5'>Why choose <span className=' text-red-600'>React-matrimony</span></h2>
     

     <div className='flex  align-middle '>
    <div className='pt-3 pr-2'>
    <BulletIcon size="16"  color="black" />
    </div>
     <h2 className=' font-semibold text-lg pt-2'>Register for Free!</h2>
     </div>

     <div className='flex  align-middle '>
    <div className='pt-2 pr-2'>
    <BulletIcon size="16"  color="black" />
    </div>
     <h2 className=' font-semibold text-lg py-1'>100% human verified profiles!</h2>
     </div>

     <div className='flex  align-middle '>
    <div className='pt-2 pr-2'>
    <BulletIcon size="16"  color="black" />
    </div>
     <h2 className=' font-semibold text-lg'>Chat, Voice & Video calling!</h2>
     </div>

     <div className='flex  align-middle '>
    <div className='pt-2 pr-2'>
    <BulletIcon size="16"  color="black" />
    </div>
     <h2 className=' font-semibold text-lg py-1'>Private, personalized, and highly confidential service!</h2>
     </div>

     <div className='flex  align-middle '>
    <div className='pt-2 pr-2'>
    <BulletIcon size="16"  color="black" />
    </div>
     <h2 className=' font-semibold text-lg pb-6'>Halal, safe and secured Matrimony site in Bangladesh!</h2>
     </div>
<button className="btn   bg-black text-white  font-semibold text-lg  px-5">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-60 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Find your partner
</button>
       </div>

<div>

        <div >

        </div>
         <div className="App relative pl-12">
     <div onClick={openModal} className=' absolute onClick={openModal}    right-44  top-28 cursor-pointer'> <VideoIcon></VideoIcon></div>
      <img src={img} alt=""  className=' w-full  h-80' />
     
      <VideoModal videoUrl={videoUrl} isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
</div>
       </div>
    );
};

export default Choice;