'use client';

import type { CreateTaskDto, Task } from '@/types/task';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTaskDto) => void;
  task?: Task | null;
}

export function TaskForm({ isOpen, onClose, onSubmit, task }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskDto>({
    defaultValues: task || {
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
    },
  });

  const handleFormSubmit = (data: CreateTaskDto) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-effect-dark rounded-3xl shadow-2xl w-full max-w-md p-8 border border-white/10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {task ? 'Editar Tarefa' : 'Nova Tarefa'}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Título
                  </label>
                  <input
                    {...register('title', { required: 'Título é obrigatório' })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                    placeholder="Digite o título da tarefa"
                  />
                  {errors.title && (
                    <p className="text-red-400 text-sm mt-2">{errors.title.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Descrição
                  </label>
                  <textarea
                    {...register('description', { required: 'Descrição é obrigatória' })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none text-white placeholder-gray-500 transition-all"
                    placeholder="Descreva a tarefa"
                  />
                  {errors.description && (
                    <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>
                  )}
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Status
                  </label>
                  <select
                    {...register('status')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all cursor-pointer"
                  >
                    <option value="todo" className="bg-gray-800">🔴 A Fazer</option>
                    <option value="doing" className="bg-gray-800">🔵 Em Progresso</option>
                    <option value="done" className="bg-gray-800">✅ Concluída</option>
                  </select>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Prioridade
                  </label>
                  <select
                    {...register('priority')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all cursor-pointer"
                  >
                    <option value="low" className="bg-gray-800">🟢 Baixa</option>
                    <option value="medium" className="bg-gray-800">🟡 Média</option>
                    <option value="high" className="bg-gray-800">🔴 Alta</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 glass-effect border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold text-gray-300 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-bold shadow-lg shadow-purple-500/50"
                  >
                    {task ? 'Atualizar' : 'Criar'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
