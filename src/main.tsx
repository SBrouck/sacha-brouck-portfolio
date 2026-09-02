import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const lockEnglishDocument = () => {
  const html = document.documentElement;
  html.lang = 'en';
  html.setAttribute('translate', 'no');
  html.classList.add('notranslate');

  document.body.lang = 'en';
  document.body.setAttribute('translate', 'no');
  document.body.classList.add('notranslate');

  const root = document.getElementById('root');
  if (root) {
    root.setAttribute('translate', 'no');
    root.classList.add('notranslate');
  }
};

lockEnglishDocument();

createRoot(document.getElementById('root')!).render(<App />);
