import React from 'react';
import Formik from '../components/Formik';
import List from '../components/List';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formik />
      <List />
    </div>
  );
}

export default App;
