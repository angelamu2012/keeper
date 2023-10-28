import React from "react";
import Notes from "./Notes";
import NewCard from "./NewCard";
import notes from "../notes";

function App() {
  const [data, setData] = React.useState(notes);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function saveData(event) {
    setData([...data, { title: title, content: content }]);
    console.log(data);
    event.preventDefault();
    setTitle("");
    setContent("");
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
    console.log(title);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
    console.log(content);
  }

  function removeFromList(id) {
    setData((data) => {
      return data.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(data);
  }

  return (
    <div>
      <header>
        <h1>Keeper</h1>
      </header>

      <NewCard
        title={title}
        content={content}
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
        onAdd={saveData}
      />

      <dl>
        {data.map((item, index) => (
          <Notes
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={removeFromList}
          />
        ))}
      </dl>

      <footer>
        <p> Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
