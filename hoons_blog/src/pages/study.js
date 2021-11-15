import './home.css';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {Button} from "@material-ui/core";
import Any_study from './study/any_study';

const Study = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <div className='study'>
        <div className='in_study'>
          
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see' onClick={()=> setModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <Any_study/>
              </Modal>
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