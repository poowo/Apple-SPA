import React from 'react'
import './SectionApps.css'

function SectionApps({apps}) {
    return (
        <section className='apps'>
            <ul>
                <li>
                    <h4>App Clips</h4>
                    <h5>
                        Provide a new way to quickly access and experience what your app has to offer.
                        An app clip is a small part of your app that lets users start and finish an
                        experience in seconds, even before downloading your&nbsp;app.
                    </h5>
                    <div>
                        <img src = {apps.appsImg1} alt="App Clips" />
                    </div>
                </li>
                <li>
                    <h4>Widgets</h4>
                    <h5>
                        Now it’s even easier to build and make widgets available across iOS, iPadOS, and macOS with the
                        new WidgetKit framework, widget API for SwiftUI, widget gallery, and Smart Stacks.
                    </h5>
                    <div>
                        <img src = {apps.appsImg2} alt="Widgets" />
                    </div>
                </li>
                <li>
                    <h4>macOS Big Sur</h4>
                    <h5>
                        A whole new level of power and beauty.
                    </h5>
                    <div>
                        <img src = {apps.appsImg3} alt="macOS Big Sur" />
                    </div>
                </li>
                <li>
                    <h4>watchOS 7</h4>
                    <h5>
                        Develop even more powerful and personal apps for Apple Watch.
                    </h5>
                    <div>
                        <img src = {apps.appsImg4} alt="watchOS 7" />
                    </div>
                </li>
                <li>
                    <h4>iOS 14</h4>
                    <h5>
                        Take advantage of the latest features in the world’s most advanced mobile operating system.
                    </h5>
                    <div>
                        <img src = {apps.appsImg5} alt="iOS 14" />
                    </div>
                </li>
                <li>
                    <h4>iPadOS 14</h4>
                    <h5>
                        New features and enhancements in
                        iPadOS 14
                        empower you to create amazing experiences.
                    </h5>
                    <div>
                        <img src = {apps.appsImg6} alt="iPadOS 14" />
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default SectionApps