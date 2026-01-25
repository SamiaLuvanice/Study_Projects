'use client';

import { FilterBar } from '@/components/FilterBar';
import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';
import { taskService } from '@/services/api';
import type { CreateTaskDto, Task, TaskPriority, TaskStatus, UpdateTaskDto } from '@/types/task';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CheckCircle2, Circle, Clock, Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | 'all'>('all');

  const queryClient = useQueryClient();

  // Fetch all tasks
  const { data: tasks = [], isLoading } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: taskService.getAllTasks,
  });

  // Create task mutation
  const createMutation = useMutation({
    mutationFn: taskService.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Tarefa criada com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao criar tarefa');
    },
  });

  // Update task mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTaskDto }) =>
      taskService.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Tarefa atualizada com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao atualizar tarefa');
    },
  });

  // Delete task mutation
  const deleteMutation = useMutation({
    mutationFn: taskService.deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Tarefa excluída com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao excluir tarefa');
    },
  });

  // Handlers
  const handleCreateTask = (data: CreateTaskDto) => {
    if (editingTask) {
      updateMutation.mutate({ id: editingTask.id, data });
      setEditingTask(null);
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleDeleteTask = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  // Stats
  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === 'todo').length,
    doing: tasks.filter((t) => t.status === 'doing').length,
    done: tasks.filter((t) => t.status === 'done').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black">
      {/* Header Sticky */}
      <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">📋</div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TaskFlow
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">Organize sua produtividade</p>
              </div>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/50 font-semibold text-sm transform hover:scale-105 duration-200 w-full sm:w-auto"
            >
              <Plus className="w-5 h-5" />
              Nova Tarefa
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Seção de Estatísticas */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Visão Geral
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 rounded-2xl transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-700 group-hover:to-purple-800 transition-all">
                  <Circle className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Total de Tarefas</p>
                <p className="text-4xl font-bold text-white">{stats.total}</p>
              </div>
            </div>

            {/* A Fazer Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:shadow-orange-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/5 group-hover:to-red-600/5 rounded-2xl transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-700 to-orange-800 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                  <Circle className="w-6 h-6 text-orange-300" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">A Fazer</p>
                <p className="text-4xl font-bold text-orange-400">{stats.todo}</p>
              </div>
            </div>

            {/* Em Progresso Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 rounded-2xl transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-700 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Clock className="w-6 h-6 text-blue-300" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Em Progresso</p>
                <p className="text-4xl font-bold text-blue-400">{stats.doing}</p>
              </div>
            </div>

            {/* Concluídas Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-green-600/0 group-hover:from-emerald-600/5 group-hover:to-green-600/5 rounded-2xl transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Concluídas</p>
                <p className="text-4xl font-bold text-emerald-400">{stats.done}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Filtros */}
        <div className="mb-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
          <FilterBar
            statusFilter={statusFilter}
            priorityFilter={priorityFilter}
            onStatusChange={setStatusFilter}
            onPriorityChange={setPriorityFilter}
          />
        </div>

        {/* Seção de Tarefas */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
          {/* Header da Seção */}
          <div className="border-b border-purple-500/10 bg-black/30 px-6 sm:px-8 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {filteredTasks.length === 0 ? 'Sem Tarefas' : `${filteredTasks.length} ${filteredTasks.length === 1 ? 'Tarefa' : 'Tarefas'}`}
                </span>
              </h2>
              {filteredTasks.length > 0 && statusFilter !== 'all' && (
                <span className="text-xs sm:text-sm text-gray-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                  Filtro: {statusFilter === 'todo' ? '🔴 A Fazer' : statusFilter === 'doing' ? '🔵 Em Progresso' : '✅ Concluídas'}
                </span>
              )}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 sm:p-8">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center py-24">
                <div className="relative">
                  <div className="animate-spin rounded-full h-24 w-24 border-4 border-purple-900/30 border-t-purple-500 shadow-lg shadow-purple-500/30" />
                </div>
                <p className="text-gray-400 font-medium mt-8 text-lg">Carregando tarefas...</p>
              </div>
            ) : (
              <TaskList
                tasks={filteredTasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            )}
          </div>
        </div>
      </main>

      {/* Task Form Modal */}
      <TaskForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleCreateTask}
        task={editingTask}
      />
    </div>
  );
}
