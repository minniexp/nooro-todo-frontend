'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="cursor-pointer" onClick={handleBack}>
      <Image
        src="/images/Back.png"
        alt="Back"
        width={16}
        height={16}
        className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
    </div>
  );
}
