'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: 1 | 2 | 3;
  className?: string;
  style?: React.CSSProperties;
};

export function Reveal(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          el.classList.add('in');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = props.delay ? ` d${props.delay}` : '';

  return (
    <div ref={ref} className={`reveal${delayClass}${props.className ? ` ${props.className}` : ''}`} style={props.style}>
      {props.children}
    </div>
  );
}
