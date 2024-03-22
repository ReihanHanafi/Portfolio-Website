import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Spotify from './components/Spotify'
function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Spotify />
    </div>
  )
}

export default App
