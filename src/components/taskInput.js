import React, { useRef } from 'react';

function TaskInput(props) {
  let nameRef = useRef();
  let timeRef = useRef();

  const onAddTaskClick = () => {
    /*  console.log(nameRef.current.value);
    console.log(timeRef.current.value); */
    let newTask = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };
    props.addTask(newTask);
    console.log(newTask);
  };

  return (
    <div>
      <h3>Task Name:</h3>
      <input ref={nameRef} type="taxt" className="form-control" />
      <h3>Task Time:</h3>
      <input
        ref={timeRef}
        type="time"
        defaultValue="09:00"
        className="form-control"
      />
      <div className="my-3 text-center">
        <button onClick={onAddTaskClick} className="btn btn-success me-2 ">
          Add task
        </button>
        <button
          onClick={() => {
            props.removeAllTasks();
          }}
          className="btn btn-danger"
        >
          Reset tasks
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
