import React, { useState } from 'react';
import classes from './UserList.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { rows } from '../../Dummy_Data';

const UserList = () => {
  const [gridData, setGridData] = useState(rows);
  const deleteHandler = (id) => {
    const updatedData = gridData.filter((item) => item.id !== id);
    setGridData(updatedData);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={classes.tableUser}>
            <img
              src={params.row.img.src}
              alt='avatar'
              className={classes.avatarImg}
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 70,
    },
    {
      field: 'amount',
      headerName: 'Transactions',
      type: 'number',
      width: 110,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className={classes.tableBtns}>
            <Link to={`/Users/${params.row.id}`}>
              <button className={classes.btnEdit}>Edit</button>
            </Link>
            <Delete
              className={classes.btnDelete}
              onClick={() => deleteHandler(params.row.id)}
            >
              Delete
            </Delete>
          </div>
        );
      },
    },
  ];

  return (
    <div className={classes.userList}>
      <div style={{ height: 478, width: '55rem' }}>
        <DataGrid
          disableSelectionOnClick
          rows={gridData}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
