import React from 'react';
import Styles from './Styles.module.scss';
import Users from '../components/Users';
import Button from '@mui/material/Button';

// component

const App: React.FC = () => {
  return <div className={Styles['container']}>
    <h1>Hello EBc user</h1>
    <Button variant="contained">Hello world</Button>

    <Users/>
  </div>;
};
export default App;
