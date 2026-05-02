import "./home.css";
import { useState } from "react";
import Slideshow from "../components/slideshow";

function Home() {
  const images = [
    "https://www.hotelonrivington.com/wp-content/uploads/2017/01/Cafe-Medi-2.jpg",
    "https://storage.googleapis.com/ema2024_bucket/wp-content/uploads/ba177a65-ema-glenview-dining-room.jpg",
    "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/43e5a5d5-346c-4f9f-9852-4b66262b3105.JPG",
    "https://mostly-greek.com/wp-content/uploads/2021/12/20201224123439_img_6220-2.jpg?w=1024",
    "https://19cleveland.com/wp-content/uploads/2025/02/Cocktails1.webp",
    "https://motek.com/wp-content/uploads/2024/12/8-dsc_1696_new-1.jpg"
  ];

  return (
    <div className="body-home">
    <div className="hero-image">
        <div className="hero-text">
        <h1 className="hero-title">Medi</h1>
        <p>Where authentic Mediterranean cuisine meets NYC. 
            Enjoy fresh ingredients, traditional flavors, 
            and immersive experiences.</p>
        </div>
    </div>

    <h2 className="visit">Visit Us!</h2>
    
    <Slideshow slides={images} />
</div>
  );
}

export default Home;