import { Container } from 'react-bootstrap'
import Carousels from '../components/homeComponents/Carousels'
import Categories from '../components/homeComponents/Categories'
import NavBar from '../components/NavBar'
const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBar />
            <Carousels />
            <Container>
                <Categories />
            </Container>
        </div>
    )
}
export default HomePage
