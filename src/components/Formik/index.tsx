import React, {useState} from 'react';
import style from './Formik.module.scss';
import { Button } from '../Button';
import { Itask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}

function Formik({ setTasks }: Props) {

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent) {
        event.preventDefault();
        setTasks(oldTasks => [
            ...oldTasks,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ]
        );
        setTask("");
        setTime("00:00");
    }
    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="Tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="Digite o que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="Tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Formik;