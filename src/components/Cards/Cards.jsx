import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button, Card, } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import MoreDetails from './MoreDetails'
import { ArrowLeft } from 'react-bootstrap-icons'
const Cards = ({ array, All }) => {
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
                        count: e.count,
                        discount: e.discount,
                    }
                    if (count < 4 || All === true) {
                        count++
                        return (
                            <Card key={i}>
                                <Card.Img variant="top" src={e.img} />
                                <Card.Body>
                                    <div className='title-price'>
                                        <Card.Title>{e.title}</Card.Title>
                                        {
                                            e.discount ? (
                                                <Card.Title className='price sale'>
                                                    <span>{e.price}$</span>
                                                    <ArrowLeft />
                                                    <span>{e.discount}$</span>
                                                </Card.Title>
                                            ) : <Card.Title className='price'>{e.price}$</Card.Title>
                                        }
                                    </div>
                                    <Card.Text>{e.text}</Card.Text>
                                    <div className='buttons'>
                                        <Button onClick={() => dispatch({ type: "", ProductData: productData })} variant="outline-primary">
                                            add to cart
                                        </Button>
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
Cards.propTypes = {
    array: PropTypes.array,
    All: PropTypes.any,
}
export default Cards