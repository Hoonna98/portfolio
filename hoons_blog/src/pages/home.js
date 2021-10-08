import './home.css';
import {Route, Switch} from 'react-router-dom';
import Title from './title';
import Category from './category';
import Project from './project';
import Intro from './intro';


function Home() {
  return (
    <div className="Home">
        <p className="title">
            <Title/>  
        </p>
        <div className="titlepadding"></div>
        <div className="content">
            <Category/>
            <div className="cg_pd">
              <Switch>
                <Route path='/project' component={Project}></Route>
                <Route path='/' component={Intro}></Route>
              </Switch>
            </div>
        </div>
    </div>
  );
}

export default Home;
