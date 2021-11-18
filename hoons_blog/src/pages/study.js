import './home.css';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {Button} from "@material-ui/core";
import Any_study from './study/any_study';
import Any_study1 from './study/any1';
import Any_study2 from './study/any2';
import Any_study3 from './study/any3';

const Study = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal1IsOpen, set1ModalIsOpen] = useState(false);
  const [modal2IsOpen, set2ModalIsOpen] = useState(false);
  const [modal3IsOpen, set3ModalIsOpen] = useState(false);
  const [modal4IsOpen, set4ModalIsOpen] = useState(false);
  
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
              <Button className='study_see' onClick={()=> set1ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal1IsOpen} onRequestClose={() => set1ModalIsOpen(false)}>
                <Any_study1/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        <div className='in_study'>
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Button className='study_see' onClick={()=> set2ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal2IsOpen} onRequestClose={() => set2ModalIsOpen(false)}>
                <Any_study2/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Button className='study_see' onClick={()=> set3ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal3IsOpen} onRequestClose={() => set3ModalIsOpen(false)}>
                <Any_study3/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Study;