import React from "react";

function CreateNote(props) {
  return (
    <div>
      <div className="create-note">
        <input
          onChange={props.handleChange}
          value={props.note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={props.handleChange}
          value={props.note.content}
          name="content"
          placeholder="Write a note..."
          rows={2}
        />
        <button onClick={props.handleClick}>+</button>
      </div>
    </div>
  );
}

export default CreateNote;
