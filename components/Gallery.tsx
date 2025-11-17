
import React from 'react';
import { galleryImages } from '../constants';
import Section from './common/Section';

const Gallery: React.FC = () => {
  return (
    <Section
      id="gallery"
      title="Our Work"
      subtitle="A glimpse into the transformations we create every day."
    >
      <div className="columns-2 md:columns-3 gap-4">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            className="h-auto max-w-full rounded-lg mb-4 shadow-lg transform transition-transform duration-300 hover:scale-105"
            src={src}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
