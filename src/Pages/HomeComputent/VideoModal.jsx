import React from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';

const VideoModal = ({ videoUrl, isOpen, onRequestClose }) => {
  return (
  <div className=' '>
      <ReactModal
    
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
    >
      <div className=' bg-fuchsia-300 flex  justify-center '>
      <button  onClick={onRequestClose} className=" flex justify-center text-3xl btn-circle btn-ghost ">✕</button>
        
      </div>
      <div className=' flex  justify-center 
       '>
        <ReactPlayer url={videoUrl} controls playing />
      </div>
    </ReactModal>
  </div>
  );
};

export default VideoModal;
