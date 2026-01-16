import React from 'react'

const DarkModeToggle = ({currentMode, modeToggle}) => {
  // TODO: Implement dark mode toggle logic
  function toggleMode () {
    modeToggle(!currentMode)
  }

  return (
    <button onClick={toggleMode}>{currentMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
  )
}

export default DarkModeToggle
