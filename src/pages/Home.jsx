import React from 'react'
import Banner from '../components/Banner/Banner'
import Intro from '../components/Introduction/Intro'
import Servicecont from '../components/Serviccontainer/Servicecont'
import Latestnews from '../components/Latestnews/Latestnews'
import Certifications from '../components/Certifications/Certifications'

function Home() {
  return (
    <div>
      <Banner/>
      <Intro/>
      <Servicecont/>
      <Certifications/>
      <Latestnews/>
    </div>
  )
}

export default Home
