interface TitleInputProps {
  title: string;
  onTitleChange: (newTitle: string) => void;
}

export default function TitleInput({ title, onTitleChange }: TitleInputProps) {
  return (
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-bold text-[#4EA8DE] mb-2"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full h-[52px] p-4 bg-[#262626] border border-[#333333] text-sm text-[#f2f2f2] rounded-[8px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E6F9F] focus:border-[#1E6F9F]"
        placeholder="Ex. Brush your teeth"
        required
      />
    </div>
  );
}
