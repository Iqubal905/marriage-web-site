import React from 'react';
import {  FaCheckCircle } from "react-icons/fa";
import { TbCircleXFilled } from "react-icons/tb";
import { BsSuitHeartFill, BsXCircleFill } from "react-icons/bs";
const Membership = () => {
    return (
        <div className=' text-center bg-gray-200 py-5 '>
        <h2 className=' text-4xl font-bold pt-6 pb-3'><span className=' text-red-600'>Membership</span> Plans</h2> 
        <p className='px-32 py-4  pb-14'>Primarily it`s free to search any profiles.
         Upgrade For customized the search. With a paid membership, you can
          seamlessly connect with your prospects and get more responses. 
        Many have found their love. Are you ready to meet your Soul Mate?</p>

  <div className='flex justify-center py-8'>
  <div className="card w-80 bg-base-100 shadow-xl ">
 
 <div className="card-body pl-4 ">
    <h2 className="card-title text-red-700 text-3xl font-bold pb-3">FREE</h2>
   <div>
    <ul className=''>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <FaCheckCircle/></span>
        <p>Search Profiles</p>
        </li>
        <li className='flex  text-justify pb-2'>
        <span className='pt-1 pr-3'> <FaCheckCircle/></span>
        <p>Shortlist & Send Interest</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <FaCheckCircle/></span>
        <p>Photo Album</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Chat & Messaging</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <BsXCircleFill/></span>
        <p>View contacts of members you like</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Priority customer support</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Profile Boost</p>
        </li>
    
    </ul>
   </div>
    <div className="card-actions justify-start py-5">
      <button className="btn   btn-secondary text-slate-50"><span><BsSuitHeartFill/></span> FREE REGISTER</button>
    </div>
  </div>
 
 </div>
<div className='card  rounded-none w-80 bg-base-100 shadow-xl  bg-red-700  -ml-2 -mt-6 -mb-6'>
<div>
 <div className="card-body text-white   pl-4 pt-14 ">
    <h2 className="card-title text-white text-3xl font-bold pb-3">PRO</h2>
   <div>
    <ul className=''>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <FaCheckCircle/></span>
        <p>Search Profiles</p>
        </li>
        <li className='flex  text-justify pb-2'>
        <span className='pt-1 pr-3'> <FaCheckCircle/></span>
        <p>Shortlist & Send Interest</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <FaCheckCircle/></span>
        <p>Photo Album</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Chat & Messaging</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2'> <BsXCircleFill/></span>
        <p>View contacts of members you like</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Priority customer support</p>
        </li>
        <li className='flex  text-justify pb-3'>
        <span className='pt-1 pr-2 '> <BsXCircleFill/></span>
        <p>Profile Boost</p>
        </li>
    
    </ul>
   </div>
    <div className="card-actions justify-start py-5">
      <button className="btn    bg-white  text-black"><span><BsSuitHeartFill/></span> BROWSE PLAN</button>
    </div>
  </div>
 </div>
</div>
  </div>


        </div>
    );
};

export default Membership;