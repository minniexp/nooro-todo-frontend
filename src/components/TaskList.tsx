'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Task } from '@/types/task';
import {
  deleteTask as deleteTaskApi,
  getAllTasks,
  updateTask,
} from '@/api/taskService';
import TaskCard from './taskList/TaskCard';
import TaskSummary from './taskList/TaskSummary';
import NoTasksMessage from './taskList/NoTasksMessage';
import Button from './common/Button';

interface TaskListProps {
  initialTasks: Task[];
}

export default function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const router = useRouter();

  const handleDeleteTask = async (id: number) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    try {
      await deleteTaskApi(id);
      const response = await getAllTasks();
      if (response.error || !response.data) {
        throw new Error(response.error || 'Failed to fetch updated tasks');
      }
      setTasks(response.data); // Use response.data
    } catch (error) {
      console.error('Failed to delete task:', error);
      router.push('/error');
    }
  };

  const handleToggleComplete = async (task: Task) => {
    try {
      await updateTask(task.id, { completed: !task.completed });
      const response = await getAllTasks();
      if (response.error || !response.data) {
        throw new Error(response.error || 'Failed to fetch updated tasks');
      }
      setTasks(response.data); // Use response.data
    } catch (error) {
      console.error('Failed to update task:', error);
      router.push('/error');
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <>
      {/* Create Task Button */}
      <Button
        href="/tasks/new"
        label="Create Task"
        className="absolute top-[180px] w-[90%] md:w-[40%] text-center left-1/2 -translate-x-1/2 z-10"
        iconSrc="/images/Add.png"
        iconAlt="Add"
      />

      <div className="flex-1 flex items-start justify-center bg-[#1A1A1A] overflow-y-auto pb-4 pt-20">
        <div className="w-[90%] md:w-[40%] flex flex-col items-center justify-center">
          {/* Task Count and Completed Task Counts */}
          <TaskSummary
            totalTasks={tasks.length}
            completedTasks={completedCount}
          />

          {/* Task List */}
          <div className="space-y-4 text-black w-full">
            {tasks.length === 0 ? (
              <NoTasksMessage />
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
