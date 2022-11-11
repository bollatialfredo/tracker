export const animateElementClick = (ev: MouseEvent) => {
  const target = (ev.target as HTMLElement);
  const animation = document.createElement('span');
  animation.style.position = 'absolute';
  animation.style.top = ev.offsetY - 5 + 'px';
  animation.style.left = ev.offsetX - 5 + 'px';
  animation.style.height = '10px';
  animation.style.width = '10px';
  animation.style.borderRadius = '100px';
  animation.style.opacity = '1';
  animation.style.backgroundColor = '#1890ff';
  animation.style.pointerEvents = 'none';
  animation.style.zIndex = '9999';
  target?.appendChild(animation);
  const interval = setInterval(()=>{
    animation.style.opacity = (parseFloat(animation.style.opacity) - .033).toString();
    animation.style.top = parseInt(animation.style.top) - 4 + 'px';
    animation.style.left = parseInt(animation.style.left) - 4 + 'px';
    animation.style.height = parseInt(animation.style.height) + 8 + 'px';
    animation.style.width = parseInt(animation.style.width) + 8 + 'px';
  }, 10);
  setTimeout(() => {
    clearInterval(interval)
    target?.removeChild(animation);
  }, 300);
}