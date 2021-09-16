import React from 'react'
import About from './About';
import Contact from './Contact';
import Menu from './Menu';

function Content() {

    let cities = ['Istanbul', 'Havana', 'Tahran', 'Paris', 'Bakü'];

    return (
        <>
            <div className="w3-content" style={{ maxWidth: 1100 }}>
                <About />

                <hr />

                <Menu />

                <hr />

                <Contact />
            </div>
        </>
    )
}

export default Content
