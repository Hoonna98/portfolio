import './home.css';
import {Route, Switch, Link} from 'react-router-dom';
import Category from './category';
import Project from './project';
import Study from './study';
import Intro from './intro';
import Archive from './archive';
import FileE1 from './archive_file/err1';
import FileE2 from './archive_file/err2';
// import FileE3 from './archive_file/err3';
// import FileE4 from './archive_file/err4';
// import FileE5 from './archive_file/err5';
// import FileE6 from './archive_file/err6';
import { Button } from '@material-ui/core';


function Home() {
  return (
    <div className="Home">
      <div className="left_con">
        <div className="title_left">
          <Link to ='/' style={{ textDecoration: 'none' }}>
            <Button disabled='disabled'><img  className='blog_title' src={require('../title.png').default}/></Button>
          </Link>
          </div>
        <Category/>
      </div>
      <div className="right_con">
        <div className="title_right"></div>
        <div className="content_right">
          <Switch>
            <Route path='/project' component={Project}></Route>                
            <Route path='/study' component={Study}></Route>
            <Route path='/archive' component={Archive}></Route>
            <Route path='/archive_table/err1' component={FileE1}></Route>
            <Route path='/archive_table/err2' component={FileE2}></Route>
            <Route path='/' component={Intro}></Route>
          </Switch>
        </div>
          
      </div>
      
    </div>
  );
}

export default Home;
