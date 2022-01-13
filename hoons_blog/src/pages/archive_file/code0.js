import './file.css';
import Archive from '../archive';
const Code1= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
            SSH config를 통한 ssh 접속 간결화
        </div>
        <div className='file_content'>
          <h4>ssh config 사용</h4>
          <div className='code'>
              cd ~/.ssh
          </div>
          <div className='code'>
              vim config
          </div>
          <img className='file_img' src={require('./img/0.png').default}/><br/>
          Host : ssh 접속 시 이름<br/>
          HostName : ip Address<br/>
          User : ssh 접속 할 user name<br/>
          IdentityFile : key를 사용하여 접속하는 경우에 사용할 key path<br/>
          Port : 접속 할 포트 (미입력 시 22port 사용)<br/>
          <br/> 
          기존 코드<br/>
          <div className='code'>ssh -i 'public_ec2_key.pem' 'user_name'@'ip'</div>
          ssh config 설정 후 간결화 된 코드<br/>
          <div className='code'>ssh 'Host'</div>
          
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
