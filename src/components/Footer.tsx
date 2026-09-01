import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '@/config/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="article-footer">
      <div className="article-column">
        <p className="article-footer-caption">End of document</p>
        <p className="mt-2 text-sm text-neutral-600">
          © {new Date().getFullYear()} Sacha Brouck · AI Engineer
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="article-footer-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
