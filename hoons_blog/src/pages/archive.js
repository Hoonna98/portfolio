import './home.css';
import React, {useState} from 'react';
import TableError from './archive_table/table_error';
import TableBJ from './archive_table/table_baekjoon';
import TableCode from './archive_table/table_code';

const Archive = () => {
  const [test, setUsers] = useState(1);

  return (
    <div>
        <TableError></TableError>
        <TableCode></TableCode>
        <TableBJ></TableBJ>
        
    </div>
  );
}

export default Archive;
