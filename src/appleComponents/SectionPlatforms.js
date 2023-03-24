import React from 'react'
import './SectionPlatforms.css'

function SectionPlatforms({platforms}) {
    return (
        <section className='platforms'>
            <h3>Apple Platforms</h3>
            <div className='links'>
                <div>
                      <p>
                          <img src = {platforms.platformImg1} alt={platforms.platformAlt} />
                      </p>
                      <p className='nowrap'>iOS</p>
                </div>
                <div>
                    <p>
                      <img src = {platforms.platformImg2} alt={platforms.platformAlt} />
                    </p>
                    <p className='nowrap'>iPadOS</p>
                </div>
                <div>
                    <p>
                        <img src = {platforms.platformImg3} alt={platforms.platformAlt} />
                    </p>
                    <p className='nowrap'>macOS</p>
                </div>
                <div>
                    <p>
                        <img src = {platforms.platformImg4} alt={platforms.platformAlt} />
                    </p>
                    <p className='nowrap'>tvOS</p>
                </div>
                <div>
                    <p>
                        <img src = {platforms.platformImg5} alt={platforms.platformAlt} />
                    </p>
                    <p className='nowrap'>watchOS</p>
                </div>
            </div>
        </section>
    )
}

export default SectionPlatforms