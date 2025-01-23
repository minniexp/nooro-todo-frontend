'use client';

import React, { useState, useEffect } from 'react';
import BackButton from './taskForm/BackButton';
import TitleInput from './taskForm/TitleInput';
import ColorSelector from './taskForm/ColorSelector';
import Button from './common/Button';

interface TaskFormProps {
  initialTitle?: string;
  initialColor?: string;
  onSubmit: (title: string, color: string) => Promise<void>;
  isSubmitting: boolean;
  error: string;
  mode: 'create' | 'edit';
}

export default function TaskForm({
  initialTitle = '',
  initialColor = 'red',
  onSubmit,
  isSubmitting,
  error,
  mode,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [color, setColor] = useState(initialColor);
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    setTitle(initialTitle);
    setColor(initialColor);
  }, [initialTitle, initialColor]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    // Frontend Check for Title Character Length
    if (title.length > 240) {
      setLocalError('Title cannot exceed 240 characters.');
      return;
    }

    await onSubmit(title, color);
  };

  return (
    <div className="flex-1 flex items-start justify-center bg-[#1A1A1A] pt-20 pb-8">
      <div className="w-[40%] flex flex-col">
        {/* Back Button */}
        <BackButton />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title and Color Selector */}
          <div className="my-12 flex flex-col gap-6">
            {/* Title Input */}
            <TitleInput title={title} onTitleChange={setTitle} />

            {/* Color Selector */}
            <ColorSelector selectedColor={color} onColorSelect={setColor} />
          </div>

          {/* Error Message */}
          {(error || localError) && (
            <div className="bg-red-500 text-white text-sm p-4 rounded-[8px]">
              {localError || error}
            </div>
          )}

          {/* Submit Button - Add Task or Save */}
          {mode === 'create' ? (
            <Button
              onClick={(e) => handleSubmit(e)}
              label={isSubmitting ? 'Adding Task...' : 'Add Task'}
              iconSrc="/images/Add.png"
              iconAlt="Plus Sign"
              disabled={title.length === 0}
            />
          ) : (
            <Button
              onClick={(e) => handleSubmit(e)}
              label={isSubmitting ? 'Saving...' : 'Save'}
              iconSrc="/images/Check.png"
              iconAlt="Checkmark"
            />
          )}
        </form>
      </div>
    </div>
  );
}
