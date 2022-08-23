import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'email', headerName: 'eMail', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'picture', headerName: 'Picture', width: 160, },
];

export default function EmployeeList() {

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(fetchListEmployee());
  // }, [dispatch]);

  const employees = useSelector(state => state.employee.employees);

  return (
    <DataGrid
      autoHeight
      rows={employees}
      columns={columns}
      pageSize={12}
      rowsPerPageOptions={[12]}
      components={{ Toolbar: GridToolbar }}
    />
  );
}
