import './file.css';
import Archive from '../archive';
const Code2= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
          AWS VPC 구축
        </div>
        <div className='file_content'>
          <h4>EC2 시작하기</h4>
          
          앞서 만든 VPC에서 EC2 시작하기<br/><br/>
          1. EC2 public subnet Key로 public ec2 접속하기<br/>
          * key.pem가 있는 directory로 이동<br/>
          <div className='code'>chmod 400 'public_ec2_key.pem'</div>
          : key file의 권한을 읽기 전용으로 설정, 권한을 설정하지 않으면 ssh를 통한 진입 불가<br/>
          <div className='code'>ssh -i 'public_ec2_key.pem' 'user_name(해당 서버로 들어갈 유저 이름)'@'public ip'</div>
          * EC2 접속 완료<br/>
          * ssh가 22번 포트를 사용하여 보안그룹 및 NACL을 열어 주어야한다<br/><br/>
          2. Public ec2에 private ec2 key 전달<br/>
          * key가 있는 directory로 이동<br/>
          <div className='code'>chmod 400 'key_name'</div>
          <div className='code'>scp -rp -i 'public_ec2_key.pem' '보낼 파일 경로' 
          'user name'@'받을 ip':'파일 받을 경로'</div>
          * 전송 완료<br/><br/>
          3. Private EC2 접속<br/>
          * public ec2로 접속<br/>
          <div className='code'>ssh -i 'private_ec2_key.pem' 'user_name(해당 서버로 들어갈 유저 이름)'@'private ip'</div>
          * 접속 완료<br/><br/>
        
          ** root로 로그인은 보안상 좋지 않아 접속한 후 sudo -i 명령어를 통한 root 접속  
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code2;
