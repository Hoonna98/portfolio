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
          <h4>Flask API로 요청에 따른 DB 읽어오기 (GET)</h4>
          <div className='code'>vim main.py</div><br/>main.py<br/>
          <img className='file_img' src={require('./img/5.png').default}/>

        line1) app.py로 부터 User (class), app, db를 받아와서 DB 사용<br/>
        line3) app.py로 부터 받아온 app api로 연결<br/>
        line5) class에 parameter로 Resource를 사용하여 URI에서 받은 정보를 변수로 바로 사용 가능하게 해준다<br/>
        line7) User table에 name column에서 URI로 받은 name과 같은 첫 row를 user로 return<br/>
        line8) json 형태로 DB로 부터 받아온 정보를 front에 return<br/>
        line9) Flask-restful API를 사용하여 app.route('/~~')를 사용하지 않고 api.add_resource로 routing URI로 받은 값을 변수에 바로 저장<br/>
          
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
