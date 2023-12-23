import PropTypes from 'prop-types'
const MainTitle = ({ title }) => <h3 className='MainTitle'>{title}</h3>
MainTitle.propTypes = {
    title: PropTypes.string,
}
export default MainTitle
