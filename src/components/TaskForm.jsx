import { useState } from "react";

function TaskForm({onAdd}) {
    const [taskName, setTaskName] = useState('');
    function handleSubmit(ev) {
        ev.preventDefault();
        setTaskName('');
        onAdd(taskName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text"
                   value={taskName} 
                   onChange={ev => setTaskName(ev.target.value)}
                   placeholder="Your next task..."/>
        </form>
    );
}

export default TaskForm;