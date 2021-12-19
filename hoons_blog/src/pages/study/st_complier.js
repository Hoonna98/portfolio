import "../home.css"
import { useState } from "react";

const images = [
  require("./cmp_img/1.jpg").default,
  require("./cmp_img/2.jpg").default,
  require("./cmp_img/3.jpg").default,
  require("./cmp_img/4.jpg").default,
  require("./cmp_img/5.jpg").default,
  require("./cmp_img/6.jpg").default,
  require("./cmp_img/7.jpg").default,
  require("./cmp_img/8.jpg").default,
  require("./cmp_img/9.jpg").default,
  require("./cmp_img/10.jpg").default,
  require("./cmp_img/11.jpg").default,
  require("./cmp_img/12.jpg").default,
  require("./cmp_img/13.jpg").default,
  require("./cmp_img/14.jpg").default,
  require("./cmp_img/15.jpg").default,
  require("./cmp_img/16.jpg").default,
  require("./cmp_img/17.jpg").default,
  require("./cmp_img/18.jpg").default,
  require("./cmp_img/19.jpg").default,
  require("./cmp_img/20.jpg").default
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
        
        <img className="st_img" src={images[index]} alt="" />
        <img className="st_img" src={images[index+1]} alt="" />
        <div className='direc_cnt'>
          <p className='direc_pad'/>
          <button className='direc_bnt' onClick={next}><img className='direc_img' src={require('./img/right.png').default}/></button>
          <div className='direc_pad'/>
        </div>
      </div>
    </div>
  );
}