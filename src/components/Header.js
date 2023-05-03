import React from 'react'
import Logo from "../Nobg2.png";
import Eth from "../Injective.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className='leftH'>
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className='headerItem'>Swap</div>
        </Link>
      </div>
      <div className='rightH'>
          <div className='headerItem'>
            <img src={Eth} alt="eth" className="eth" />
            Injective
          </div>
        <div className='connectButton'>
          Connect
        </div>
      </div>

    </header>
  )
}

export default Header