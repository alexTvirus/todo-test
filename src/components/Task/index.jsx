import { useState } from "react"
import "./style.scss"
import { CheckSquareOutlined, DeleteOutlined } from "@ant-design/icons"

const Task = (props) => {
    let { name, isDone, id } = props.data
    let { handleRemove } = props
    let { handleDone } = props
    return (<>
        <div className="task" key={id}>
            <p className={(isDone ? "task__name--done" : "") + " task__name content-overflow"}>{name}</p>
            <div className="task__btn-group">
                <button className="task__done-btn" onClick={() => handleDone(id)}><CheckSquareOutlined /></button>
                <button className="task__remove-btn" onClick={() => handleRemove(id)}><DeleteOutlined /></button>
            </div>
        </div>

    </>)
}

export default Task