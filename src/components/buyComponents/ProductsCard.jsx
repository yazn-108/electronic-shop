// import { useEffect, useRef, useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import MoreDetails from '../Cards/MoreDetails'
// const ProductsCard = () => {
//     const CartProducts = useSelector(state => state.CartProducts)
//     const dispatch = useDispatch()
//     const [deleteNumber, setDeleteNumber] = useState("")
//     const [info, setInfo] = useState(null)
//     const container = useRef()
//     const [moreState, setMoreState] = useState("more")
//     useEffect(() => {
//         container.current.parentNode.querySelector(".more").style.display = CartProducts.length > 3 ? "block" : "none";
//         container.current.parentNode.querySelector("header").style.display = CartProducts.length > 0 ? "flex" : "none";
//     }, [CartProducts.length])
//     const ContainerHeight = () => {
//         if (moreState === "close") {
//             container.current.style.maxHeight = `calc((90px + 20px + 20px) * 3)`
//             setMoreState("more")
//         } else {
//             container.current.style.maxHeight = `calc((90px + 20px + 20px) * ${CartProducts.length})`
//             setMoreState("close")
//         }
//     }
//     return (
//         <>
//             <div ref={container} className='buyPageCards' >
//                 {info && <MoreDetails Details={info} state={setInfo} />}
//                 {
//                     CartProducts.length ? CartProducts.map((e, i) => {
//                         const productData = {
//                             img: e.img,
//                             title: e.title,
//                             price: e.price,
//                             text: e.text,
//                             moreDetails: e.moreDetails,
//                             count: e.count,
//                             discount: e.discount,
//                         }
//                         return (
//                             <Card key={i}>
//                                 <Card.Img src={e.img} />
//                                 <Card.Title>{e.title}</Card.Title>
//                                 {
//                                     e.discount
//                                         ? <Card.Title className='price sale'>{e.discount}$</Card.Title>
//                                         : <Card.Title className='price'>{e.price}$</Card.Title>
//                                 }
//                                 <Card.Title className='price'>{e.count * (e.discount ? e.discount : e.price)}$</Card.Title>
//                                 <div className='actions'>
//                                     <div className='add-remove'>
//                                         <Button onClick={() => {
//                                             setDeleteNumber(Math.random() * 10)
//                                             dispatch({ type: `${i}` })
//                                         }} variant="outline-primary">-</Button>
//                                         <span>{e.count}</span>
//                                         <Button onClick={() => {
//                                             setDeleteNumber(Math.random() * 10)
//                                             dispatch({ type: "", ProductData: productData })
//                                         }
//                                         } variant="outline-primary">+</Button>
//                                     </div>
//                                     <Button variant="primary" className='moreDetails' onClick={() => setInfo(productData)}>more details</Button>
//                                 </div>
//                             </Card>
//                         )
//                     }) : <h3 className='empty'>No product has been added to the cart</h3>
//                 }
//             </div>
//             <div className='more'>
//                 <Button variant="primary" onClick={() => ContainerHeight()}>{moreState}</Button>
//             </div>
//         </>
//     )
// }
// export default ProductsCard
