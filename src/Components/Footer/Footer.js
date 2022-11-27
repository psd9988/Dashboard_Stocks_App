import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Footer/footer.css'

export const Footer = () => {
  const myFooterLinks1 = [{text:'About Us', location: 'aboutus'}, {text: 'Our Services', location: 'ourservices'}, 
{text: 'Privacy Policy', location: 'privacypolicy'}, {text: 'Affiliate Program', location: 'affiliateprogram'}]

  const myFooterLinks2 = [{text:'FAQ', location: 'faq'}, {text: 'Buy Equities/Options', location: 'buyequities'}, 
{text: 'Order status', location: 'orderstatus'}, {text: 'Payment options', location: 'paymentoptions'}]

  const myFooterLinks3 = [{text:'Watch List', location: 'watchlist'}, {text: 'Add To Watch List', location: 'addtowatchlist'}, 
{text: 'Remove from Watch List', location: 'removefromwatchlist'}, {text: 'New Watch List', location: 'newwatchlist'}]

  const myFooterLinks4 = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin-in']

  return (

    <footer className="footerMainContainer">
      <div className="container">
        <div className="footerRow">
          <div className="footer-col">
            <h4>Stokida</h4>
            <ul>
              {myFooterLinks1.map((footerNavLinks, key) => <li><NavLink key={key} to={`/${footerNavLinks.location}`}>{footerNavLinks.text}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              {myFooterLinks2.map((footerNavLinks, key) => <li><NavLink key={key} to={`/${footerNavLinks.location}`}>{footerNavLinks.text}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Portfolio</h4>
            <ul>
              {myFooterLinks3.map((footerNavLinks, key) => <li><NavLink key={key} to={`/${footerNavLinks.location}`}>{footerNavLinks.text}</NavLink></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              {myFooterLinks4.map((footerIcons, key) => <NavLink key={key} to={'/'}><i className={footerIcons}></i></NavLink>)}

            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

