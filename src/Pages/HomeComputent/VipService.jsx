import React from 'react';
import img from '../../assets/img.svg'
const VipService = () => {
    return (
        <div className=' text-center bg-gray-50 py-5 '>
          <h2 className=' text-4xl font-bold pt-6 pb-3'><span className=' text-red-600'>VIP Assistant </span> Service</h2> 
           <div className='grid grid-cols-2 gap-4'>
            <div className=' image-full  flex justify-end'>
              <img src={img} className=' mr-5 ' alt="photo" />
            </div>
            <div className=' text-left'>
            <ul className="steps steps-vertical  w-full">
  <li  data-content="●" className="step step-neutral w-full  pr-24 ">
    <p className=' border-2  text-left p-2 w-full  '>Assign Personal Advisor</p>
    </li>
    <li  data-content="●" className="step step-neutral w-full  pr-24 ">
    <p className=' border-2  text-left p-2 w-full  '>Advisor Will Manage Your Profile</p>
    </li>
    <li  data-content="●" className="step step-neutral w-full  pr-24 ">
    <p className=' border-2  text-left p-2 w-full  '>Handpick Matches For You</p>
    </li>
    <li  data-content="●" className="step step-neutral   w-full  pr-24 ">
    <p className=' border-2  text-left p-2 w-full  '>Arranging Meetings</p>
    </li>
</ul>
            </div>
            </div> 
        </div>
    );
};

export default VipService;