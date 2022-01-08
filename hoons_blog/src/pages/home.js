import './home.css';
import {Route, Switch, Link} from 'react-router-dom';
import Category from './category';
import Project from './project';
import Any_project1 from './project/anyp1';
import Study from './study';
import StudyN from './study/st_network';
import StudyD from './study/st_datacommu';
import StudyC from './study/st_complier';
import StudyO from './study/st_os';
import Intro from './intro';
import Archive from './archive';
import FileE1 from './archive_file/err1';
import FileE2 from './archive_file/err2';
import FileC1 from './archive_file/code1';
import FileC2 from './archive_file/code2';
import FileC3 from './archive_file/code3';
import FileC4 from './archive_file/code4';
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
            <Route path='/project/anyp1' component={Any_project1}></Route>
            <Route path='/project' component={Project}></Route>                
            <Route path='/study/st_network' component={StudyN}></Route>
            <Route path='/study/st_datacommu' component={StudyD}></Route>
            <Route path='/study/st_complier' component={StudyC}></Route>
            <Route path='/study/st_os' component={StudyO}></Route>
            <Route path='/study' component={Study}></Route>
            <Route path='/archive' component={Archive}></Route>
            <Route path='/archive_table/err1' component={FileE1}></Route>
            <Route path='/archive_table/err2' component={FileE2}></Route>
            <Route path='/archive_table/code1' component={FileC1}></Route>
            <Route path='/archive_table/code2' component={FileC2}></Route>
            <Route path='/archive_table/code3' component={FileC3}></Route>
            <Route path='/archive_table/code4' component={FileC4}></Route>
            <Route path='/' component={Intro}></Route>
          </Switch>
        </div>
          
      </div>
      
    </div>
  );
}

export default Home;
