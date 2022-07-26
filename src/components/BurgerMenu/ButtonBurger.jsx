import React, {useState} from 'react'
import './BurgerMenu.css'

function ButtonBurger({onToggleMobileMenu}) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
    onToggleMobileMenu()
  }

  return (
    <div className={`burger ${isActive && 'burger_active'}`} onClick={handleClick}>
      <span/>
    </div>
  )
}

export default ButtonBurger