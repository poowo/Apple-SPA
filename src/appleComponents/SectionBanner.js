import React from 'react'
import './SectionBanner.css'

function SectionBanner() {
    const bgTxt = `url(./images/build-apps_2x.png)`;
    const style = { backgroundImage: bgTxt };
    return (
        <section className='banner'>
            <div className='banner_content'>
                <div>
                    <h3>Build apps. Build your future.</h3>
                    <h5>
                        Whether you’re just entering the workforce or you‘re an experienced developer or entrepreneur,
                        take advantage of free resources to gain skills that help you succeed in Apple’s growing
                        app&nbsp;economy, which provides millions of jobs in technology across the globe.
                    </h5>
                </div>
            </div>
            <figure className='banner_bg' style={style}></figure>
        </section>
    )
}

export default SectionBanner