import React, { useEffect, useState } from 'react';
import './Header.css'
import { Clear, Menu, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { useStateValue } from '../contextApi/StateProvider';
import { Link } from 'react-router-dom';

function Header()  {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  

  const [{basket}] = useStateValue();
  

  return (
    <section className='header'>
      <div className={click ? 'main-container' : ''} onClick={Close} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to='../' className='nav__logoLink'>
              <span className="logo1"><span className="logo__inner"></span></span>
          </Link>
          <div className='navMenu__cont'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item" >
                <Link to='../' className='header__links'><span className="nav-links">Home</span></Link>
              </li>
              <li className="nav-item" >
                <Link to='../games' className='header__links'><span className="nav-links">Games</span></Link>
              </li>
              <li className="nav-item" >
                <Link to='../games' className='header__links'><span className="nav-links">Explore</span></Link>
              </li>
              <li className="nav-item" >
                <span className="nav-links">Contact Us</span>
              </li>
                
            </ul>
            
          </div>

          <span className='nav__shoppingCart'>
              <Link to='/cart' className='header__linksBasket'><ShoppingCart  className='nav__basket' /> <span className='nav__counter'><span className="nav__cartName">Cart</span>({basket.length})</span></Link>
              <div className="nav-icon" onClick={handleClick}>
                {click ? <Clear /> : <Menu />}
              </div>
            </span>
              
        </div>
      </nav>
    </section>
  );
};

export default Header;
