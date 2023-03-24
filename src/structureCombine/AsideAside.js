import React from 'react'
// import {Link} from 'react-router-dom'
import './AsideAside.css'

function AsideAside() {
    return (
        <aside className='aside'>
            <div className='aside_content'>
                <div>
                    <figure></figure>
                    <p><strong>News and Updates</strong></p>
                    <p>See the latest announcements and recommendations for Apple&nbsp;developers.</p>
                    <p><span>View the lastest</span></p>
                </div>
                <div>
                    <figure></figure>
                    <p><strong>Documentation</strong></p>
                    <p>Browse the latest documentation including API reference, articles, and sample&nbsp;code.</p>
                    <p><span>Read API documentation</span></p>
                </div>
                <div>
                    <figure></figure>
                    <p><strong>Software Downloads</strong></p>
                    <p>Get the latest releases of Xcode, macOS, iOS, watchOS, tvOS, and&nbsp;more.</p>
                    <p><span>Download resources</span></p>
                </div>
                <div>
                    <figure></figure>
                    <p><strong>Developer Program</strong></p>
                    <p>Become a member to access the resources for distribution on Apple&nbsp;platforms.</p>
                    <p><span>Join the program</span></p>
                </div>
            </div>
        </aside>
    )
}

export default AsideAside