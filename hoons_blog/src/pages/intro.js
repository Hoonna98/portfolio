import './home.css';

const Intro = () => {
  return (
    <div className="introcont">
      <div className='intro_left'>
        <div>
          <h1>My git</h1>
          <a href = "https://github.com/Hoonna98">https://github.com/Hoonna98</a>
        </div>
        <div>
            <h1>Language</h1>
            1st : python <br/>
            2nd : C
        </div>
        <div >
            <h1>자격증</h1>          
        </div>
        <div>
            <h1>Contact</h1>
            E-mail : piel07@naver.com <br/>
        </div>

      </div>
      <div className='intro_right'>
      <h1 className = 'intro_t'>약력</h1>
      <div className = 'intro'>1998.04 부산 출생</div>
      <div className = 'intro'>2017.02 동아고등학교 졸업</div>
      <div className = 'intro'>2017.03 한양대학교 ERICA캠퍼스 입학</div>
      <div className = 'intro'>2019.01 한양대학교 제35대 소프트웨어학부 학생회장</div>
      <div className = 'intro'>2019.11 HESH(Hanyang Erica Software Hackathon) 운영위원장</div>
      <div className = 'intro'>2020.03 - 2021.09 대한민국 해병대 만기전역</div>
      
      </div>
    </div>
  );
}

export default Intro;
