/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from './Cards'
import MainTitle from '../MainTitle'
import More from '../More'
import { useSelector } from 'react-redux'
const Categories = () => {
    const sections = useSelector(state => state.sections)
    return (
        <div className='categories-sections'>
            {sections.map((section, i) => (
                <div key={i}>
                    <MainTitle title={section.sectionName} />
                    <More path={section.path} />
                    <Cards array={section.cardData} />
                </div>
            ))}
        </div>
    )
}
export default Categories
