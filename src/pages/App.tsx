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

  function finishTask(){
    if (selected){
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id){
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formik setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch 
      selected={selected}
      finishTask={finishTask}
      />
    </div>
  );
}

export default App;
