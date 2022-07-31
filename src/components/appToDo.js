import React, { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import TaskInput from './taskInput';
import TaskList from './taskList';

function AppToDo() {
  let [tasks_ar, setTasks_ar] = useState([]);

  useEffect(() => {
    if (localStorage['tasks']) {
      setTasks_ar(JSON.parse(localStorage['tasks']));
    }
  }, []);

  const addTask = (_itemTask) => {
    let sort_ar = [...tasks_ar, _itemTask];
    sort_ar = sortBy(sort_ar, 'time');
    saveLocal(sort_ar);
  };

  const removeAllTasks = () => {
    saveLocal([]);
  };

  const removeSingleTask = (_delId) => {
    let temp_ar = tasks_ar.filter((item) => item.id != _delId);
    saveLocal(temp_ar);
  };

  const saveLocal = (_ar) => {
    localStorage.setItem('tasks', JSON.stringify(_ar));
    setTasks_ar(_ar);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">App To Do</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput addTask={addTask} removeAllTasks={removeAllTasks} />
        <TaskList removeSingleTask={removeSingleTask} tasks_ar={tasks_ar} />
      </div>
    </div>
  );
}

export default AppToDo;
