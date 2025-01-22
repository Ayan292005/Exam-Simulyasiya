import { FaHeartBroken } from "react-icons/fa";
import React, { useContext } from 'react'
import { favoritesContext } from '../../context/FavoritesContext'
import { Helmet } from "react-helmet";


function Favorites() {
  let { favorites, setFavorites } = useContext(favoritesContext)

  function handleDeleteFavorite(id) {
    let delFav = favorites.filter(favorite => favorite._id !== id)
    setFavorites(delFav)
  }
  return (
    <div style={{height:"100vh"}}>
             <Helmet>
              <meta charSet="utf-8" />
              <title>Favorites Page</title>
            
            </Helmet>
      <div className="cont-2">

        {
          favorites.length == 0 ? (
            <h2 style={{ textAlign: "center" }}>Your Favorites List is Empty</h2>
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>Your Favorites List</h1>

              <div className="cards cont-2">
                {
                  favorites.map(favorite => (
                    <div key={favorite._id} className='card'>
                      <div className="guest-img">
                        <img src={favorite.image} alt={favorite.name} />
                      </div>
                      <p style={{ fontSize: "1.2rem" }}>{favorite.name}</p>
                      <p>${favorite.price}</p>
                      <p style={{ cursor: "pointer" }} onClick={() => handleDeleteFavorite(favorite._id)}><FaHeartBroken /></p>
                    </div>
                  ))
                }
              </div>

            </>
          )
        }

      </div>
    </div>

  )
}

export default Favorites
