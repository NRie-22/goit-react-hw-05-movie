export const scrollTop = () => {
  const box = document.querySelector('.infinite-scroll-component ');
  box.scrollTo({ top: 0, behavior: 'smooth' });
};

export const boxScroll = () => {
  const box = document.querySelector('.infinite-scroll-component ');
  if (box) {
    const scrollPosition = box.scrollTop;
    return scrollPosition;
  }
};

export function scrollPos(containerRef) {
  if (containerRef !== undefined) {
    localStorage.setItem('scrollPos', containerRef);
  } else {
    localStorage.setItem('scrollPos', 0);
  }
}

export const infiniteHeight = () => {
  return window.innerHeight - 150;
};
