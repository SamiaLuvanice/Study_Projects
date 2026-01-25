'use client';

import type { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="text-9xl mb-8 opacity-50">📝</div>
        <h3 className="text-3xl font-bold text-gray-300 mb-4">
          Nenhuma tarefa encontrada
        </h3>
        <p className="text-lg text-gray-500">
          Crie sua primeira tarefa usando o botão "Nova Tarefa" acima
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
