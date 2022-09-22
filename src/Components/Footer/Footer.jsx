import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='container'>
        <footer className="footer">
            <p>Questions? Call - 9900192829999</p>
            <div className="footer-cols">
                <ul>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Invester Relations</a>
                    </li>
                    <li>
                        <a href="#">Corporate Information</a>
                    </li>
                    <li>
                        <a href="#">Netflix Originals</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Account</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Speed Test</a>
                    </li>
                    <li>
                        <a href="#">Redeem Gifts</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Media Center</a>
                    </li>
                    <li>
                        <a href="#">Gift Cards</a>
                    </li>
                    <li>
                        <a href="#">Performance</a>
                    </li>
                    <li>
                        <a href="#">Legal Notice</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer