import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
export default function ToggleButton() {
  let [isPressed, setIsPressed] = useState(false)
  
  const toggleIsPressed = () => {
    setIsPressed(!isPressed)
  }

  return (
    <>
      <button
        aria-pressed={isPressed}
        onClick={toggleIsPressed}
      >
        Toggle text
        <span aria-hidden="true" className="icon">▼</span>
      </button>

      {isPressed && <p>The button is pressed!</p>}
    </>
  )
}

