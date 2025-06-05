
import React from 'react';
import { TodoItem } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]); // Add new todos to the top
  };

  const toggleComplete = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.createdAt - a.createdAt; // Newer uncompleted/completed tasks first
    }
    return a.completed ? 1 : -1; // Uncompleted tasks first
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-sky-100">
      <main className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-500">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800">To-Do-List</h1>
          <p className="text-slate-500 mt-1">Stay organized, one task at a time.</p>
        </header>
        
        <AddTodoForm onAddTodo={addTodo} />
        
        <TodoList 
          todos={sortedTodos} 
          onToggleComplete={toggleComplete} 
          onDelete={deleteTodo} 
        />

        {todos.length > 0 && (
            <footer className="mt-8 text-center text-sm text-slate-500">
                <p>
                    {todos.filter(t => !t.completed).length} tasks remaining out of {todos.length}.
                </p>
            </footer>
        )}
      </main>
       <footer className="mt-8 text-center text-xs text-slate-600">
        <p> ©Sabbir Mahmud Afridi</p>
      </footer>
    </div>
  );
};

export default App;
