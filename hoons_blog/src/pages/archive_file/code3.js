import './file.css';
import Archive from '../archive';
const Code3= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
          REST API
        </div>
        <div className='file_content'>
          <h4>REST API란?</h4>
          1. API <br/>
          2. Application이나 Device가 서로 간에 연결하여 통신할 수 있는 방법을 정의하는 규칙 세트<br/>
          3. REST 아키텍처 스타일의 디자인 원칙을 준수하는 API<br/><br/>
          Representational State Transfer : <br/>
          자원의 이름(표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것<br/>
          거의 모든 프로그래밍 언어를 사용하여 개발이 가능하며, 다양한 데이터 포맷을 지원<br/>

          <h4>REST 디자인 원칙</h4>
          1. 균일한 인터페이스.<br/>
          요청이 어디에서 오는지와 무관하게, 동일한 리소스에 대한 모든 API 요청은 동일하게 보여야 한다.
          REST API는 사용자의 정보의 동일한 데이터 조각이 오직 하나의 URI에 속함을 보장해야 한다.
          리소스가 너무 클 필요는 없지만, 이는 클라이언트가 필요로 하는 모든 정보를 포함해야 한다.<br/><br/>
          2. 클라이언트-서버 디커플링. <br/>
          클라이언트와 서버 애플리케이션은 서로 간에 완전히 독립적이어야 한다. 
          클라이언트 애플리케이션이 알아야 하는 유일한 정보는 요청된 리소스의 URI이며, 
          이는 다른 방법으로 서버 애플리케이션과 상호작용할 수 없어야한다. 
          이와 유사하게, 서버 애플리케이션은 HTTP를 통해 요청된 데이터에 전달하는 것 말고는 
          클라이언트 애플리케이션을 수정하지 않아야 합니다.<br/><br/>
          3. Stateless. <br/>
          각 요청에서 이의 처리에 필요한 모든 정보를 포함해야 한다. 
          즉, REST API는 서버측 세션을 필요로 하지 않는다. 
          서버 애플리케이션은 클라이언트 요청과 관련된 데이터를 저장할 수 없다.<br/><br/>
          4. 캐싱 가능성. <br/>
          가급적이면, 리소스를 클라이언트 또는 서버측에서 캐싱할 수 있어야 한다. 
          또한 서버 응답에는 전달된 리소스에 대해 캐싱 허용 여부에 대한 정보도 포함되어야 한다. 
          이의 목적은 서버측의 확장성 증가와 함께 클라이언트측의 성능 향상을 동시에 얻는 것입니다.<br/><br/>
          5. 계층 구조 아키텍처. <br/>
          REST API에서는 호출과 응답이 서로 다른 계층을 통과한다. 
          일반적으로는, 통신 루프에는 다수의 서로 다른 중개자가 있을 수 있다. 
          REST API는 엔드 애플리케이션 또는 중개자와 통신하는지 여부를 클라이언트나 서버가 알 수 없도록 설계되어야 한다.<br/><br/>
          6. 코드 온디맨드(옵션). <br/>
          REST API는 일반적으로 정적 리소스를 전송하지만, 
          특정한 경우에는 응답에 실행 코드를 포함할 수도 있습니다. 
          이러한 경우에, 코드는 요청 시에만 실행되어야 합니다.<br/><br/>

          * HTTP URI(Uniform Resource Identifier)를 통해 Resource를 명시<br/>
          * HTTP Method(GET,POST,PUT,DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것<br/>
          * REST API CRUD Operation<br/>
            Create : 생성(POST)<br/>
            Read : 조회(GET)<br/>
            Update : 수정(PUT)<br/>
            Delete : 삭제(DELETE)<br/>
            HEAD : header 정보 조회(HEAD)<br/>
        </div>
      
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code3;
