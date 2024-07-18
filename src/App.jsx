import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
// import Sidebar from './Components/Sidebar'
// import { useAuth } from './Context/Authprovider'
import Home from './Components/Home'
import Search from './Components/Search'
import Playingvideo from './Components/Playingvideo'
import { useAuth } from './Context/Authprovider'
// import Video from './Components/Video'
import Loading from './Loader/Loading'

function App() {
  // const{loading,data}=useAuth()
  // console.log(loading);
  // console.log(data);
  const {loading}=useAuth()
  return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<Playingvideo/>}/>
        {/* <Route path="/video" element={<Video/>}/> */}
      </Routes>
      {/* <Sidebar/> */}
    </div>
  )
}

export default App
