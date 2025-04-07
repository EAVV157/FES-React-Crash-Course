import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";

import React, { useState } from "react";

function App() {
  const [showAddModal, setAddModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);

  function onTodoAdd() {
    setAddModal(true);
  }

  function onTodoDelete() {
    setDeleteModal(true);
  }

  function onConfirmAdd() {
    console.log("Added");
    setAddModal(false);
  }

  function onCancelAdd() {
    console.log("Canceled");
    setAddModal(false)
  }

  function onConfirmDelete() {
    console.log("Deleted");
    setDeleteModal(false);
  }

  function onCancelDelete() {
    console.log("Canceled");;
    setDeleteModal(false);
  }

  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={onTodoAdd}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified, step by step."
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks."
        />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Land a $100k Job"
          paragraph="Apply to many, many jobs."
        />
      </div>
      <div>
        <Counter />
      </div>
      {showAddModal && (
        <Modal
          onConfirm={onConfirmAdd}
          onCancel={onCancelAdd}
          title="Add to Todo List?"
        />
      )}
      {showDeleteModal && (
        <Modal
          onConfirm={onConfirmDelete}
          onCancel={onCancelDelete}
          title="Are you sure you want to delete?"
        />
      )}
    </>
  );
}

export default App;
