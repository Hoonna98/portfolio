import './home.css';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {Button} from "@material-ui/core";
import Net_study from './study/st_network';
import Any_study1 from './study/any1';
import DC_study from './study/st_datacommu';
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
          {/* network */}
          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>
              네트워크 이론을 담고 있는 정리본 입니다.
              <br/>Layer 5 인 Application layer 부터
              <br/>Layer 3 인 Network layer와 Network layer의 보안,
              <br/>Layer 2 인 DataLink layer를 다룹니다.
              <br/><br/>네트워크를 처음 접했을 당시 정리한 기본이 되는 내용입니다.
            </div>
            <div className='study_end'>
              <Button className='study_see' onClick={()=> setModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <Net_study/>
              </Modal>
              <div className='study_date'>작성 : 2021.12.19</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>데이터 통신</div>
            <div className='study_content'>
            </div>
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

        {/* data communication */}
        <div className='in_study'>
          <div className='in_content'>
            <div className='study_title'>데이터 통신</div>
            <div className='study_content'>
            네트워크의 하단 layer에 대해 다룬 정리본 입니다.
            <br/>Layer 1 Physical layer || data 와 signal 사이의 변환 과정을
            <br/>Layer 2 DataLink layer || DLC와 MAC에 대해 집중적으로 다룹니다.
            <br/>Wifi, Bluetooth, Cellular에 대해 소개합니다.
            </div>
            <div className='study_end'>
            <Button className='study_see' onClick={()=> set2ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal2IsOpen} onRequestClose={() => set2ModalIsOpen(false)}>
                <DC_study/>
              </Modal>
              <div className='study_date'>작성 : 2021.12.19</div>
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