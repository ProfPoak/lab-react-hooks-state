import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setMode] = useState(false)
  // State for cart management
  const [currentCart, setCart] = useState([])
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all")

  function handleCategoryChange (e) {
    setCategory(e.target.value)
  }

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
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList  changeCart={setCart} filterCategory={category}/>

      <Cart displayCart={currentCart}/>
    </div>
  )
}

export default App
