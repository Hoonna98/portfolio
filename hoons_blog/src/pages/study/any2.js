import "../home.css"
import { useState } from "react";

const images = [
  require("./img/1.jpg").default,
  require("./img/3.jpg").default,
  require("./img/1.jpg").default,
  require("./img/2.jpg").default
];
export default function Study() {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 2) % images.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 2) % images.length) + images.length) % images.length
    );
  };

  return (
    <div> 
      <div className='img_cnt'>
        <div className='direc_cnt'>
          <p className='direc_pad'/>
          <button className='direc_bnt' onClick={prev}><img className='direc_img' src={require('./img/left.png').default}/></button>
          <div className='direc_pad'/>
        </div>
        
        <img className="st_img" src={images[index]} alt="1" />
        <img className="st_img" src={images[index+1]} alt="2" />
        <div className='direc_cnt'>
          <p className='direc_pad'/>
          <button className='direc_bnt' onClick={next}><img className='direc_img' src={require('./img/right.png').default}/></button>
          <div className='direc_pad'/>
        </div>
      </div>
    </div>
  );
}