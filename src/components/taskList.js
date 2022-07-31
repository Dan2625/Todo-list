import React from 'react';
import TaskItem from './taskItem';

function TaskList(props) {
  return (
    <div>
      <h2>Tasks you added:</h2>
      {props.tasks_ar.map((item) => {
        return (
          <TaskItem
            removeSingleTask={props.removeSingleTask}
            key={item.id}
            item={item}
          />
        );
      })}
      {/* <TaskItem />
      <TaskItem /> */}
    </div>
  );
}

export default TaskList;
