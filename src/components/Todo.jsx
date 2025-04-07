import "./Todo.css";

function Todo({ onTodoDelete, title, paragraph }) {
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
