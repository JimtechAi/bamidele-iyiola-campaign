import React from 'react';
import Image from 'next/image';

interface IkejaClubLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
  priority?: boolean;
}

export const IkejaClubLogo: React.FC<IkejaClubLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'color',
  priority = false,
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', textTitle: 'text-xs', textSub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', textTitle: 'text-sm sm:text-base', textSub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', textTitle: 'text-lg sm:text-xl', textSub: 'text-xs' },
    xl: { icon: 'w-20 h-20', textTitle: 'text-2xl', textSub: 'text-sm' },
  };

  const selectedSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className={`relative shrink-0 ${selectedSize.icon} group overflow-hidden rounded-lg shadow-sm`}>
        <Image
          src="/images/branding/ikejaclub-logo.webp"
          alt="Ikeja Club logo"
          fill
          sizes={size === 'xl' ? '(max-width: 768px) 80px, 96px' : '(max-width: 768px) 40px, 56px'}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-cinzel font-extrabold tracking-wider leading-none ${selectedSize.textTitle} ${
              variant === 'light' ? 'text-white' : 'text-[#1F2937]'
            }`}
          >
            IKEJA CLUB
          </span>
          <span
            className={`font-poppins font-semibold uppercase tracking-widest mt-0.5 ${selectedSize.textSub} ${
              variant === 'light' ? 'text-[#E5C358]' : 'text-[#7A1730]'
            }`}
          >
            EST. 1966 • LAGOS
          </span>
        </div>
      )}
    </div>
  );
};
