import React, { useState, useEffect } from "react";
import ToDoApp from "./ToDoApp";
import "../components/Card.css";

const getItemsFromLS = () => {
  const list = JSON.parse(localStorage.getItem("lists"));
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function ToDoForm() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getItemsFromLS);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  const handleDelete = (id) => {
    const UpdatedItem = items.filter((element, ind) => {
      return ind != id; // If the index number(ind) in filter method is not matching the id from the delete (id - came from the map function) then return only those items and leave the rest.
    });
    setItems(UpdatedItem);
    localStorage.removeItem("lists");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }

    // props.onSubmit({
    //   text: input,
    // });
    // setInput("");
  };

  return (
    <div>
      <h1 className="header">To Do App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={input}
            placeholder="Type here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add</button>
          {items.map((item, idx) => {
            return (
              <div key={idx}>
                <h2 className="items">
                  <span className="text">{item}</span>
                </h2>
                <button className="del-btn" onClick={() => handleDelete(idx)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
