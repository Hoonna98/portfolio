import './file.css';
import Archive from '../archive';
const Code1= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
            Flask API, DB(mysql) 연동 
        </div>
        <div className='file_content'>
          <h4>Flask API로 DB에 데이터 넣기 (POST)</h4>
          <div className='code'>vim main.py</div><br/>main.py<br/>
          <img className='file_img' src={require('./img/6.png').default}/>
        line1) app.py로 부터 User (class), app, db를 받아와서 DB 사용<br/>
        line3) app.py로 부터 받아온 app api로 연결<br/>
        line5) class에 parameter로 Resource를 사용하여 URI에서 받은 정보를 변수로 바로 사용 가능하게 해준다<br/>
        line7) post로 받은 data 불러오기<br/>
        line8) 받은 data의 첫 값의 key를 name으로 설정<br/>
        line9) 받은 data의 두번째 값의 key를 email로 설정<br/>
        line11) User table에 넣을 user 생성 <br/>
        line12) db.session을 통해 실제 테이블에 해당 user add<br/>
        line13) db.session.commit() 을 입력해야 실제 DB에 적용<br/>
          
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
