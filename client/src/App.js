import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [list, setList] = useState([]);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get").then((response) => {
      setList(response.data);
    });
  }, []);

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setList([...list, { todoTitle: note.title, todoContent: note.content }]);
    setNote({
      title: "",
      content: "",
    });
  }

  function deleteList(id) {
    setList((prevList) => {
      return prevList.filter((listItem, index) => {
        return index !== id;
      });
    });
  }

  function taskCompleted() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }

  const displayDate = new Date().toLocaleDateString();
  const displayTime = new Date().toLocaleTimeString([], { timeStyle: "short" });

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <CreateNote
        note={note.title}
        content={note.content}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      {list.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            isDone={isDone}
            displayDate={displayDate}
            displayTime={displayTime}
            title={value.todoTitle}
            content={value.todoContent}
            taskCompleted={taskCompleted}
            deleteList={deleteList}
          />
        );
      })}
    </div>
  );
}

export default App;
