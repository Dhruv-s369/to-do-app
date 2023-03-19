import React, { useState, useEffect } from "react";
import "../components/Card.css";
import ToDoForm from "./ToDoForm";

const getItemsFromLS = () => {
  const list = JSON.parse(localStorage.getItem("lists"));
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function ToDoApp() {
  // const [input, setInput] = useState("");
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

  return (
    <div>
      <button className="del-btn" onClick={() => handleDelete()}>
        Delete
      </button>
      <ToDoForm />
    </div>
  );
}

export default ToDoApp;
