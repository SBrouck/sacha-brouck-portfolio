export const scrollToSection = (id: string, offset = 80) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: 'smooth',
  });
};
