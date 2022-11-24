import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Footer/footer.css'

export const Footer = () => {
  const myFooterLinks1 = ['About us', 'Our services', 'Privacy policy', 'Affiliate program']

  const myFooterLinks2 = ["Faq's", 'Buy Equities/Options', 'Sell Equities/Options', 'Order status', 'Payment options']

  const myFooterLinks3 = ['Watch List', 'Add To Watch List', 'Remove from Watch List', 'New Watch List']

  const myFooterLinks4 = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin-in']

  return (

    <footer className="footerMainContainer">
      <div className="container">
        <div className="footerRow">
          <div className="footer-col">
            <h4>Stokida</h4>
            <ul>
              {myFooterLinks1.map((footerNavLinks) => <li><NavLink to={'/'}>{footerNavLinks}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              {myFooterLinks2.map((footerNavLinks) => <li><NavLink to={'/'}>{footerNavLinks}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Portfolio</h4>
            <ul>
              {myFooterLinks3.map((footerNavLinks) => <li><NavLink to={'/'}>{footerNavLinks}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              {myFooterLinks4.map((footerIcons) => <NavLink to={'/'}><i className={footerIcons}></i></NavLink>)}

            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

