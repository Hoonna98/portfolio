import "../home.css"
import { useState } from "react";

const images = [
  require("./img/2.jpg").default,
  require("./img/3.jpg").default,
  require("./img/2.jpg").default,
  require("./img/3.jpg").default
];
export default function Project() {
  const [index, setIndex] = useState(0);

  return (
    <div> 
      <div className='project'>
        <div className='direc_cnt'>
          <p className='direc_pad'/>
          <div className='direc_pad'/>
        </div>
        
        <img className="pr_img" src={images[index]} alt="" />
        <img className="pr_img" src={images[index+1]} alt="" />
        {/* <img className="pr_img" src={images[index+2]} alt="" /> */}
        
        <div className='direc_cnt'>
          <p className='direc_pad'/>
          <div className='direc_pad'/>
        </div>
      </div>
    </div>
  );
}