import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Footer/footer.css'

export const Footer = () => {

  return (

    <footer className="footerMainContainer">
      <div className="container">
        <div className="footerRow">
          <div className="footer-col">
            <h4>Stokida</h4>
            <ul>
              <li><NavLink to={'/'}>About us</NavLink></li>
              <li><NavLink to={'/'}>Our services</NavLink></li>
              <li><NavLink to={'/'}>Privacy policy</NavLink></li>
              <li><NavLink to={'/'}>Affiliate program</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li><NavLink to={'/'}>FAQ</NavLink></li>
              <li><NavLink to={'/'}>Buy Equities/Options</NavLink></li>
              <li><NavLink to={'/'}>Sell Equities/Options</NavLink></li>
              <li><NavLink to={'/'}>Order status</NavLink></li>
              <li><NavLink to={'/'}>Payment options</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Portfolio</h4>
            <ul>
              <li><NavLink to={'/'}>Watch List</NavLink></li>
              <li><NavLink to={'/'}>Add To Watch List</NavLink></li>
              <li><NavLink to={'/'}>Remove from Watch List</NavLink></li>
              <li><NavLink to={'/'}>New Watch List</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <NavLink to={'/'}><i className="fab fa-facebook-f"></i></NavLink>
              <NavLink to={'/'}><i className="fab fa-twitter"></i></NavLink>
              <NavLink to={'/'}><i className="fab fa-instagram"></i></NavLink>
              <NavLink to={'/'}><i className="fab fa-linkedin-in"></i></NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

