import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisaCard from '../components/buyComponents/VisaCard'
const BuyPage = () => {
    return (
        <Container className='BuyPage'>
            <Link to={"/electronic-shop/Cart"}><Button variant="outline-primary">go back to cart</Button></Link>
            <VisaCard />
        </Container>
    )
}
export default BuyPage
