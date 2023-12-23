import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards/Cards'
import { useSelector } from 'react-redux'
const BestSellerPage = () => {
    const products = useSelector(state => state.MainData)
    const BestSellerArray = []
    products.map((section) => section.cardData.map(card => card.BestSeller === true && BestSellerArray.push(card)))
    return (
        <>
            <NavBar />
            <Container className='categories-sections section'>
                <Cards
                    array={BestSellerArray}
                    All={true}
                />
            </Container >
        </>
    )
}
export default BestSellerPage
