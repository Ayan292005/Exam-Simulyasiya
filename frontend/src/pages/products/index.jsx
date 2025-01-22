import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:1010/shop"
import { FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { favoritesContext } from '../../context/FavoritesContext';
import { Helmet } from "react-helmet";


function Products() {
  let [data, setData] = useState([])
  let [originalData, setOriginalData] = useState([])
  let {favorites, setFavorites}=useContext(favoritesContext)


  function getData() {
    axios.get(DBurl)
      .then((res) => {
        setData(res.data)
        setOriginalData(res.data)
      })
  }
  useEffect(() => {
    getData()
  }, [])


  
  function handleSearch(e) {
    if (e.target.value == "") {
      setData(originalData)
    } else {
      let filteredProducts = data.filter(el =>
        el.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
      setData(filteredProducts)
    }
  }


  function handleSortByPrice() {
    let sortedProducts = data.sort((a, b) => (a.price - b.price))

    setData([...sortedProducts])

  }
  function handleAddFavorite(product) {
    let findFavorite=favorites.find(favorite=>favorite._id==product._id)
    if (findFavorite) {
      alert("you already add this item")
    } else {
      setFavorites([...favorites,product])
    }
  }

  return (
    <div style={{height:"100vh"}}>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Products Page</title>
      
      </Helmet>
      <div className='prod-title'>
        <h1>New realeased Products for Women</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className='cont-2'>
     <div><input type="search" name="" id="" placeholder='Search' onChange={(e) => handleSearch(e)} /></div>
      <button className='sort-btn' onClick={handleSortByPrice}>From cheap to expensive</button>
      <button className='sort-btn' onClick={getData}>Reset</button>
      </div>
      <div className='cont-2 cards'>

        {
          data && data.map(product => (
            <div key={product._id} className='card'>
              <div className='prod-img'>
                <div className="overlay"></div>
                <div className='card-icons'>
                <NavLink to={`/products/${product._id}`} style={{color:"white",fontSize:"20px"}}><IoIosSearch /></NavLink>
                <div onClick={() => handleAddFavorite(product)}><FaHeart/></div>
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
