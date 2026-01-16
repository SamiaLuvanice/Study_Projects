import React, { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // Estados para simular a estrutura (sem funcionalidade real ainda)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  return (
    <div className="todo-app">
      <header className="app-header">
        <h1>Minhas Tarefas</h1>
        <p>Organize seu dia com eficiência</p>
      </header>

      <div className="task-creator">
        <input
          type="text"
          className="task-input"
          placeholder="Adicione uma nova tarefa..."
          value={newTask}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
        />
        <button className="add-button">
          Adicionar
        </button>
      </div>

      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Pendentes
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Concluídas
        </button>
      </div>

      <div className="tasks-container">
        <div className="task-item">
          <div className="task-checkbox">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1"></label>
          </div>
          <span className="task-text">Exemplo de tarefa pendente</span>
          <button className="delete-btn">×</button>
        </div>

        <div className="task-item completed">
          <div className="task-checkbox">
            <input type="checkbox" id="task2" defaultChecked />
            <label htmlFor="task2"></label>
          </div>
          <span className="task-text">Exemplo de tarefa concluída</span>
          <button className="delete-btn">×</button>
        </div>
      </div>

      <div className="tasks-info">
        <p>Total de tarefas: <span>2</span></p>
      </div>

      <footer className="app-footer">
        <p>Feito por <span>#TeamCodersGrupo7</span></p>
      </footer>
    </div>
  );
};

export default TodoList;