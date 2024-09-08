
import React from 'react'
import   './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

function Home () { {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={ hero_banner} alt="" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img' />
          <p>"The Protector" is a Turkish fantasy series about Hakan Demir, an ordinary shopkeeper who discovers he's the 
            chosen protector of Istanbul. Tasked with battling ancient Immortals threatening the city, Hakan must embrace his destiny while 
            uncovering deep secrets about his past and navigating the challenges of his new role.</p>
        <div className=" hero-btns">
          <button className='btn'> <img src={play_icon} alt /> Play</button>
          <button  className='btn dark-btn'> <img src={info_icon}  alt =""/> More info</button>
        </div>
        <Titlecards/>
        </div>
      </div>
      <div className='more-cards'>
        <Titlecards  title={"Blockbuster Movie"} category={"top_rated"}/>
        <Titlecards title={"Only on Netflix"} category={"popular"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
         </div>
    <Footer/>
    </div>
  )
}
}
export default Home
