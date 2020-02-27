import React from "react";
import ImageGalleryitem from "./ImageGalleryItem";
import Styles from "./Gallery.module.css";
import Modal from "./Modal";

const ImageGallery = ({ images, handleModal, isModalOpen, currentImage, closeModal }) => {
  return (
    <div>
      <ul className={Styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryitem
            image={image}
            key={image.id}
            handleModal={handleModal}
          />
        ))}
      </ul>
      {isModalOpen && <Modal handleModal={handleModal} image={currentImage} closeModal={closeModal}/>}
    </div>
  );
};

export default ImageGallery;
