/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainTitle from '../MainTitle'
import { useDispatch } from 'react-redux'
import MoreDetails from '../homeComponents/MoreDetails'
const MoreCategories = ({ data }) => {
    const dispatch = useDispatch()
    const [info, setInfo] = useState(null)
    return (
        <Container className='categories-sections section'>
            {info && <MoreDetails Details={info} state={setInfo} />}
            <MainTitle title={data.sectionName} />
            <Link to={"/"} style={{ width: "fit-content" }}><Button variant="outline-primary">go back</Button></Link>
            <div className='cards'>
                {
                    data.cardData.map((e, i) => {
                        const productData = {
                            img: e.img,
                            title: e.title,
                            price: e.price,
                            text: e.text,
                            moreDetails: e.moreDetails
                        }
                        return (< Card key={i} >
                            <Card.Img variant="top" src={e.img} />
                            <Card.Body>
                                <div className='title-price'>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Title className='price'>{e.price}$</Card.Title>
                                </div>
                                <Card.Text>{e.text}
                                </Card.Text>
                                <div className='buttons'>
                                    <Button onClick={() => dispatch({ type: "", ProductData: productData })} variant="outline-primary">add to cart</Button>
                                    <Button variant="outline-primary" onClick={() => setInfo(productData)}>more details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        )
                    }
                    )
                }
            </div >
        </Container >
    )
}
export default MoreCategories
