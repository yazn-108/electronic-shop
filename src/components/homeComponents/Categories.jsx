import Cards from '../Cards/Cards'
import MainTitle from '../MainTitle'
import More from '../More'
import { useSelector } from 'react-redux'
const Categories = () => {
    const sections = useSelector(state => state.MainData)
    return (
        <div className='categories-sections'>
            {sections.map((section, i) => (
                <div key={i}>
                    <MainTitle title={section.sectionName} />
                    <More path={section.path} />
                    <Cards
                        All={false}
                        array={section.cardData} />
                </div>
            ))}
        </div>
    )
}
export default Categories
