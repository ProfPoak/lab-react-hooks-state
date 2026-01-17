import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setMode] = useState(false)
  // TODO: Implement state for cart management
  const [currentCart, setCart] = useState([])
  // TODO: Implement state for category filtering

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle currentMode={isDarkMode} modeToggle={setMode}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList  changeCart={setCart}/>

      {/* TODO: Implement and render Cart component */}
      <Cart displayCart={currentCart}/>
    </div>
  )
}

export default App
