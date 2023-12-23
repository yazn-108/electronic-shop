import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { ArrowRightCircleFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const More = ({ path }) => {
    return (
        <div className='more'>
            <Link to={path}>
                <Button variant="outline-primary">more</Button>
            </Link>
            <Link to={path}>
                <ArrowRightCircleFill className='icon' />
            </Link>
        </div>
    )
}
More.propTypes = {
    path: PropTypes.string,
}
export default More
