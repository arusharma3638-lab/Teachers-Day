import React, { useEffect, useRef } from 'react';

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
}

const FloatingElements: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createElements = () => {
      const elements: FloatingElement[] = [];
      const numElements = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < numElements; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.3 + 0.1,
          angle: Math.random() * Math.PI * 2
        });
      }

      elementsRef.current = elements;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach((element) => {
        // Update position
        element.x += Math.sin(element.angle) * element.speed;
        element.y += Math.cos(element.angle) * element.speed;
        element.angle += 0.002;

        // Wrap around screen
        if (element.x < 0) element.x = canvas.width;
        if (element.x > canvas.width) element.x = 0;
        if (element.y < 0) element.y = canvas.height;
        if (element.y > canvas.height) element.y = 0;

        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${element.opacity})`;
        ctx.fill();

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${element.opacity * 0.1})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createElements();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createElements();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingElements;