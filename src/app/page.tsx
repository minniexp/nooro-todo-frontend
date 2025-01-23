import { getAllTasks } from '@/api/taskService';
import TaskList from '@/components/TaskList';

export default async function HomePage() {
  try {
    const response = await getAllTasks();
    if (response.error || !response.data) {
      throw new Error(response.error || 'No data received');
    }
    return <TaskList initialTasks={response.data} />;
  } catch (error) {
    return (
      <div>
        Error loading tasks:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
}
