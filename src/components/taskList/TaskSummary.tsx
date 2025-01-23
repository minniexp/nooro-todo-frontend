interface TaskSummaryProps {
  totalTasks: number;
  completedTasks: number;
}

export default function TaskSummary({
  totalTasks,
  completedTasks,
}: TaskSummaryProps) {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between items-center w-full border-b border-b-[#333333] pb-4">
      <div className="flex justify-between items-center md:justify-start w-full md:w-auto">
        <p className="font-bold text-sm text-[#4EA8DE]">Tasks</p>
        <p className="px-2 py-0.5 rounded border border-[#333333] bg-[#262626] rounded-[999px] font-bold text-xs text-[#D9D9D9] ml-2">
          {totalTasks}
        </p>
      </div>
      <div className="flex justify-between items-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
        <p className="font-bold text-sm text-[#8284FA]">Completed</p>
        <p className="px-2 py-0.5 rounded border border-[#333333] bg-[#262626] rounded-[999px] font-bold text-xs text-[#D9D9D9] ml-2">
          {totalTasks === 0 ? '0' : `${completedTasks} de ${totalTasks}`}
        </p>
      </div>
    </div>
  );
}
