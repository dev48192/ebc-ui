import React from 'react';
import Styles from './Styles.module.scss';
import Users from '../components/Users';

// component

const App: React.FC = () => {
  return <div className={Styles['container']}>
    <h1>Hello EBc user</h1>
    <Users/>
  </div>;
};
export default App;
