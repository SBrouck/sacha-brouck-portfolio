import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navItems } from '@/config/navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={cn('article-header fixed top-0 left-0 right-0 z-50', className)}>
      <div className="article-header-inner">
        <NavLink to="/" className="article-header-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-serif text-sm text-neutral-800">Sacha Brouck</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                cn('article-nav-link', isActive && 'article-nav-link-active')
              }
            >
              {item.section}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="font-mono text-xs text-neutral-600 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-[#fafaf8]/98 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn('py-2 font-mono text-sm text-neutral-700', isActive && 'text-neutral-900')
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.section} {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
