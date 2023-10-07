import { useState } from 'react'
import MountBox from './containers/MountBox'
import './App.css'


function App() {
  
  console.log(process.env.BLZ_TOKEN)

  return (
    <>
    <h1>this is the app</h1>
    <MountBox/>
    </>
  )
}

export default App
