import React, { useState } from 'react';
import Formik from '../components/Formik';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { Itask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(selectedTask: Itask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task=>({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formik setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch selected={selected}/>
    </div>
  );
}

export default App;
