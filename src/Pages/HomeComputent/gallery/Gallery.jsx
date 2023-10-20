import React, { useEffect, useState } from 'react';
import GalleryDetails from './GalleryDetails';

import './Style.css'
const Gallery = () => {

    const [gallery, setGallery] = useState([]);
   
    useEffect(() => {
        fetch('Gallery.json')
            .then(res => res.json())
            .then(data => {
                setGallery(data);
             
                });
    }, [])

   

    return (
      <div className=' bg-slate-100 '>
        
        <h2 className=' text-center text-4xl font-bold  pt-8 pb-5'><span className=' text-red-600'>Gallery</span></h2> 
        <div className='grid md:grid-cols-3 gap-4 my-modal'>
              {

                    gallery.map(item => <GalleryDetails
                        key={item._id}
                        image={item}
                    ></GalleryDetails>)
                }
        </div>
      </div>
    );
};

export default Gallery;