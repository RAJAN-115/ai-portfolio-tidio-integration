import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return <div className={`container mx-auto px-4 py-8 ${className}`}>{children}</div>;
}
