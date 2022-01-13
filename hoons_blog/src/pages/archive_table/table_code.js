import '../home.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const TableCode = () => {

  return (
    <div className='table_cnt'>
      <div className='table_cnt2'>
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
            <Link to ='/archive_table/code0' style={{ textDecoration: 'none' }}>
              SSH config를 통한 ssh 접속 간결화
            </Link>
          </div>
          <div className='table_date'>
            2022.01.13
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
            <Link to ='/archive_table/code1' style={{ textDecoration: 'none' }}>
              AWS VPC 구축(1)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.04
          </div>
        </div>


        <div className='table_content'>
          <div className='table_title'>
            <Link to ='/archive_table/code2' style={{ textDecoration: 'none' }}>
              AWS VPC 구축(2)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.04
          </div>
        </div>
        

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code3' style={{ textDecoration: 'none' }}>
              REST API
            </Link>
          </div>
          <div className='table_date'>
            2022.01.07
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code4' style={{ textDecoration: 'none' }}>
              Flask REST API 만들기
            </Link>
          </div>
          <div className='table_date'>
            2022.01.08
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code5' style={{ textDecoration: 'none' }}>
              Flask API, DB(mysql) 연동(1)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.13
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code6' style={{ textDecoration: 'none' }}>
              Flask API, DB(mysql) 연동(2)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.13
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code7' style={{ textDecoration: 'none' }}>
              Flask API, DB(mysql) 연동(3)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.13
          </div>
        </div>

        <div className='table_content'>
          <div className='table_title'>
          <Link to ='/archive_table/code8' style={{ textDecoration: 'none' }}>
              Flask API, DB(mysql) 연동(4)
            </Link>
          </div>
          <div className='table_date'>
            2022.01.13
          </div>
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
