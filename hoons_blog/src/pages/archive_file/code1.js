import './file.css';
import Archive from '../archive';
const Code1= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
          AWS VPC 구축
        </div>
        <div className='file_content'>
          <h4>AWS custom VPC 만들기</h4>
          <img className='file_img' src={require('./img/vpcimg.jpg').default}/><br/>
          <b>목표</b> :<br/>
          외부와 연결된 public ec2(backend server)와 외부에서는 접근 불가하고 내부에서만 접근 가능한
          private ec2(database server)를 구축<br/><br/>
          1. AWS에서 VPC 만들기<br/>
          Region을 서울로 체크 후 생성 기본적으로 1개의 NACL, 1개의 Routing Table이 주어짐<br/>
          CIDR block은 10.0.0.0/24<br/><br/>
          2. 2개의 subnet 생성<br/>
          subnet 1개는 public(10.0.0.0/16), 다른 하나는 private으로 사용(10.0.1.0/16)<br/>
          subnet에 생성한 vpc 연결<br/><br/>
          3. IGW(Internet GateWay) 생성<br/><br/>
          4. Public Subnet Routing Table 생성 및 설정<br/>
          새로운 Routing Table을 하나 생성하고 public subnet과 연결, 라우팅은 자신의 로컬부분(10.0.0.0/16)은 로컬로
          나머지 부분(0.0.0.0/0)은 방금 생성한 igw와 연결<br/><br/>
          5. NACL 생성 및 설정<br/>
          NACL은 Inbound와 Outbound 전부 본인에 맞게 설정<br/><br/>
          6. Net IGW 생성 및 연결<br/>
          net igw를 vpc의 public subnet에 생성한다.<br/><br/>
          7. Private Subnet Routing Table 설정<br/>
          로컬을 제외한 나머지 부분(0.0.0.0/0)은 net igw로 연결<br/>
          * 이렇게 설정하면 private ec2에서 public ec2를 통해 외부 접속이 가능<br/><br/>
          8. EC2 생성 및 각각의 subnet 설정
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
