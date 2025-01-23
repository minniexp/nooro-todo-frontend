import { colorMapping } from '../../utils/colorMapping';

const colorOptions: { value: string }[] = [
  { value: 'red' },
  { value: 'orange' },
  { value: 'yellow' },
  { value: 'green' },
  { value: 'blue' },
  { value: 'indigo' },
  { value: 'purple' },
  { value: 'pink' },
  { value: 'brown' },
];

interface ColorSelectorProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export default function ColorSelector({
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#4EA8DE] mb-2">
        Color
      </label>
      <div className="flex flex-wrap gap-4">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorSelect(color.value)}
            className={`
              w-12 h-12 rounded-full
              ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-black' : ''}
              transition-all hover:scale-110
            `}
            style={{ backgroundColor: colorMapping[color.value] }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
