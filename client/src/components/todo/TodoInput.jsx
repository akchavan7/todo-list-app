export default function TodoInput(props) {
  const { inputRef, handleSubmit, btnLabel } = props;
  return (
    <div className="task-input">
      <input
        placeholder={
          btnLabel === "Update" ? "Updated Task" : "Task for today is..."
        }
        name="text"
        className="todo-input"
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="todo-button">
        {btnLabel}
      </button>
    </div>
  );
}
