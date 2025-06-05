
import React, { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
