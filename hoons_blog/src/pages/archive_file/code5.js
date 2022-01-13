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
          <h4>mysql 설치 및 비밀번호 설정</h4>
          private subnet 접속
          <div className='code'>sudo -i</div>
          <div className='code'>yum install mysql</div>
          <div className='code'>mysql -u root -p</div>
          초기 설치 후 password가 없다면 그냥 Enter 키를 치면 진입 가능<br/> <br/> 
          mysql db 사용<br/> 
          <div className='code'>mysql> use mysql;</div><br/> 
          현재 패스워드 관련 설정 리스트<br/> 
          <div className='code'>mysql> select host,user,authentication_string from user;</div>
          <br/> 진입 비밀번호 설정<br/> 
          <div className='code'>mysql> alter user 'root'@'host_ip' identified with mysql_native_password by 'new_password';</div>
          host_ip에 진입 할 ip 입력(localhost or x.x.x.x)<br/> 
            * 해당 vpc구성에서는 backend server ip를 입력하면 backend server flask API에서 접근가능<br/> 
          
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
