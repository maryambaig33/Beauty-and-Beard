
import React from 'react';
import Section from './common/Section';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="Our Story"
      subtitle="Crafting beauty and confidence since 2015."
      className="bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/seed/salon-interior/800/600"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-lg text-gray-300 space-y-4">
          <p>
            Welcome to The Beauty and The Beard, a sanctuary of style nestled in the heart of the city. Founded by Jessica and Cody, our salon was born from a shared passion for the artistry of hair and a desire to create a welcoming space for everyone.
          </p>
          <p>
            We believe that a haircut is more than just a service; it's a form of self-expression. Our team of dedicated professionals is committed to providing personalized care, using the finest products and the latest techniques to bring your vision to life.
          </p>
          <p>
            Whether you're looking for a classic trim, a bold new color, or a relaxing shave, we invite you to experience the difference that passion and expertise can make.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
