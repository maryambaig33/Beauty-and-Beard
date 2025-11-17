
import React from 'react';
import Section from './common/Section';

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const ContactInfo: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-brand-gold">{icon}</div>
    <div>
      <h4 className="text-lg font-bold text-gray-100">{title}</h4>
      <div className="text-gray-300">{children}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const iconProps = {
    className: "h-8 w-8",
    strokeWidth: 1.5,
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="We'd love to hear from you. Visit us or give us a call to schedule your next appointment."
    >
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              title="Our Address"
              icon={
                <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              }
            >
              <p>123 Style Avenue</p>
              <p>Metropolis, ST 12345</p>
            </ContactInfo>
            <ContactInfo
              title="Contact Us"
              icon={
                <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.108.892-2.008 2-2.008h15.5c1.108 0 2 .9 2 2.008v10.5c0 1.108-.892 2.008-2 2.008H4.25c-1.108 0-2-.9-2-2.008V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.5l8.25 5.5 8.25-5.5" />
                </svg>
              }
            >
              <p>Email: contact@beautyandbeard.com</p>
              <p>Phone: (555) 123-4567</p>
            </ContactInfo>
          </div>
          <div className="space-y-8">
            <ContactInfo
              title="Hours"
              icon={
                <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              <p>Tuesday - Friday: 9am - 7pm</p>
              <p>Saturday: 9am - 5pm</p>
              <p>Sunday & Monday: Closed</p>
            </ContactInfo>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
