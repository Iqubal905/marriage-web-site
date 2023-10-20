import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal'; // Import your modal component
import './Style.css'
function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const [gallery, setGallery] = useState([]);
   
  useEffect(() => {
      fetch('Gallery.json')
          .then(res => res.json())
          .then(data => {
              setGallery(data);
           
              });
  }, [])


  return (
   <div className=' '>
     <div className="  my-modal grid grid-cols-4 gap-4 image-gallery ">
      {gallery.map((image, index) => (
        <img
          key={index}
          src={image?.img}
          alt={`Image ${index + 1}`}
          onClick={() => handleImageClick(image?.img)}
        />
      ))}

      {modalOpen && (
        <ImageModal imageSrc={selectedImage} closeModal={closeModal} />
      )}
    </div>
   </div>
  );
}

export default ImageGallery;
