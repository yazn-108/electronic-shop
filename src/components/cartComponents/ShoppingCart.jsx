import { useMemo, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MoreDetails from '../Cards/MoreDetails'
import { ArrowRight } from 'react-bootstrap-icons'
const ShoppingCart = () => {
    const CartProducts = useSelector(state => state.CartProducts)
    const dispatch = useDispatch()
    const [RenderPage, setRenderPage] = useState("")
    const [info, setInfo] = useState(null)
    const totalPrice = useMemo(() => {
        let i = 0
        CartProducts.map(e => i += e.count * (e.discount ? e.discount : e.price))
        return i
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CartProducts.length, RenderPage]);
    return (
        <Container className='categories-sections section'>
            {info && <MoreDetails Details={info} state={setInfo} />}
            <div className='cart-actions'>
                <Link to={"/"}><Button variant="outline-primary">go back</Button></Link>
                <div>All products({CartProducts.length})</div>
                <Link to={"/buy"}>
                    <Button variant="primary">buy now {totalPrice}$</Button>
                </Link>
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
                            count: e.count,
                            discount: e.discount,
                        }
                        return (
                            <Card key={i}>
                                <p className='count'>
                                    <span>Quantity {e.count}</span>
                                    <ArrowRight />
                                    <span className='totalPrice'>{`${e.count * (e.discount ? e.discount : e.price)}$`}</span>
                                </p>
                                <Card.Img variant="top" src={e.img} />
                                <Card.Body>
                                    <div className='title-price'>
                                        <Card.Title>{e.title}</Card.Title>
                                        {
                                            e.discount
                                                ? <Card.Title className='price sale'>{e.discount}$</Card.Title>
                                                : <Card.Title className='price'>{e.price}$</Card.Title>
                                        }
                                    </div>
                                    <Card.Text>{e.text}
                                    </Card.Text>
                                    <div className='buttons'>
                                        <Button onClick={() => {
                                            setRenderPage(Math.random() * 10)
                                            dispatch({ type: `${i}` })
                                        }} variant="outline-primary">-</Button>
                                        <Button variant="outline-primary" onClick={() => setInfo(productData)}>more details</Button>
                                        <Button onClick={() => {
                                            setRenderPage(Math.random() * 10)
                                            dispatch({ type: "", ProductData: productData })
                                        }} variant="outline-primary">+</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }) : <h3 className='empty'>There are no products in the cart</h3>
                }
            </div>
        </Container >
    )
}
export default ShoppingCart