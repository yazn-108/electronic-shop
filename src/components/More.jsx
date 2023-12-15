import React from 'react'
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
export default More
