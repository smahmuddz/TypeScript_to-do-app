
import React from 'react';
import { TodoItem } from '../types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoItem[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => {
  if (todos.length === 0) {
    return <p className="text-center text-slate-500 py-4">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
