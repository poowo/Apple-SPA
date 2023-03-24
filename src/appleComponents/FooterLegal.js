import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLegal.css'

function FooterLegal() {
    return (
        <section id='legal'>
            <h3>To view the latest developer news, visit News and Updates</h3>
            <div>
                <div>
                    Copyright &copy; 2022
                    Apple Inc.
                    All rights reserved.
                </div>
                <div>
                    Terms of Use
                    Privacy Policy
                    License Agreements
                </div>
                <div>
                    <select>
                        <option value='https://delveloper.apple.com/'>English</option>
                        <option value='https://delveloper.apple.com/'>简体中文</option>
                        <option value='https://delveloper.apple.com/'>日本語</option>
                        <option value='https://delveloper.apple.com/'>한국어</option>
                    </select>
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default FooterLegal