import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/animations/FadeIn';

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: 'default' | 'muted' | 'contrast';
}

const toneClasses = {
  default: 'bg-white',
  muted: 'bg-stone-50',
  contrast: 'bg-navy text-white',
};

const SectionShell: React.FC<SectionShellProps> = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  tone = 'default',
}) => {
  const isContrast = tone === 'contrast';

  return (
    <section id={id} className={cn('py-20 md:py-28', toneClasses[tone], className)}>
      <div className={cn('container mx-auto px-6 md:px-12', contentClassName)}>
        <div className="max-w-3xl mx-auto mb-14 md:mb-16 text-center">
          {eyebrow && (
            <FadeIn>
              <p
                className={cn(
                  'mb-4 font-serif text-sm italic text-neutral-500',
                  isContrast ? 'text-white/70' : 'text-terracotta'
                )}
              >
                {eyebrow}
              </p>
            </FadeIn>
          )}
          <FadeIn delay={eyebrow ? 60 : 0}>
            <h2
              className={cn(
                'text-3xl md:text-4xl lg:text-[2.75rem] font-playfair leading-tight',
                isContrast ? 'text-white' : 'text-ink'
              )}
            >
              {title}
            </h2>
          </FadeIn>
          {description && (
            <FadeIn delay={120}>
              <p
                className={cn(
                  'mt-5 text-lg leading-relaxed',
                  isContrast ? 'text-white/80' : 'text-slate-600'
                )}
              >
                {description}
              </p>
            </FadeIn>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionShell;
