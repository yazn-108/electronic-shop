import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainTitle from '../MainTitle'
import Cards from '../Cards/Cards'
const MoreCategories = ({ data }) => {
    window.scrollTo({ top: 0 })
    return (
        <Container className='categories-sections section'>
            <MainTitle title={data.sectionName} />
            <Link to={"/"} style={{ width: "fit-content" }}><Button variant="outline-primary">go back</Button></Link>
            <Cards
                array={data.cardData}
                All={true}
            />
        </Container >
    )
}
MoreCategories.propTypes = {
    data: PropTypes.object,
}
export default MoreCategories
