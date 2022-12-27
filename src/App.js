import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.scss";
App.propTypes = {};

function App(props) {
  const [typing, setTyping] = useState({ title: "", status: "new" });
  const [jobs, setJobs] = useState(() => {
    const dataTodoJson = localStorage.getItem("todoList");
    const dataTodo = JSON.parse(dataTodoJson);
    if (!dataTodo) {
      return [];
    }
    return dataTodo;
  });
  const saveLocalStorage = (data, key) => {
    const jsonDatas = JSON.stringify(data);
    localStorage.setItem(key, jsonDatas);
  };
  const handelTyping = (payload) => {
    setTyping({
      ...typing,
      title: payload,
    });
  };
  const handelClick = () => {
    setJobs((prev) => {
      const newJobs = [...jobs, typing];
      saveLocalStorage(newJobs, "todoList");
      return newJobs;
    });
    setTyping({
      ...typing,
      title: "",
    });
  };
  const handelChose = (index) => {
    const newJobs = [...jobs];
    newJobs[index] = {
      ...newJobs[index],
      status: newJobs[index].status === "new" ? "completed" : "new",
    };
    setJobs(() => {
      saveLocalStorage(newJobs, "todoList");
      return newJobs;
    });
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        onChange={(e) => handelTyping(e.target.value)}
        value={typing.title}
      />
      <br />
      <button onClick={handelClick}>Add job</button>
      <br />
      <h4>Filter</h4>
      <h3>Todo list</h3>
      <ul>
        {jobs.map((item, index) => (
          <li
            className={item.status}
            key={index}
            onClick={() => handelChose(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
