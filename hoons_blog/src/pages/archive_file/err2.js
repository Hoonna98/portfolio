import './file.css';
import Archive from '../archive';
const Err2= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
        Permission denied (publickey,gssapi-keyex,gssapi-with-mic). lost connection
        </div>
        <div className='file_content'>
          <h4>scp 명령어로 ec2 서버로 private key 보낼 때</h4>
          같은 vpc 내에 있는 private subnet에 접속하기 위해 private ec2 key 전달 시 문제 발생 <br/>
          <div className='code'>scp [보낼 파일 경로] [user name]@[받을 ip]:[파일 받을 경로]</div>
          <img className='file_img' src={require('./img/3.png').default}/><br/>
          해결법 : <br/>
          instance key 를 이용해서 전송<br/>
          <div className='code'>scp -rp -i [instance_key.pem] [보낼 파일 경로] [user name]@[받을 ip]:[파일 받을 경로]</div>
        </div>

      </div>

      <Archive></Archive>

    </div>
  );
}

export default Err2;
