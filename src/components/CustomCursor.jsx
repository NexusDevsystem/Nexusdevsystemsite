import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setCursorVariant('click');
    };

    const handleMouseUp = () => {
      setCursorVariant('default');
    };

    const handleMouseEnterInteractive = () => {
      setCursorVariant('hover');
    };

    const handleMouseLeaveInteractive = () => {
      setCursorVariant('default');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Adiciona listeners para elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'transparent',
      border: '2px solid #a0aec0',
      mixBlendMode: 'difference',
      transition: { type: "spring", damping: 15 }
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'transparent',
      border: '2px solid #63b3ed',
      mixBlendMode: 'difference',
      transition: { type: "spring", damping: 10 }
    },
    click: {
      width: 16,
      height: 16,
      backgroundColor: '#63b3ed',
      border: 'none',
      mixBlendMode: 'difference',
      transition: { type: "spring", damping: 20 }
    }
  };

  const currentVariant = cursorVariants[cursorVariant];

  return (
    <div
      className="custom-cursor fixed rounded-full pointer-events-none z-50 hidden md:block"
      style={{
        left: mousePosition.x - currentVariant.width / 2,
        top: mousePosition.y - currentVariant.height / 2,
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
        mixBlendMode: currentVariant.mixBlendMode,
        transition: currentVariant.transition,
        transform: 'translate(-50%, -50%)',
        zIndex: 99999,
      }}
    />
  );
};

export default CustomCursor;