import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs';

import '../HomeComputent/BrowseProfile.css'
const BrowsProfile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className=' text-center bg-gray-200 py-5 '>
           <h2 className=' text-4xl font-bold py-'>Browse Profiles</h2> 
           <p className='px-32 py-4'>We search in our system based on your preferences. With a paid membership,
             you can seamlessly connect with your prospects and get more responses.
             Browse the categories and Match with your partner.</p>
  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
    <div className='flex justify-center py-4'>
    <Tab>Division</Tab>
      <Tab>Education</Tab>
      <Tab>Living Country</Tab>
      <Tab>Profession</Tab>
    </div>
    </TabList>

<div className=' '>
<TabPanel>
     <div  className='flex justify-center'>
        <ul className='flex    px-96  flex-wrap justify-center '>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Sylhet</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Dhaka</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Barisal</a></li>
            
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Khulna</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Chittagong</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Rajshahi</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Mymensing</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Rangpur</a></li>
        </ul>
     </div>
    </TabPanel>
    <TabPanel>
    <div  className='flex justify-center'>
        <ul className='flex    px-96  flex-wrap justify-center '>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Doctorate</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Master</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Graduate</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Under Graduate</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Diploma</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">FCPS/MD</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">HSC/ A-label</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Professional Degree</a></li>
        </ul>
     </div>
    </TabPanel>
    <TabPanel>
    <div  className='flex justify-center'>
        <ul className='flex    px-96  flex-wrap justify-center '>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Bangladesh</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">UK</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">USA</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">India</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Italy</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">France</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Qater</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Brazil</a></li>
        </ul>
     </div>
    </TabPanel>
    <TabPanel>
    <div  className='flex justify-center'>
        <ul className='flex    px-96  flex-wrap justify-center '>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Accounting & Banking</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Beauty & Fashion</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Engineering</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Khulna</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Education & Training</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Defence</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Business</a></li>
            <li className=' bg-white  px-3 py-1 m-2 border  rounded-full border-black'><a href="#">Medical & Healthcare</a></li>
        </ul>
     </div>
    </TabPanel>
</div>
  </Tabs>
        </div>
    );
};

export default BrowsProfile;