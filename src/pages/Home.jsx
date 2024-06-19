import React from 'react'
import Banner from '../components/Banner/Banner'
import Intro from '../components/Introduction/Intro'
import Servicecont from '../components/Serviccontainer/Servicecont'
import Latestnews from '../components/Latestnews/Latestnews'

function Home() {
  return (
    <div>
      <Banner/>
      <Intro/>
      <Servicecont/>
      <Latestnews/>
    </div>
  )
}

export default Home
