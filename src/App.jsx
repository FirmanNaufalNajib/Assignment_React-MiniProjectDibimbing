import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Home from './pages/Home'

function App() {
 return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
