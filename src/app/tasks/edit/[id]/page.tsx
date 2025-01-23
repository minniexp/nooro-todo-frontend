'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TaskForm from '@/components/TaskForm';
import { getTaskById, updateTask } from '@/api/taskService';

export default function EditTask({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [color, setColor] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { id } = await params;
        const task = await getTaskById(id);
        setTitle(task.title);
        setColor(task.color);
      } catch (err) {
        setError('Failed to fetch task');
        console.error(err);
        throw err;
      }
    };
    fetchTask();
  }, [params]);

  const handleSubmit = async (title: string, color: string) => {
    setError('');
    setIsSubmitting(true);

    try {
      const { id } = await params;
      await updateTask(id, {
        title: title.trim(),
        color,
      });

      router.push('/');
    } catch (err) {
      setError(
        'There was an issue with updating this task. Refresh page and try again.'
      );
      console.error(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TaskForm
      initialTitle={title}
      initialColor={color}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      error={error}
      mode="edit"
    />
  );
}
