import { Task } from '@/types/task';
import { ApiResponse } from '@/types/api';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Get all tasks
export async function getAllTasks(): Promise<ApiResponse<Task[]>> {
  try {
    const response = await fetch(`${API_URL}/tasks`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    const data: Task[] = await response.json();
    return { data };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Get task by Id
export async function getTaskById(id: string): Promise<Task> {
  try {
    const response = await fetch(`${API_URL}/tasks/edit/${id}`);

    if (response.status !== 200) {
      const errorData = await response.text();
      console.error('Error response:', errorData);
      throw new Error(`Failed to fetch task by Id: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch task by Id error:', error);
    throw error;
  }
}

// Create task
export async function createTask(
  task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Task> {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });

    if (response.status !== 201) {
      throw new Error('Failed to create task');
    }

    return response.json();
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

// Update task
export async function updateTask(
  id: string | number,
  updates: Partial<Task>
): Promise<Task> {
  try {
    const response = await fetch(`${API_URL}/tasks/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    if (response.status !== 200) {
      const errorData = await response.text();
      console.error('Error updating task:', errorData);
      throw new Error(
        `Failed to update task ${id}: ${response.status} - ${errorData}`
      );
    }

    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    console.error(`Error updating task ${id}:`, error);
    throw error;
  }
}

// Delete task
export async function deleteTask(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });

    if (response.status !== 204) {
      throw new Error(`Failed to delete task: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
}
