import './file.css';

const Err1= () => {
  return (
    <div className="filecont">
      <div className='file_title'>
        OSError: [Errno 98] Address already in use
      </div>
      <div className='file_content'>
        <h4>현재 실행중인 process 재실행</h4>
        control + C 가 아닌 control + Z 로 process를 빠져나왔을 때 자주 발생 <br/>
        <img className='file_img' src={require('./img/1.png').default}/><br/>
        해결법 : <br/>
        ps -fA | grep "process_name"<br/>
        <img className='file_img' src={require('./img/2.png').default}/><br/>
        kill -9 ‘해당 프로세스 number’<br/>
        해당 예시는 21049 와 21052를 죽이면 해결된다.<br/>
      </div>
      
    </div>
  );
}

export default Err1;
