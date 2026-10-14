'use client';

import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  transitionSpeed?: 'default' | 'fast' | 'slow';
  autoAnimate?: boolean;
  id?: string;
}

export default function Slide({
  children,
  className = '',
  background,
  backgroundColor,
  backgroundImage,
  backgroundVideo,
  transition,
  transitionSpeed,
  autoAnimate = false,
  id,
}: SlideProps) {
  const dataAttrs: Record<string, string> = {};

  if (background) dataAttrs['data-background'] = background;
  if (backgroundColor) dataAttrs['data-background-color'] = backgroundColor;
  if (backgroundImage) dataAttrs['data-background-image'] = backgroundImage;
  if (backgroundVideo) dataAttrs['data-background-video'] = backgroundVideo;
  if (transition) dataAttrs['data-transition'] = transition;
  if (transitionSpeed) dataAttrs['data-transition-speed'] = transitionSpeed;
  if (autoAnimate) dataAttrs['data-auto-animate'] = 'true';

  return (
    <section className={className} id={id} {...dataAttrs}>
      {children}
    </section>
  );
}
