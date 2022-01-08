import './home.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Project = () => {
  
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
              <Link className='study_see' to ='/project/anyp1' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>test</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Link className='study_see' to ='/project/anyp2' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        
          <div className='in_content'>
            <div className='study_title'>B2C Project</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Link className='study_see' to ='/project/anyp3' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>

          <div className='in_content'>
            <div className='study_title'>네트워크 이론</div>
            <div className='study_content'>작성날짜:222</div>
            <div className='study_end'>
            <Link className='study_see' to ='/project/anyp4' style={{ textDecoration: 'none' }}>
                보기
              </Link>
              <div className='study_date'>작성 : 2021.11.14</div>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Project;