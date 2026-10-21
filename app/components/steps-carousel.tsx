'use client';

import { Children, useRef, useState, type ReactNode } from 'react';

export function StepsCarousel({ children }: { children: ReactNode }) {
  const steps = Children.toArray(children);
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  return <>
    <ol id="how-steps" className="steps-grid" role="list" aria-label="How Delusionals works" tabIndex={0} ref={list} onScroll={event => {
      const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
      const distance = scrollWidth - clientWidth;
      setActive(distance > 0 ? Math.max(0, Math.min(steps.length - 1, Math.round(scrollLeft / distance * (steps.length - 1)))) : 0);
    }}>{steps}</ol>
    <div className="steps-pagination" role="group" aria-label="Choose a step">
      {steps.map((_, index) => <button key={index} type="button" aria-label={`Show step ${index + 1} of ${steps.length}`} aria-controls="how-steps" aria-current={active === index ? 'true' : undefined} onClick={() => {
        if (list.current) {
          const distance = list.current.scrollWidth - list.current.clientWidth;
          list.current.scrollTo({ left: distance * index / Math.max(1, steps.length - 1) });
        }
      }} />)}
    </div>
  </>;
}
