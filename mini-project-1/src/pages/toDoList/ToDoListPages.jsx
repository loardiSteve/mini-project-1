import { useState } from "react";
import Navbar from "../../components/Navbar";

function ToDoList({ data, onToggle, onClick, onEdit }) {
  // console.log("data di child :", data); //data berhasil diteruskan ke child

  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");

  const handleDeleteTodo = (id) => onClick(id);

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft(item.todo);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft("");
  };

  const saveEdit = () => {
    const text = draft.trim();
    if (!text) return;
    onEdit(editingId, { todo: text }); // lifting state up
    setEditingId(null);
    setDraft("");
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="mb-4 font-bold text-xl">List :</h1>
      {!data.length ? (
        <p>belum ada tugas, tambahin dulu ya</p>
      ) : (
        <div className="flex flex-col gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4">
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => onToggle(item.id)}
              />

              {editingId === item.id ? (
                <>
                  <input
                    className="border rounded-md px-2 py-1 col-span-2 me-2"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button type="button" onClick={saveEdit}>
                      save
                    </button>
                    <button type="button" onClick={cancelEdit}>
                      cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="col-span-2 border border-amber-500 rounded-md px-3 py-1 me-2">
                    {item.todo}
                  </p>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => startEdit(item)}>
                      edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteTodo(item.id)}>
                      delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NewTodo({ onChange, onClick, data }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleAddTodo = () => {
    onClick();
  };

  // console.log(!data.todo);

  return (
    <div className="flex justify-between max-w-md mx-auto border border-red-50 bg-amber-50 rounded-md p-8 mb-2">
      <input
        name="todo"
        type="text"
        placeholder="masukkan kegiatan disini"
        onChange={handleChange}
        value={data.todo}
        className="border border-amber-500 focus:border-amber-800  rounded-md px-3 py-1"
      />
      <button
        type="click"
        onClick={handleAddTodo}
        disabled={!data.todo}
        className="bg-amber-400 font-semibold px-3 py-1 cursor-pointer rounded-md hover:text-white hover:bg-amber-700 transition-colors duration-300 ease-in-out disabled:bg-gray-300 disabled:text-zinc-500 disabled:cursor-default">
        Tambah
      </button>
    </div>
  );
}

const TodoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const initialNewToDo = {
    id: null,
    todo: "",
    status: false,
  };
  const [newTodo, setNewTodo] = useState(initialNewToDo);

  const handleToggle = (id) => {
    // console.log(idx);

    setToDoList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          // console.log(item.id === idx);
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };

  const handleChange = (name, value) => {
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTodo = () => {
    const toDoToAdd = {
      ...newTodo,
      id: Date.now(),
    };

    setToDoList((prev) => [...prev, toDoToAdd]);

    //reset input
    setNewTodo(initialNewToDo);
  };

  const handleDeleteTodo = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, nextFields) => {
    setToDoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...nextFields } : item))
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <div>
        <h1 className="font-bold text-2xl my-4 text-center">Todo List</h1>
        <NewTodo
          onClick={handleAddTodo}
          onChange={handleChange}
          data={newTodo}
        />
        <ToDoList
          data={toDoList}
          onToggle={handleToggle}
          onClick={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
