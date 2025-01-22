import React from 'react'


function Home() {
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-left'>
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt=""  />
        </div>
        <div className="home-right">
          <h1 className='first-title'>
            <span>Flat</span>
            75%Off
          </h1>
          <h1 style={{fontSize: "72px",fontWeight: "700"}}>IT’S HAPPENING <br />
          THIS SEASON!</h1>
        <button className='home-btn'>PURCHASE NOW</button>
      </div>
    </div >
    </>
  )
}

export default Home
