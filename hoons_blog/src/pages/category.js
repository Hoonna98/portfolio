import './home.css';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';


const Category = () => {
  return (
    <div className='category'>
      <Link to ='/' style={{ textDecoration: 'none' }}>
      <Button className='catebnt' variant="contained">Intro</Button>
      </Link>
      <div className='bt_pd'></div>
      <Link to ='/project' style={{ textDecoration: 'none' }}>
      <Button className='catebnt' variant="contained">Project</Button>
      </Link>
      <div className='bt_pd'></div>
      <Link to ='/study' style={{ textDecoration: 'none' }}>
      <Button className='catebnt' variant="contained">Study</Button>
      </Link>
      <div className='bt_pd'></div>
      <Link to ='/archive' style={{ textDecoration: 'none' }}>
      <Button className='catebnt' variant="contained">Archive</Button>
      </Link>
      <div className='bt_pd'></div>
    
    </div>
  );
}

export default Category;
