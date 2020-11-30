import Background from './../assets/landingPageBackground.svg'
import Header from './../components/Header'
import Hero from './../components/Hero'
import React from 'react'
import Sponsor from './../components/Sponsor'

const LandingPage = () => {
  let HeroStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center top -13vw`,
    backgroundSize: `cover`,
  }

  return (
    <div>
      <div style={HeroStyle}>
        <Header />
        <Hero />
        <Sponsor />
      </div>
    </div>
  )
}

export default LandingPage
