import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {

  

    
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/" className='menu__links' >Home</Link>
                </li>
                <li>
                    <Link to="/admission" className='menu__links' >Admissions</Link>
                </li>
                <li>
                    <Link to="/notice" className='menu__links' >Notice</Link>
                </li>
            </ul>

         

        </div>
    )
}


export default Menu