import React from 'react';
import { Box } from '@mui/material';

import EmployeeList from './components/EmployeeList';
import HeaderCompanyBar from './components/HeaderCompanyBar';

import './App.css';

export default function App() {
  return (
    <Box>

      <HeaderCompanyBar />
      
      <EmployeeList />

    </Box>
  );
}

