import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    
    //destructured the variables in the parameter of the map below
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    return (
        <div className="image-list">{images}</div>
    )
};

export default ImageList;