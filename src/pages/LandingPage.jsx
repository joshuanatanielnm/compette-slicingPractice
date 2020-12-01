import Background from './../assets/landingPageBackground.svg'
import Benefit from './../components/Benefit'
import Header from './../components/Header'
import Hero from './../components/Hero'
import React from 'react'
import Sponsor from './../components/Sponsor'

const LandingPage = () => {
  let HeroStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center top -700px`,
    backgroundSize: `cover`,
  }

  return (
    <div>
      <div style={HeroStyle}>
        <Header />
        <Hero />
        <Sponsor />
        <Benefit />
      </div>
    </div>
  )
}

export default LandingPage
