import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cara from "./imges/cara.jpg";
import carb from "./imges/carb.jpg";
import carc from "./imges/carc.jpg";
import carf from "./imges/carf.jpg";
import React from "react";
import NavBar from "./Component/Navbar";
import Cars from "./Component/Cars";
import Footer from "./Component/Footer";

const cars = [
  { name: "MINI Cooper 2014", price: 50000, imgsrc: cara },
  { name: "Mercedes Benz 2020", price: 90000 , imgsrc: carb },
  { name: "BMW M5 2019", price: 80000, imgsrc: carc },
  { name: "Jeep Wrangler 2017", price: 40000, imgsrc: carf },
];
function App() {
  return (
    <div className="App">
      <NavBar />
      {/*  */}
    
      {cars.map((e, i) => (
        <Cars e={e} key={i} />
      ))}
      <span>
        {" "}
        total :
        {cars.reduce((accumulator, cars) => {
          return accumulator + cars.price;
        }, 0)}
      </span>
       <Footer />
      {/*  */}
    </div>
  );
}

export default App;