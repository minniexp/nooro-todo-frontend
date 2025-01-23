import Image from 'next/image';

export default function NoTasksMessage() {
  return (
    <div className="text-center text-white flex flex-col justify-between items-center">
      <Image
        src="/images/clipboard.png"
        alt="Clipboard"
        width={56}
        height={56}
        className="mx-auto mt-16 mb-4 rounded-[8px]"
      />
      <p className="font-bold text-[16px] leading-[1.4] text-[#808080] pb-[16px]">
        {`You don't have any tasks registered yet.`}
      </p>
      <p className="text-[16px] leading-[1.4] text-[#808080]">
        {`Create tasks and organize your to-do items.`}
      </p>
    </div>
  );
}
