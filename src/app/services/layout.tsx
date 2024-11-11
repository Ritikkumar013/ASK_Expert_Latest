// src/app/services/layout.tsx
import { ReactNode } from 'react';

interface ServicesLayoutProps {
  children: ReactNode;
}

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 w-full">
        {children}
      </main>
    
    </div>
  );
};
export default ServicesLayout;
