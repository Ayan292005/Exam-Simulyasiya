import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:1010/shop"
import { FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Products() {
  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then((res) => {
        setData(res.data)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div >
      <div className='prod-title'>
        <h1>New realeased Products for Women</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className='cont-2 cards'>

        {
          data && data.map(product => (
            <div key={product._id} className='card'>
              <div className='prod-img'>
                <div className="overlay"></div>
                <div className='card-icons'>
                <NavLink to={`/products/${product._id}`} style={{color:"white",fontSize:"20px"}}><IoIosSearch /></NavLink>
                <div><FaHeart/></div>
                </div>
                <img src={product.image} alt="" />
              </div>
              <h5>{product.name}</h5>
              <h3>${product.price}.00</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
