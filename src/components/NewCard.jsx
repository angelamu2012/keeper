import React from "react";

function NewCard(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={props.title}
          onChange={props.handleTitleChange}
        />
        <textarea
          placeholder="Take a note..."
          onChange={props.handleContentChange}
          value={props.content}
        ></textarea>
        {}
        <button onClick={props.onAdd}> Add </button>
      </form>
    </div>
  );
}

export default NewCard;
