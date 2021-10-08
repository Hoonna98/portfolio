import './home.css';
import { useState } from 'react';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';


const Category = () => {
  return (
    <div className='category'>
      <Link to ='/'>
      <Button className='catebnt' variant="outlined" color="primary">Intro</Button>
      </Link>
      <div className='bt_pd'></div>
      <Link to ='/project'>
      <Button className='catebnt' variant="outlined" color="primary">project</Button>
      </Link>
      <div className='bt_pd'></div>
      <Button className='catebnt' variant="outlined" color="primary">My study</Button>
      <div className='bt_pd'></div>
      
    
    </div>
  );
}

export default Category;
