import React, { useState, useEffect } from "react";
import ToDoApp from "./ToDoApp";
import "../components/Card.css";

function ToDoForm() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
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
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
