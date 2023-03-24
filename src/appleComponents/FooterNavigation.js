import React from 'react'
// import { Link } from 'react-router-dom'
import './FooterNavigation.css'

function FooterNavigation() {
  return (
    <div className='footer_content'>
        <h2>Developer Footer</h2>
        <nav>
            <div>
                <h3>Discover</h3>
                <ul>
                    <li>iOS</li>
                    <li>iPadOS</li>
                    <li>macOS</li>
                    <li>tvOS</li>
                    <li>watchOS</li>
                    <li>Safari and Web</li>
                    <li>Games</li>
                    <li>Business</li>
                    <li>Education</li>
                    <li>WWDC</li>
                </ul>
            </div>
            <div>
                <h3>Design</h3>
                <ul className="footer-directory-column-section-list">
                    <li>Human Interface Guidelines</li>
                    <li>Resources</li>
                    <li>Videos</li>
                    <li>Apple Design Awards</li>
                    <li>Fonts</li>
                    <li>Accessibility</li>
                    <li>Localization</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div>
                <h3>Develop</h3>
                <ul className="footer-directory-column-section-list">
                    <li>Xcode</li>
                    <li>Swift</li>
                    <li>Swift Playgrounds</li>
                    <li>TestFlight</li>
                    <li>Documentation</li>
                    <li>Vides</li>
                    <li>Downloads</li>
                </ul>
            </div>
            <div>
                <h3>Distribute</h3>
                <ul className="footer-directory-column-section-list">
                    <li>Developer Program</li>
                    <li>App Store</li>
                    <li>App Review</li>
                    <li>Mac Software</li>
                    <li>Apps for Business</li>
                    <li>Safari Extensions</li>
                    <li>Marketing Resource</li>
                    <li>Trademark Licensing</li>
                </ul>
            </div>
            <div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Articles</li>
                        <li>Developer Forums</li>
                        <li>Feedback &amp; Bug&nbsp;Reporting</li>
                        <li>System Status</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3>Account</h3>
                    <ul>
                        <li>Certificates, Identifiers &amp; Profiles</li>
                        <li>App Store Connect</li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default FooterNavigation