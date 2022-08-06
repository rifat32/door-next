import React, { useEffect, useRef, useState } from 'react'
import { Media, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { BACKEND } from '../../../config';
import ImageZoom from './image-zoom';
// import { Container, Row, Col, Media } from "reactstrap";

const SlickSlider = ({product}) => {
    let images = [
        ...product.images,
       {
        file:product.image
       },
       ...product.colors.map(el => {
    return {
    file:el.color_image
    };
       })
       
    
      ]

    //   slick 
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();
 
    var productsSlider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
      };
      var productsnav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true,
      };
      useEffect(() => {
        setState({
          nav1: slider1.current,
          nav2: slider2.current,
        });
      }, [images.length]);

    const { nav1, nav2 } = state;

    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
      };
    
      const changeColorVar = (img_id) => {
        slider2.current.slickGoTo(img_id);
      };
    
     
  return (
    <Row>
    <Col lg="6" className="product-thumbnail">
      <Slider
        {...productsSlider}
        asNavFor={nav2}
        ref={(slider) => (slider1.current = slider)}
        className="product-slick"
      >
        {images.map((image, index) => (
          <div key={index}>
            <ImageZoom image={`${BACKEND}/${image.file}`} />
          </div>
        ))}
      </Slider>
      <Slider
        className="slider-nav"
        {...productsnav}
        asNavFor={nav1}
        ref={(slider) => (slider2.current = slider)}
      >
        {images.length
          ? images.map((image, index) => (
              <div key={index}>
                <Media
                  src={`${BACKEND}/${image.file}`}
                  key={index}
                  alt={"slider image"}
                  className="img-fluid"
                />
              </div>
            ))
          : ""}
      </Slider>

      </Col>
   
    {/* <Col lg="6" className="rtl-text">
      <DetailsWithPrice
        item={data.product}
        changeColorVar={changeColorVar}
      />
    </Col> */}
  </Row>
  )
}

export default SlickSlider