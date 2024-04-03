import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import ProductList from './pages/ProductList'
import {products} from './products'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList products={products} />} />
      </Routes>
    </div>

    <div className="product-list">
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
    </BrowserRouter>

  )
}

export default App
