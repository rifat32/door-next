import React from 'react';
import { Media } from 'react-bootstrap';


const ImageZoom = (props) => {
    const { image } = props;

    return (
        <Media src={`${image}`} alt={"slider image"} className="img-fluid image_zoom_cls-0" />
    );
}

export default ImageZoom;
