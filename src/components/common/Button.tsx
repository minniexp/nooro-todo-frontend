'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  label,
  className = '',
  iconSrc,
  iconAlt = '',
  iconWidth = 16,
  iconHeight = 16,
  disabled = false,
}: ButtonProps) {
  const buttonContent = (
    <div
      className={`
        flex items-center justify-center gap-2 p-4 bg-[#1E6F9F] text-white rounded-[8px]
        hover:bg-[#3B92C6]/80 font-bold text-sm ${className}
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      `}
    >
      {label}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="z-10">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="w-full" disabled={disabled}>
      {buttonContent}
    </button>
  );
}
