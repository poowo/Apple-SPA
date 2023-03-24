import React from 'react'
import './Footer.css'
import FooterNavigation from '../appleComponents/FooterNavigation'
import FooterLegal from '../appleComponents/FooterLegal'

function Footer() {
    return (
        <footer id='footer'>
            <FooterNavigation />
            <FooterLegal />
        </footer>
    )
}

export default Footer