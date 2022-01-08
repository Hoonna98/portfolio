import "../home.css"
import { useState } from "react";

const images = [
  require("./os_img/1.jpg").default,
  require("./os_img/2.jpg").default,
  require("./os_img/3.jpg").default,
  require("./os_img/4.jpg").default,
  require("./os_img/5.jpg").default,
  require("./os_img/6.jpg").default,
  require("./os_img/7.jpg").default,
  require("./os_img/8.jpg").default,
  require("./os_img/9.jpg").default,
  require("./os_img/10.jpg").default,
  require("./os_img/11.jpg").default,
  require("./os_img/12.jpg").default,
  require("./os_img/13.jpg").default,
  require("./os_img/14.jpg").default,
  require("./os_img/15.jpg").default,
  require("./os_img/16.jpg").default,
  require("./os_img/17.jpg").default,
  require("./os_img/18.jpg").default,
  require("./os_img/19.jpg").default,
  require("./os_img/20.jpg").default,
  require("./os_img/21.jpg").default,
  require("./os_img/22.jpg").default,
  require("./os_img/23.jpg").default,
  require("./os_img/24.jpg").default,
  require("./os_img/25.jpg").default,
  require("./os_img/26.jpg").default,
  require("./os_img/27.jpg").default,
  require("./os_img/28.jpg").default,
  require("./os_img/29.jpg").default,
  require("./os_img/30.jpg").default,
  require("./os_img/31.jpg").default,
  require("./os_img/32.jpg").default,
  require("./os_img/33.jpg").default,
  require("./os_img/34.jpg").default,
  require("./os_img/35.jpg").default,
  require("./os_img/36.jpg").default,
  require("./os_img/37.jpg").default,
  require("./os_img/38.jpg").default,
  require("./os_img/39.jpg").default,
  require("./os_img/40.jpg").default,
  require("./os_img/41.jpg").default,
  require("./os_img/42.jpg").default
];
export default function Study() {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 1) % images.length) + images.length) % images.length
    );
  };

  return (
    <div> 
      <div className='study_cont'>
        <img className="st_img" src={images[index]} alt="" />
        <div className="st_bottom">
          <button className='direc_bnt' onClick={prev}>이전</button>
          <div className="st_position">{index+1}/{images.length}</div>
          <button className='direc_bnt' onClick={next}>다음</button>
        </div>
      </div>
    </div>
  );
}