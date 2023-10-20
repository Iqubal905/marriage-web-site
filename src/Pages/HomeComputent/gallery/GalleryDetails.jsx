import React, { useEffect, useState } from 'react';
import './Style.css'
const GalleryDetails = (image) => {
    
console.log(image.image);


// const [showModal, setShowModal] = useState(false);
const [imageSrc, setImageSrc] = useState('');

const handleImageClick = (src) => {
 
  setImageSrc(src);
  // setShowModal(true);
  document.getElementById('my_modal_5').showModal()
};

useEffect((src) =>{
  
    
  setImageSrc(src);
    // setShowModal(true);
    
},[])

const handleClose = () => {
 
   setImageSrc('');
  // setShowModal(true);
  
};

console.log('showModal:', imageSrc);
    return (

      //   <div className=''>
      //   <div className="image-container">
      //     <img
      //       src={image.image.img}
      //       alt="Click me to open modal"
      //       onClick={() => handleImageClick(image.image.img)}
      //     />
      //   </div>
      //   {showModal && (
            
   
   
      //     <div className="my-modal-box">
      //       <div className="">
             
      //         <h2 className=' text-2xl'>Image in Modal</h2>
      //         <img src={imageSrc} alt="Image in Modal" />
      //         <button onClick={() => setShowModal(false)}>Close</button>
      //       </div>
      //     </div>
      //   )}
      // </div>
  
  
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
             <img
             src={image.image.img}
             alt="Click me to open modal"
             onClick={() => handleImageClick(image.image.img)}
           />
 
  </div>

{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  
  <figure><img src={imageSrc} alt="Shoes" /></figure>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn"   onClick={handleClose}>Close</button>
      </form>
    </div>
  </div>
</dialog>

 

 </div>
    
    );
};

export default GalleryDetails;