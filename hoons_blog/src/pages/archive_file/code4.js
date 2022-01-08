import './file.css';
import Archive from '../archive';
const Code1= () => {
  return (
    <div className="file">
      <div className="filecont">
        <div className='file_title'>
          Flask REST API
        </div>
        <div className='file_content'>
          <h4>Flask 환경 설정</h4>
          FLASK란? <br/>
          * Micro Web Framework : <br/>
          간단한 web site or 간단한 Api sever를 만드는 데 특화된 Python Web Framework<br/><br/>

          FLASK 환경 구축 <br/>
          <div className='code'>sudo yum update</div>
          <div className='code'>sudo yum upgrade</div>
              : 리눅스 환경에서 yum 업데이트<br/><br/>
            <div className='code'>sudo yum install python3</div>
            : 파이썬 환경 구축<br/><br/>
            <div className='code'>sudo yum install virtualenv </div>
            : 작업환경에 따라 파이썬 환경 구축 가능<br/><br/>
            * /home/“”username””/.local/bin 에서 virtualenv 있는지 확인<br/><br/>       
            <div className='code'>vim ~/.bashrc </div>
            : zsh 를 사용하면 vim ~/.zshrc<br/><br/>
            마지막 줄에 아래 코드 추가
            <div className='code'>export PATH=“$PATH”:/home/“”username””/.local/bin </div>
            : virtualenv 환경설정<br/><br/>
            <div className='code'>source ~/.bashrc</div>
            : 재시작 없이 적용<br/><br/>
            <div className='code'>virtualenv “가상환경이름”</div>
            <div className='code'>cd “가상환경이름” </div>
            <div className='code'>source /.bin/active </div>
            : 가상환경 실행<br/><br/>
            <div className='code'>pip3 install flask</div>
            <div className='code'>pip3 install flask-RESTful </div>
            : flask에서 지원하는 restful api를 쉽게 만들게 해줌<br/>
        </div>
      </div>
      <Archive></Archive>
    </div>
  );
}

export default Code1;
