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
          <h4>Flask에 mysql 설정 및 테이블 생성</h4>
          <div className='code'>virtualenv “가상환경이름”</div>
        <div className='code'>cd “가상환경이름” </div>
        <div className='code'>source /.bin/active </div><br/>
        flask에서 mysql과 연결해줄 connector 다운로드<br/>
        <div className='code'>pip3 install mysql-connector-python </div><br/>
        flask sqlalchemy ORM 다운로드<br/>
        <div className='code'>pip3 install flask_sqlalchemy </div>
        <br/>*ORM 이란?<br/>
        Object Relaition Model<br/>
        각 데이터베이스마다 사용되는 API도 다르고, SQL 문법도 다르기 때문에,
        Python의 객체에 데이터 모델을 정의하고 이를 데이터베이스와 매핑해주는 것<br/>
        <br/>
        database와 매핑되는 Model 정의
        <div className='code'>vim app.py</div><br/>app.py<br/>
        <div className='code'>from flask import Flask</div>
        <div className='code'>from flask_sqlalchemy import SQLAlchemy</div>
        <div className='code'><br/></div>
        <div className='code'>app = Flask(__name__)</div>
        <div className='code'>app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqlconnector://'user':'password'@'mysql_ip':'port'/'database_name'?charset=utf8"</div>
        <div className='code'>app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False</div>
        <div className='code'><br/></div>
        <div className='code'>db = SQLAlchemy(app)</div>
        <div className='code'><br/></div>
        <div className='code'># Model example</div>
        <div className='code'>class User(db.Model):</div>
        <div className='code'><t/>__tablename__="user"</div>
        <div className='code'><t/>id = db.Column("id", db.Integer, primary_key=True)</div>
        <div className='code'><t/>name = db.Column(db.String(50), nullable=False)</div>
        <div className='code'><t/>email = db.Column(db.String(50), nullable=False)</div>
        user : 접속 할 유저(root)<br/>
        password : mysql 해당 user의 password<br/>
        mysql_ip : private subnet에 있는 ec2 private ip<br/>
        port : port # <br/>
        database_name : 사용 할 database 이름<br/>
        위의 5개 변수는 전부 '' 없이 작성해야 동작한다.<br/><br/>
        Python 객체 데이터 모델로 실제 디비 생성<br/>
        <div className='code'># 가상환경폴더 내 터미널에서 실행</div>
        <div className='code'>python3</div>
        <div className='code'>>>> from app import db</div>
        <div className='code'>>>> db.create_all()</div><br/>
        위의 명령어를 실행하면 실제 DB에서 table이 만들어 진 것을 볼 수 있다.<br/>
        <img className='file_img' src={require('./img/4.png').default}/><br/>
                  
        </div>
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
