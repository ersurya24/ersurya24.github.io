import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


// import Carousal from "../components/Carousal";


export default function Home() {
  const [search, setSearch] = useState('');

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:4000/api/foodData");

    const data = await response.json();
    setFoodItem(data.food_items);
    setFoodCat(data.food_category);
    // console.log(data)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {search} onChange={(e)=>{setSearch(e.target.value)}}
              />
              <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300x100/?burger"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300x100/?pastry"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300x100/?barbeque"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container">
        
        {foodCat !== [] ? (
          foodCat.map((fetched_data) => {
            return (<div className="row mb-3">
              <div key={fetched_data._id} >
                <div  className="fs-3 m-3">
                  {fetched_data.CategoryName}
                </div>
                </div>
                {/* <hr /> */}

                {foodItem !== [] ? 
                  foodItem
                    .filter((item) => (item.CategoryName === fetched_data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className ="col-12 col-md-6 col-lg-3">
                          {/* <Card foodName = {filterItems.name} 
                          options = {filterItems.options[0]}
                          imgSrc = {filterItems.img}>

                          </Card> */}
                          <Card foodItem={filterItems} 
                          options = {filterItems.options[0]}
                          >

                          </Card>
                        
                        </div>
                      )
                    })
                 : 
                  <div>No such fetched_data found</div>
                }
              </div>
              
            );
          })
        ) : ""
          
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
