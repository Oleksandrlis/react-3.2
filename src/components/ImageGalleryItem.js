import React from "react";
import Styles from "./Gallery.module.css";



const ImageGalleryItem = ({image, handleModal}) => {
    console.log('image', image)
    
  return (
    <li className={Styles.ImageGalleryItem} >
      <img src={image.webformatURL} alt="" id={image.id} className={Styles.ImageGalleryItemImage} onClick = {(e) => handleModal(e)}/>
    </li>
  );
};

export default ImageGalleryItem;



