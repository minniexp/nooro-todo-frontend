'use client';

import React from 'react';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex-1 flex items-start justify-center bg-[#1A1A1A] overflow-y-auto pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p className="my-4 text-lg text-white">
          An error has occurred. Refresh page by clicking on the button below.
        </p>
        <Link href="/" className="w-full">
          <button
            className={`
              w-full flex items-center justify-center gap-2 p-4 bg-[#1E6F9F] text-white rounded-[8px] text-sm font-bold
              hover:bg-[#3B92C6]/80 transition-opacity duration-200 ease-in-out
            `}
          >
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
