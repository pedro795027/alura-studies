import style from './List.module.scss';
import Item from './Item';
import { Itask } from '../../types/task';

interface Props{
    tasks: Itask[],
    selectTask: (selectedTask: Itask) => void
}

function List({tasks, selectTask}: Props) {
    return (
        <aside className={style.tasksList}>
            <h2>Estudo do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;