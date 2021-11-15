import './home.css';
import React from 'react';
import {Button, Modal} from "@material-ui/core";

const Study = () => {
  return (
    <div className='study'>
        <div className='in_study'>
          
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see'>보기
              </Button>
              {/* <a href="javascript:void(window.open('category.js', '_self'))"></a> */}
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see'>보기</Button>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        <div className='in_study'>
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see'>보기</Button>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see'>보기</Button>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Study;