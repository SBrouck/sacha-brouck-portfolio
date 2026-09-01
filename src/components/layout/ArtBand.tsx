import React from 'react';
import { cn } from '@/lib/utils';

const monetArt = '/images/517709ldsdl-964x777.jpg';

interface ArtBandProps {
  className?: string;
  variant?: 'full' | 'slim' | 'margin';
  position?: 'left' | 'right';
}

const ArtBand: React.FC<ArtBandProps> = ({
  className,
  variant = 'slim',
  position = 'right',
}) => {
  if (variant === 'margin') {
    return (
      <div
        aria-hidden
        className={cn(
          'art-margin-panel pointer-events-none fixed top-0 hidden h-screen w-[min(22vw,280px)] xl:block',
          position === 'right' ? 'right-0' : 'left-0',
          className
        )}
      >
        <img src={monetArt} alt="" className="h-full w-full object-cover saturate-[1.35] contrast-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/72 to-white/88" />
      </div>
    );
  }

  const heightClass =
    variant === 'full' ? 'h-[min(52vh,420px)]' : 'h-[min(28vh,220px)]';

  return (
    <div aria-hidden className={cn('relative my-10 overflow-hidden', heightClass, className)}>
      <img
        src={monetArt}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[58%_42%] saturate-[1.45] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf8]/96 via-[#fafaf8]/88 to-[#fafaf8]/96" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,200,120,0.18),transparent_55%)]" />
    </div>
  );
};

export default ArtBand;
