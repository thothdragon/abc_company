import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Avatar, CircularProgress } from '@mui/material';
import { fetchListEmployee } from '../redux/actions/employee';

export default function EmployeeList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListEmployee());
  }, [dispatch]);

  const employees: Array<any> = useSelector(state => state.employee.employees);

  var rows: Array<any> = [];

  for (let i = 0; i < employees.length; i++) {
    rows.push({
      id: i,
      name: employees[i].name.first + ' ' + employees[i].name.last,
      phone: employees[i].phone,
      email: employees[i].email,
      city: employees[i].location.city,
      picture: employees[i].picture.thumbnail,
      nat: employees[i].nat
    })
  }

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'eMail', width: 130 },
    { field: 'city', headerName: 'City', width: 130 },
    {
      field: 'picture',
      headerName: 'Picture',
      width: 160,
      renderCell: ((params) => {
        return (
          <Avatar src={params.value} />
        )
      })
    },
  ];

  return (
    rows.length === 33
      ? <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        components={{ Toolbar: GridToolbar }}
      />
      : <CircularProgress />
  );
}
