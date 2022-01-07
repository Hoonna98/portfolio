import './home.css';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {Button} from "@material-ui/core";
import Any_project1 from './project/anyp1';
import Any_project2 from './project/anyp2';
import Any_project3 from './project/anyp3';
import Any_project4 from './project/anyp4';

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal1IsOpen, set1ModalIsOpen] = useState(false);
  const [modal2IsOpen, set2ModalIsOpen] = useState(false);
  const [modal3IsOpen, set3ModalIsOpen] = useState(false);
  const [modal4IsOpen, set4ModalIsOpen] = useState(false);
  
  return (
    <div className='study'>
        {/* 세로 추가 */}
        <div className='in_study'>
          <div className='in_content'>
            <div className='study_title'>Portfolio</div>
            <div className='study_content'>
              React를 이용하여 portfolio 사이트를 구현한 개인 프로젝트입니다.
              <br/><br/>Intro : 약력 및 활동
              <br/>Project : 수행한 project 이력 및 개요
              <br/>Study : 전공 및 자격증 취득 관련 정리본
              <br/>Archive : 발생한 Error 정리 및 해결법과
              백준 문제 풀이, 코드 구현 및 시스템 구축에 관한 내용 정리본
              <br/>
              
              </div>
            <div className='study_end'>
              <Button className='study_see' onClick={()=> setModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <Any_project1/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>test</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
              <Button className='study_see' onClick={()=> set1ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal1IsOpen} onRequestClose={() => set1ModalIsOpen(false)}>
                <Any_project2/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        
          <div className='in_content'>
            <div className='study_title'>B2C Project</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Button className='study_see' onClick={()=> set2ModalIsOpen(true)}>보기
              </Button>
              <Modal className='modal_'isOpen={modal2IsOpen} onRequestClose={() => set2ModalIsOpen(false)}>
                <Any_project3/>
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
                <Any_project4/>
              </Modal>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Project;