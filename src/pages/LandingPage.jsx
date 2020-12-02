import Background from './../assets/landingPageBackground.svg'
import Benefit from './../components/Benefit'
import Header from './../components/Header'
import Hero from './../components/Hero'
import Jobs from './../components/Jobs'
import React from 'react'
import Sponsor from './../components/Sponsor'
import Subscribe from './../components/Subscribe'

const LandingPage = () => {
  let HeroStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center top -20vw`,
    backgroundSize: `cover`,
  }

  return (
    <div>
      <div>
        <div style={HeroStyle}>
          <Header />
          <Hero />
        </div>
        <Sponsor />
        <Benefit />
        <Jobs />
        <Subscribe />
      </div>
    </div>
  )
}

export default LandingPage
