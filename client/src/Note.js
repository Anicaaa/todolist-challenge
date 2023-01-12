import React from "react";

function Note(props) {
  return (
    <div>
      <div className="note-box">
        <div className="note">
          <h1
            style={{ textDecoration: props.isDone ? "line-through" : "none" }}
          >
            {props.title}
          </h1>
          <p style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
            {props.content}
          </p>
          <p className="display-date-time">
            {props.displayDate} at {props.displayTime}
          </p>
          <button onClick={props.taskCompleted} className="complete-btn">
            V
          </button>
          <button
            onClick={() => {
              props.deleteList(props.id);
            }}
            className="del-btn"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
