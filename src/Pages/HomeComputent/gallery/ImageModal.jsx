import React from 'react';
import './Style.css'
function ImageModal({ imageSrc, closeModal }) {
  return (
    <div className="image-modal">
      <div className="modal-content">
      <button className="px-1 py-1 text-2xl text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> 
      <span  onClick={closeModal}>&times;</span></button>
       
        <img src={imageSrc} alt="Modal Image" />
      </div>
    </div>
  );
}

export default ImageModal;
