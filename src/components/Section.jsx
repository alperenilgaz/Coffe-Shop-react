import React from 'react'


function Section() {
  const orderNow = () => {
    window.scrollTo({
      top:1150,
      behavior:'smooth'
      
    })
  }
  return (
    <section
    className="hero section"
    id="home"
    style={{backgroundImage:`url(./media/bg-hero.jpg)`}}
    
  >

    <h1 class="hero__title">
      Start Your Day <br />
      With Favorite Coffee <br />
      And Cozy Place.
    </h1>
    <button onClick={orderNow} className="hero__button">Order Now</button>
    

    
  </section>
  )
}

export default Section