'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TaskForm from '@/components/TaskForm';
import { createTask } from '@/api/taskService';

export default function CreateTask() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (title: string, color: string) => {
    setError('');
    setIsSubmitting(true);

    try {
      await createTask({
        title: title.trim(),
        color,
        completed: false,
      });

      router.push('/');
    } catch (err) {
      setError(
        'There was an issue with creating this task. Refresh page and try again.'
      );
      console.error(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TaskForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      error={error}
      mode="create"
    />
  );
}
