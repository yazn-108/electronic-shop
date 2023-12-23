import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MoreProduct from './components/MoreProduct/MoreProduct'
const App = () => {
  const routes = useSelector(state => state.routes)
  const sections = useSelector(state => state.MainData)
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((page, i) => <Route path={page.path} element={page.ele} key={i} />)}
        {sections.map((section, i) => <Route path={section.path} element={<MoreProduct data={section} />} key={i} />)}
      </Routes>
    </BrowserRouter>
  )
}
export default App