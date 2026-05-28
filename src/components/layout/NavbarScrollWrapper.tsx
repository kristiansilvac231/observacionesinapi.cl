'use client';

import { useEffect, useRef } from 'react';

export function NavbarScrollWrapper(props: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => el.classList.toggle('nav-scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 w-full border-b border-transparent transition-[border-color,box-shadow] duration-300"
      style={{
        background: 'color-mix(in oklch, var(--bg) 80%, transparent)',
        backdropFilter: 'blur(14px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.3)',
      }}
    >
      {props.children}
    </header>
  );
}
