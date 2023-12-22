import React from 'react';

import style from './Formik.module.scss';
import { Button } from '../Button';

class Formik extends React.Component{
    render(){
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="Tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                     type="text"
                     name="tarefa"
                     id="tarefa"
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
                     id="tempo"
                     min="00:00:00"
                     max="01:30:00"
                     required
                    />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}
export default Formik;