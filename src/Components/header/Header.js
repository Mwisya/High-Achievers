import { useState } from 'react'
import Menu from '../menu/Menu';
import { Call, Close } from '@material-ui/icons'
import './header.css'

const Header = ({closemenu}) => {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true)
  } 
  function closeMenu() {
    setMenu(false)
  }
 
  return (
    <header>
        <div className="logo">
           <h1>HAsc</h1>
           <h5 className="motto">River of Exellence</h5>
        </div>
          <nav>
            <Menu />
          </nav>
          {
          menu ? 
             <button className='menu_icon' onClick={closeMenu}><Close/></button> :
             <button className="menu_icon" onClick={openMenu}>&#9776;</button> 
           }
          
          {
            menu && ( <div className='menu_open'>

              <Menu /> 
            </div> )
          }

        <div className="contacts">
            <div className="phone">
                <a href="tel:+25471234565" rel="noopener noreferrer"><Call className='icon'/> +25471234565</a>
                <a href="tel:+25471234565" rel="noopener noreferrer"><Call className='icon'/> +25471234565</a>
                <a href="tel:+25471234565" rel="noopener noreferrer"><Call className='icon'/>+25471234565</a>
            </div>
            <address>
                <p>Po Box 234-345</p>
                <p>Location: Mombasa</p>
                <a href="mailto:katula.jnr@gmail.com">email@gmail.com</a>
            </address>
        </div>
    </header>
  )
}

export default Header