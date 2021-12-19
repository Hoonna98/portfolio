import './home.css';
import {Route, Switch} from 'react-router-dom';
import Category from './category';
import Project from './project';
import Study from './study';
import Intro from './intro';
import { Button } from '@material-ui/core';


function Home() {
  return (
    <div className="Home">
      <div className="left_con">
        <div className="title_left"><Button disabled='disabled'><img  className='blog_title' src={require('../title.png').default}/></Button></div>
        <Category/>
      </div>
      <div className="right_con">
        <div className="title_right"></div>
        <div className="content_right">
          <Switch>
            <Route path='/project' component={Project}></Route>                
            <Route path='/study' component={Study}></Route>
            <Route path='/' component={Intro}></Route>
          </Switch>
        </div>
          
      </div>
      
    </div>
  );
}

export default Home;
