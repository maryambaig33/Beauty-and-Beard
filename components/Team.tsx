
import React from 'react';
import { stylists } from '../constants';
import Section from './common/Section';

const Team: React.FC = () => {
  return (
    <Section
      id="team"
      title="Meet Our Stylists"
      subtitle="The talented artists behind the chairs, dedicated to their craft."
      className="bg-gray-900"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stylists.map((stylist) => (
          <div key={stylist.name} className="text-center bg-brand-dark p-6 rounded-lg shadow-xl border border-gray-700">
            <img
              src={stylist.image}
              alt={stylist.name}
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-brand-gold"
            />
            <h3 className="text-xl font-bold font-serif text-brand-gold">{stylist.name}</h3>
            <p className="text-gray-400 mb-2">{stylist.title}</p>
            <p className="text-gray-300 text-sm">{stylist.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
