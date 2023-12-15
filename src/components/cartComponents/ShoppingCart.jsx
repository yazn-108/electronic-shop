/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MoreDetails from '../homeComponents/MoreDetails'
const ShoppingCart = () => {
    const CartProducts = useSelector(state => state.CartProducts)
    const dispatch = useDispatch()
    const [deleteNumber, setDeleteNumber] = useState("")
    const [info, setInfo] = useState(null)
    return (
        <Container className='categories-sections section'>
            {info && <MoreDetails Details={info} state={setInfo} />}
            <div className='cart-actions'>
                <Link to={"/"}><Button variant="outline-primary">go back</Button></Link>
                <div>All products({CartProducts.length})</div>
                <Button variant="primary">buy now</Button>
            </div>
            <div className='cards'>
                {
                    CartProducts.length ? CartProducts.map((e, i) => {
                        const productData = {
                            img: e.img,
                            title: e.title,
                            price: e.price,
                            text: e.text,
                            moreDetails: e.moreDetails,
                        }
                        return (
                            <Card key={i}>
                                <Card.Img variant="top" src={e.img} />
                                <Card.Body>
                                    <div className='title-price'>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Title className='price'>{e.price}$</Card.Title>
                                    </div>
                                    <Card.Text>{e.text}
                                    </Card.Text>
                                    <div className='buttons'>
                                        <Button onClick={() => {
                                            setDeleteNumber("")
                                            dispatch({ type: `${i}` })
                                        }} variant="outline-primary">remove</Button>
                                        <Button variant="outline-primary" onClick={() => setInfo(productData)}>more details</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }) : <h3 className='empty'>There are no products in the cart</h3>
                }
            </div>
        </Container>
    )
}
export default ShoppingCart