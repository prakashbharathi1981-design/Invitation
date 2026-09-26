import React, { useEffect, useRef, useState } from 'react';

const TRAIL_LENGTH = 18;

export const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let particles = [];
    let idCounter = 0;

    const tick = () => {
      const { x, y } = mouseRef.current;
      if (x > -100) {
        particles.push({
          id: idCounter++,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: 2 + Math.random() * 4,
          color: Math.random() > 0.5 ? '#FFD700' : '#C8A24D',
          born: Date.now(),
          life: 500 + Math.random() * 400,
        });
      }
      const now = Date.now();
      particles = particles.filter(p => now - p.born < p.life).slice(-TRAIL_LENGTH);
      setTrail([...particles]);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      {trail.map((p) => {
        const age = (Date.now() - p.born) / p.life;
        const opacity = Math.max(0, 1 - age);
        const scale = 1 - age * 0.6;
        return (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: 'opacity 0.1s',
            }}
          />
        );
      })}
    </div>
  );
};
