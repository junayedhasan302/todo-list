const TodoInput = () => {
  return (
    <div>
      <input type="text" placeholder="Add a new task" className="text-sm border p-2 rounded-xl mt-3 bg-blue-100"/>
      <button className="border rounded-xl p-2 mx-2 bg-blue-400 text-white font-bold hover:text-yellow-300">
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;