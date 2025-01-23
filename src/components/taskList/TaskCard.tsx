'use client';

import { Task } from '@/types/task';
import { colorMapping } from '@/utils/colorMapping';
import Image from 'next/image';
import Link from 'next/link';

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (task: Task) => void;
}

export default function TaskCard({
  task,
  onDelete,
  onToggleComplete,
}: TaskCardProps) {
  return (
    <div
      key={task.id}
      className="p-4 rounded border border-[#333333] bg-[#262626] rounded-[8px] min-h-[72px]"
    >
      <div className="grid grid-cols-[24px_1fr_24px] items-start gap-2 h-full">
        {/* Checkmark Column */}
        <div className="w-6 h-6 flex justify-end">
          <div
            className={`h-4 w-4 min-w-[16px] min-h-[16px] rounded-full border-2 cursor-pointer flex items-center justify-center`}
            onClick={() => onToggleComplete(task)}
            style={{
              backgroundColor: task.completed
                ? colorMapping[task.color]
                : 'transparent',
              borderColor: colorMapping[task.color],
            }}
          >
            {task.completed && (
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#f2f2f2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Task Title Column */}
        <div className="flex items-start">
          <Link
            href={`/tasks/edit/${task.id}`}
            className="text-blue-500 hover:text-blue-600"
          >
            <p
              className={`text-[#f2f2f2] font-sans text-sm ${task.completed ? 'line-through' : ''}`}
            >
              {task.title}
            </p>
          </Link>
        </div>

        {/* Trash Icon Column */}
        <div className="w-6 h-6 flex justify-center items-center">
          <Image
            src="/images/Trash.png"
            alt="Trash icon"
            width={12}
            height={14}
            className="cursor-pointer"
            style={{ minWidth: '12px', minHeight: '14px' }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </div>
    </div>
  );
}
