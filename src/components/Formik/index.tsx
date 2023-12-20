import React from 'react';
import Button from '../Button';

class Formik extends React.Component{
    render(){
        return (
            <form>
                <div>
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
                <div>
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
                <Button />
            </form>
        )
    }
}
export default Formik;