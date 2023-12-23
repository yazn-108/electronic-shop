import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
import CartIcon from '../cartComponents/CartIcon'
const SearchPage = () => {
    const input = useRef()
    const products = useSelector(state => state.MainData)
    const [SearchData, setSearchData] = useState([])
    const Search = (e) => {
        const Check = products.flatMap(section => section.cardData.map(cardData => cardData.title.includes(e) ? cardData : null))
        const filterCheck = [...Check].filter(e => e !== null)
        setSearchData(filterCheck)
    };
    return (
        <div>
            <Form className="d-flex SearchBar">
                <Link to={"/nwe"} style={{ width: "fit-content" }}><Button variant="outline-primary">go back</Button></Link>
                <span className='SearchInputs'>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        ref={input}
                    />
                    <Button variant="outline-success" onClick={() => Search(input.current.value)}>Search</Button>
                </span>
                <CartIcon />
            </Form>
            <div className='categories-sections' style={{ padding: 10 }}>
                {
                    SearchData.length ?
                        <Cards
                            array={SearchData}
                            All={true}
                        />
                        : <h3 className='empty'>There are no products with this name</h3>
                }
            </div>
        </div>
    )
}
export default SearchPage
