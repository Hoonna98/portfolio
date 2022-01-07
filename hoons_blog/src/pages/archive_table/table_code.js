import '../home.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const TableCode = () => {
  return (
    <div className='table_cnt'>
        <div className='table_header'>
          <div className='table_title'>
            AWS 시스템 및 서버 구축
          </div>
          <div className='table_date'>
            작성일자
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
            <Link to ='/archive_table/err1' style={{ textDecoration: 'none' }}>
              
            </Link>
          </div>
          <div className='table_date'>
            2022.01.03
          </div>
        </div>
        <div className='table_content'>
          <div className='table_title'>
            <Link to ='/archive_table/err2' style={{ textDecoration: 'none' }}>
            
            </Link>
          </div>
          <div className='table_date'>
            2022.01.07
          </div>
        </div>
        
        <div className='table_content_low'>
          <div className='table_title'>
            
          </div>
          <div className='table_date'>
            
          </div>
        </div>
    </div>
  );
}

export default TableCode;
