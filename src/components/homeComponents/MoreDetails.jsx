/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { XSquareFill } from 'react-bootstrap-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card } from 'react-bootstrap';
const MoreDetails = ({ Details, state }) => {
    return (
        <div className='more-details'>
            <div className='details-card'>
                <div className='img-container'>
                    <Card.Img variant="top" src={Details.img} />
                </div>
                <Card.Body>
                    <span className='title-price'>
                        <Card.Title>{Details.title}</Card.Title>
                        <Card.Title className='price'>{Details.price}$</Card.Title>
                    </span>
                    <Card.Text>{Details.text}</Card.Text>
                    <Swiper
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper moreImgs">
                        {Details.moreDetails.map((url, i) => <SwiperSlide key={i}><img src={url} alt='' /></SwiperSlide>)}
                    </Swiper>
                </Card.Body>
                <XSquareFill className='closeIcon' onClick={() => state(null)} />
            </div>
        </div>
    )
}
export default MoreDetails
