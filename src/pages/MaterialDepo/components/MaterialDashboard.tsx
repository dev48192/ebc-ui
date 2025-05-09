import * as React from 'react';
import { rows, columns } from '../mock';
import CustomDataGrid from './CustomDataGrid';

export default function MaterialDashboard() {
  return <CustomDataGrid rows={rows} columns={columns} />;
}
