import axios from "axios";
import React, { useState,useEffect } from "react";




const RestrurentCard = (props) => {
  const { cartdata } = props;
  const { name, cloudinaryImageId, area, avgRating ,} = cartdata?.data;
  return (
    <div className="border hover:border-black bg-lime-400 w-44 h-52  mx-1 my-1 rounded-md">
      <img
        className="w-44 h-24"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="logo"
      />
      <h3>{name}</h3>
      <h4>{area}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

const Container = () => {
  const [cartlist,setCartList]=useState([])
  const [reslist, setReslist] = useState(cartlist);
  //const [flag, setflag]=useState(0)
  useEffect(()=>{
    // axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8479159&lng=77.6528024&page_type=DESKTOP_WEB_LISTING")
    // .then((response)=>{
    //   setCartList(response.data.cards[2].data.data.cards)
    //   console.log(cartlist)
    
    fetchdata()
   
  },[])
  const fetchdata=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8479159&lng=77.6528024&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    setCartList(json.data.cards[2].data.data.cards)
    setReslist(json.data.cards[2].data.data.cards)
  }
  return (
    <>
      <div className="flex">
        <div>
          <button
            className="border border-black p-1 mx-2"
            onClick={() => {
              console.log("clicked");
              setReslist(
                cartlist.filter((restrurent) => restrurent.data.avgRating > 4)
              );
             // setflag(1)
            }}
          >
            Filter
          </button>
        </div>
        <div>
          <button
            className="border border-black p-1 mx-2"
            onClick={() => {
              console.log("clicked");
              //setflag(0)
              setReslist(cartlist)
            }}
          >
            See All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-full p-4">
      
        {reslist.map((restaurant) => (
          <RestrurentCard key={restaurant.data.id} cartdata={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Container;
