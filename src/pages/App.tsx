import React from 'react';
import Formik from '../components/Formik';
import List from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formik />
      <List />
    </div>
  );
}

export default App;
