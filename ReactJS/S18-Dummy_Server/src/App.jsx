// import A from './component/contextAPI/A'
import './App.css'
import Nav from './component/Nav'
import Electronics from './pages/electronics/Electronics'
import Jewelery from './pages/jewelery/Jewelery'
import Men from './pages/men/Men'
import Women from './pages/women/Women'
function App() {
 

  return (
    <div className='appContainer'>
  <Nav/>
  <Electronics/>
  <hr />
  <Jewelery/>
  <hr />
  <Men/>
  <hr />
  <Women/>
    </div >
  )
}

export default App
