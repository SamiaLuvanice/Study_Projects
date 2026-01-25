'use client';

import { cn, formatDate } from '@/lib/utils';
import type { Task } from '@/types/task';
import { motion } from 'framer-motion';
import { Clock, Edit2, Trash2 } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const priorityColors = {
  low: 'bg-green-500/20 text-green-300 border-green-500/30 shadow-green-500/20',
  medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30 shadow-amber-500/20',
  high: 'bg-red-500/20 text-red-300 border-red-500/30 shadow-red-500/20',
};

const statusColors = {
  todo: 'glass-effect border-orange-500/30 hover:border-orange-500/50',
  doing: 'glass-effect border-blue-500/30 hover:border-blue-500/50',
  done: 'glass-effect border-emerald-500/30 hover:border-emerald-500/50',
};

const priorityLabels = {
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
};

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={cn(
        'p-6 rounded-2xl border-2 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-lg',
        statusColors[task.status]
      )}
    >
      <div className="flex justify-between items-start gap-3 mb-4">
        <h3 className="text-xl font-bold text-white flex-1 leading-snug">
          {task.title}
        </h3>
        <span
          className={cn(
            'px-3 py-1.5 text-xs font-bold rounded-xl border-2 shadow-lg shrink-0 uppercase tracking-wide',
            priorityColors[task.priority]
          )}
        >
          {priorityLabels[task.priority]}
        </span>
      </div>

      <p className="text-gray-300 text-base mb-5 leading-relaxed">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <Clock className="w-4 h-4" />
          <span>{formatDate(task.createdAt)}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-all text-blue-300 font-medium border border-blue-500/30 hover:border-blue-500/50"
            aria-label="Editar tarefa"
            title="Editar"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all text-red-300 font-medium border border-red-500/30 hover:border-red-500/50"
            aria-label="Deletar tarefa"
            title="Excluir"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
