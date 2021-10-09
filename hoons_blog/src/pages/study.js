import './home.css';

import {Button, ButtonGroup} from "@material-ui/core";
import Table from './table';


const Study = () => {
  return (
    <div className='study_top'>
        <h3 className='study_title'>Study archive</h3>
        <div className='study_list'>

            <ButtonGroup variant="text" aria-label="text button group" color="primary">
                <Button >Network</Button><div></div>
                
                <Button >Data Communication</Button><div></div>
                <Button >Three</Button>
            </ButtonGroup>
        </div>
        <Table></Table>
        
        

    </div>
  );
}

export default Study;

