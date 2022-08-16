import { taskStatusTypes } from "./taskStatusTypes"
import './Task.css'
export interface taskProps {
    task:{
        status: taskStatusTypes,
        title:string,
        id: number | string
    }
}

const Task = (props:taskProps) => {
    const title = props.task.title
    const status = props.task.status
    const id = props.task.id

    return (
        <div id={`task-${id}`} className='taskItem'>
            {status === taskStatusTypes.DONE ?
            <button className='done-button'>
                <span className={`icon-check`} />
            </button> :
            <label
            className="taskItem__label"
            >
                <input className='taskItem__checkbox' type='checkbox' />
                <span
                    className="checkbox-custom"
                    // onClick={() => onArchiveTask(id)}
                />
            </label>}
            <div className={`taskItem__title
            ${status === taskStatusTypes.DONE && 'taskItem__title--done'}`}>
                {title}
            </div>
           {status !== taskStatusTypes.DONE && <button
                className={`pin-button 
                ${status === taskStatusTypes.PINNED && 'pin-button--pinned'}`}
                // onClick={() => onPinTask(id)}
                id={`pinTask-${id}`}
                aria-label={`pinTask-${id}`}
                key={`pinTask-${id}`}
            >
                <span className={`icon-star`} />
            </button>}
        </div>
    )
}

export default Task