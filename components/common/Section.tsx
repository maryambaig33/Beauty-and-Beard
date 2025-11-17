
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold">{title}</h2>
          <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
