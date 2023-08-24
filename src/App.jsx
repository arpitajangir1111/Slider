import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [pack, setPackage] = useState("")
  const [page, setPage] = useState(1)
  const [load, setLoading] = useState("")

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products/' + page)
      .then((product) => {
        console.log(product.data)
        setPackage(product.data)
        setLoading(false)
      })

  }, [page])

  function Loader() {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {load === false ? (
        <>
          <div className="slider">


            <div className="left">
              <img src={pack.image} alt="product name" />
            </div>
            <div className="right">
              <h3>{pack.title}</h3>
              <p>{pack.description}</p>
            </div>
          </div>
          <div className="navigation">
            <button disabled={page === 1 ? true : false}
              onClick={() => setPage(page - 1)}>
              <ArrowBackIosIcon />
            </button>
            <button onClick={() => setPage(page + 1)}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </>

      )
      :<Loader />
      }
      </>
      
  )
}




export default App;
