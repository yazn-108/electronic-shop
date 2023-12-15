/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button, Card, } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import MoreDetails from './MoreDetails'
const Cards = ({ array }) => {
    const dispatch = useDispatch()
    let count = 0
    const [info, setInfo] = useState(null)
    return (
        <div className='cards'>
            {info && <MoreDetails Details={info} state={setInfo} />}
            {
                array.map((e, i) => {
                    const productData = {
                        img: e.img,
                        title: e.title,
                        price: e.price,
                        text: e.text,
                        moreDetails: e.moreDetails,
                    }
                    if (count < 4) {
                        count++
                        return (
                            <Card key={i}>
                                <Card.Img variant="top" src={e.img} />
                                <Card.Body>
                                    <div className='title-price'>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Title className='price'>{e.price}$</Card.Title>
                                    </div>
                                    <Card.Text>{e.text}</Card.Text>
                                    <div className='buttons'>
                                        <Button onClick={() => dispatch({ type: "", ProductData: productData })} variant="outline-primary">add to cart</Button>
                                        <Button variant="outline-primary" onClick={() => setInfo(productData)}>more details</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }
                })
            }
        </div>
    )
}
export default Cards