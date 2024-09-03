import { Facebook, Instagram, LinkedIn, Pinterest, X } from '@mui/icons-material'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__cont">
            <div className="footer__divs">
                <ul className="footer__ul1">
                    <li className="footer__li1">Home</li>
                    <li className="footer__li1">How to Buy?</li>
                    <li className="footer__li1">Delivery</li>
                    <li className="footer__li1">Payment</li>
                    <li className="footer__li1">Contacts</li>
                </ul>
            </div>
            <div className="footer__divs">
                <ul className="footer__ul2">
                    <li className="footer__li2"><X /></li>
                    <li className="footer__li2"><Facebook /></li>
                    <li className="footer__li2"><Instagram /></li>
                    <li className="footer__li2"><LinkedIn /> </li>
                    <li className="footer__li2"><Pinterest /> </li>
                    <li className="footer__li2"></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer