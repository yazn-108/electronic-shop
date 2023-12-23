import Cards from '../Cards/Cards'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
const Sale = () => {
    const products = useSelector(state => state.MainData)
    const SaleArray = []
    products.map((section) => section.cardData.map(card => card.discount !== false && SaleArray.push(card)))
    return (
        <Container className='categories-sections section'>
            <Cards
                array={SaleArray}
                All={true}
            />
        </Container >
    )
}
export default Sale
