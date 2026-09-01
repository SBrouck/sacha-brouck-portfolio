import React from 'react';
import { cn } from '@/lib/utils';

interface ArticleSectionProps {
  id?: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({
  id,
  number,
  title,
  children,
  className,
  contentClassName,
}) => {
  return (
    <section id={id} className={cn('article-section', className)}>
      <div className={cn('article-column', contentClassName)}>
        <header className="article-section-header">
          <span className="article-section-number">{number}</span>
          <h2 className="article-section-title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
};

export default ArticleSection;
