'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 justify-center">
      <Image
        src="/images/Logo.png"
        alt="Todo List Logo"
        width={22}
        height={36}
      />
      <h1 className="text-[40px] font-black">
        <span className="text-[#4EA8DE]">Todo</span>
        <span className="text-[#5E60CE]">App</span>
      </h1>
    </Link>
  );
}
