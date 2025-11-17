
import React from 'react';
import { serviceCategories } from '../constants';
import Section from './common/Section';

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Expert services tailored to your unique style and needs."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceCategories.map((category) => (
          <div
            key={category.category}
            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img src={category.image} alt={category.category} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80"></div>
            <div className="absolute inset-0 p-6 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-brand-gold">{category.category}</h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-grow">
                <ul className="text-gray-200 space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
