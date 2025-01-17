import React from "react";
import "./Container.css";
function Container() {
  return (
    <div className="Container">
      <div className="text">
   <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
   

          <div className="btns">
            <button>Shop Now</button>
            <button className="catg">Category</button>
          </div>

          <div className="shopping">

          </div>   
<div className="logos">
  <img src="/amazon.png" alt="amazon-logo" />
  {/* <img src="/flipkart.png" alt="flipkart-logo" /> */}
  <a href=""><img src="/flipkart.png" alt="flipkart-logo" /></a>
</div></div>
      <div className="shoe">
        <img src="/shoe_image.png" alt="shoe-img" />
      </div>
    </div>
  );
}

export default Container;
