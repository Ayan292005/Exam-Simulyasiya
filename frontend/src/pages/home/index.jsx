import React from 'react'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      
      </Helmet>
      <div className='home-wrapper'>
        <div className='home-left'>
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
        </div>
        <div className="home-right">
          <h1 className='first-title'>
            <span>Flat</span>
            75%Off
          </h1>
          <h1 style={{ fontSize: "72px", fontWeight: "700" }}>IT’S HAPPENING <br />
            THIS SEASON!</h1>
          <button className='home-btn'>PURCHASE NOW</button>
        </div>
      </div >

      <div className='prod-title'>
        <h1>Shop for Different Categories</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className='cont-2' style={{ display: "flex", marginTop: "50px" }}>
        <div className='cat-imgs'>
          <div style={{ display: "flex", gap: "20px" }}>
            <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
          </div>
          <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
        </div>
      </div>
      
      <div className="back-img"  style={{display:"flex",alignItems:"center"}}>
        <div className="overlay-2"></div>
        <div className='cont-2' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className='men-wrapper'>
          <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
          <p>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        <div className='men-wrapper'>
          <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
          <p>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        <div className='men-wrapper'>
          <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
          <p>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        <div className='men-wrapper'>
          <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
          <p>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
