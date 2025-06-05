
import React from 'react';
import { TodoItem } from '../types';

interface TodoListItemProps {
  todo: TodoItem;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.242.078 3.223.222m6.927 0pChRoLnN2ZyI+Cg==" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14m-9 3v8m4-8v8" />
  </svg>
);


const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-sm transition-all duration-200 ease-in-out
                    ${todo.completed ? 'bg-slate-200' : 'bg-white hover:shadow-md'}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="h-5 w-5 text-primary rounded border-slate-400 focus:ring-primary accent-secondary"
        />
        <span className={`ml-3 text-slate-700 ${todo.completed ? 'line-through text-slate-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="text-slate-500 hover:text-red-600 transition-colors"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </li>
  );
};

export default TodoListItem;
