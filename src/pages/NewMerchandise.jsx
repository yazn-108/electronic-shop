import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards/Cards'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'
const NewMerchandise = () => {
    const products = useSelector(state => state.MainData)
    const NewMerchandiseArray = []
    products.map((section) =>
        section.cardData.map(card =>
            moment().diff(moment(card.Date, 'MM/DD/YYYY'), "months") === 1 && NewMerchandiseArray.push(card)
        )
    )
    return (
        <>
            <NavBar />
            <Container className='categories-sections section'>
                <Cards
                    array={NewMerchandiseArray}
                    All={true}
                />
            </Container >
        </>
    )
}
export default NewMerchandise
