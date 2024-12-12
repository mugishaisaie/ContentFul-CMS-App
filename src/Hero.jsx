import React from 'react'
import image from './assets/hero.svg'
function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
            <h1>ContentFull CMS</h1>
            <p>Succulents roof party coloring book actually, trust fund vegan keffiyeh 3 wolf moon shabby chic venmo. Selfies skateboard lo-fi craft beer locavore franzen yr beard humblebrag viral. Whatever yuccie kitsch, cronut air plant quinoa kale chips vegan single-origin coffee pop-up irony actually cardigan hell of. </p>
            </div>
            <div className="img-container">
                <img src={image} alt="woman and browser" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Hero