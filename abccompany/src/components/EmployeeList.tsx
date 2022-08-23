import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { fetchListEmployee } from '../redux/actions/employee';

export default function EmployeeList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListEmployee());
  }, [dispatch]);

  const employees = useSelector(state => state.employee.employees);

  const columns: GridColDef[] = [
    { 
      field: 'fullName', 
      headerName: 'Name', 
      width: 130,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.employees.name.first || ''} ${params.employees.name.last || ''}`,
    },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'eMail', width: 130 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'picture', headerName: 'Picture', width: 160, },
  ];

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
