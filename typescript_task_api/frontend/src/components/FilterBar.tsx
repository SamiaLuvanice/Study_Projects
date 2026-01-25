'use client';

import { cn } from '@/lib/utils';
import type { TaskPriority, TaskStatus } from '@/types/task';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  statusFilter: TaskStatus | 'all';
  priorityFilter: TaskPriority | 'all';
  onStatusChange: (status: TaskStatus | 'all') => void;
  onPriorityChange: (priority: TaskPriority | 'all') => void;
}

export function FilterBar({
  statusFilter,
  priorityFilter,
  onStatusChange,
  onPriorityChange,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/50">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Filtros
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
            Por Status
          </label>
          <div className="flex flex-wrap gap-3">
            {(['all', 'todo', 'doing', 'done'] as Array<TaskStatus | 'all'>).map((status: TaskStatus | 'all') => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={cn(
                  'px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border-2',
                  statusFilter === status
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg shadow-purple-500/50 scale-105'
                    : 'glass-effect text-gray-300 border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                )}
              >
                {status === 'all' && '📋 Todos'}
                {status === 'todo' && '🔴 A Fazer'}
                {status === 'doing' && '🔵 Em Progresso'}
                {status === 'done' && '✅ Concluídas'}
              </button>
            ))}
          </div>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
            Por Prioridade
          </label>
          <div className="flex flex-wrap gap-3">
            {(['all', 'low', 'medium', 'high'] as Array<TaskPriority | 'all'>).map((priority: TaskPriority | 'all') => (
              <button
                key={priority}
                onClick={() => onPriorityChange(priority)}
                className={cn(
                  'px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border-2',
                  priorityFilter === priority
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg shadow-purple-500/50 scale-105'
                    : 'glass-effect text-gray-300 border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                )}
              >
                {priority === 'all' && '⭐ Todas'}
                {priority === 'low' && '🟢 Baixa'}
                {priority === 'medium' && '🟡 Média'}
                {priority === 'high' && '🔴 Alta'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
