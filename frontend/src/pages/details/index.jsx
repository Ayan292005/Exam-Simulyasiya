import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function Details() {
  let [product, setProduct] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  function getDetails() {
    axios.get(`http://localhost:1010/shop/${id}`)
      .then(res => {
        setProduct(res.data.data)
      })
  }

  useEffect(() => {
    getDetails()
  }, [id])
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "20px" }}>
        <img src={product.image} alt="" />
        <h1>{product.name}</h1>
        <p>Price:${product.price}</p>
       
        <button style={{ border: "1px solid #f45d96", borderRadius: "10px", padding: "5px" }} onClick={() => navigate("/products")}>Go Back</button>
      </div>
    </div>
  )
}

export default Details
