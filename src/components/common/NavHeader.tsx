'use client';

import { useRouter } from 'next/navigation';

interface NavHeaderProps {
  title?: string;
}

const NavHeader = ({ title }: NavHeaderProps) => {
  const router = useRouter();
  const handleLeftClick = () => {
    router.back();
  };
  return (
    <div className="sticky  mb-5 h-[3.125rem] border-b-1 border-[#D9D9D9] flex items-center justify-center">
      {/* 이전 단계로 이동 */}
      <button onClick={handleLeftClick} className="fixed left-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L8.56066 12L15.5303 18.9697C15.8232 19.2626 15.8232 19.7374 15.5303 20.0303C15.2374 20.3232 14.7626 20.3232 14.4697 20.0303L6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z"
            fill="black"
            fillOpacity="0.8"
          />
        </svg>
      </button>

      <div className="font-bold text-lg mx-auto">{title}</div>
    </div>
  );
};
export default NavHeader;
