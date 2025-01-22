import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
let DBurl = "http://localhost:1010/shop"


function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      price: ''

    },
    onSubmit: values => {
      axios.post(
        DBurl, values)
    },
  })

  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el._id !== id)
    setData(dataId)

    axios.delete(`${DBurl}/${id}`)
      .then(() => {
        getData()
      })
  }



  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='cont-2 add-form'>
   
        <div className='input-wrapper'>
          <label htmlFor="image">Image</label>
          <input className='border'
            required
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="name">Name</label>
          <input className='border'
            required
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="price">Price</label>
          <input className='border'
            required
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>

        <button type="submit" onClick={() => navigate("/products")} className='submit-btn'>Submit</button>
      </form>

      <table className='cont-2' style={{ marginTop: "50px" }}>
        <thead>
          <tr style={{textAlign:"left"}}>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt="" style={{ width: "80px", height: "80px", objectFit: "contain" }} /></td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td><button className='delete-btn' onClick={() => deleteData(product._id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Add
