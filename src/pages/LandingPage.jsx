import Background from './../assets/landingPageBackground.svg'
import Header from './../components/Header'
import React from 'react'

const LandingPage = () => {
  let HeroStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center top -100px`,
    backgroundSize: `cover`,
  }

  return (
    <div>
      <div style={HeroStyle}>
        <Header />
      </div>
    </div>
  )
}

export default LandingPage
