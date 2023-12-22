import React from 'react';
import style from './List.module.scss';

function List(){
    const tasks = [{
        task: 'React',
        time: '02:00:00'
      }, {
        task: 'Javascript',
        time: '01:00:00'
      },{
        task: 'Typescript',
        time: '03:00:00'
      }]
    return(
        <aside className={style.tasksList}>
            <h2>Estudo do dia</h2>
            <ul>
                {tasks.map((item, index)=> (
                    <li key={index} className={style.item}>
                        <h3> {item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;