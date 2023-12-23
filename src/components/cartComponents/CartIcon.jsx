import { CartCheck } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const CartIcon = () => {
    const CartProducts = useSelector(state => state.CartProducts)
    return <Link to="/electronic-shop/Cart" className='cart-link'><CartCheck className='icon' /><span>{CartProducts.length}</span></Link>
}
export default CartIcon
