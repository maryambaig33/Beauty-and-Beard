
import { ServiceCategory, Stylist } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'Haircuts & Styling',
    image: 'https://picsum.photos/seed/haircut/600/400',
    items: [
      { name: "Women's Haircut", description: 'Shampoo, cut, and style.', price: '$65+' },
      { name: "Men's Haircut", description: 'Classic cut and style.', price: '$40+' },
      { name: 'Blowout', description: 'Shampoo and professional styling.', price: '$50+' },
      { name: 'Updo / Special Occasion', description: 'Elegant styling for your event.', price: '$85+' },
    ],
  },
  {
    category: 'Color Services',
    image: 'https://picsum.photos/seed/haircolor/600/400',
    items: [
      { name: 'Single Process Color', description: 'All-over color application.', price: '$120+' },
      { name: 'Partial Highlights', description: 'Highlights on the top half of your head.', price: '$150+' },
      { name: 'Full Highlights', description: 'Highlights throughout your hair.', price: '$200+' },
      { name: 'Balayage / Ombré', description: 'Hand-painted color for a natural look.', price: '$250+' },
    ],
  },
  {
    category: 'Treatments',
    image: 'https://picsum.photos/seed/treatment/600/400',
    items: [
      { name: 'Deep Conditioning Treatment', description: 'Intensive moisture and repair.', price: '$45+' },
      { name: 'Keratin Smoothing Treatment', description: 'Reduces frizz and adds shine.', price: '$300+' },
      { name: 'Scalp Treatment', description: 'Exfoliates and revitalizes the scalp.', price: '$55+' },
    ],
  },
  {
    category: 'Beard & Wax',
    image: 'https://picsum.photos/seed/beard/600/400',
    items: [
      { name: 'Beard Trim', description: 'Shape and refine your beard.', price: '$25+' },
      { name: 'Hot Towel Shave', description: 'A classic, relaxing shave.', price: '$45+' },
      { name: 'Eyebrow Wax', description: 'Shape and define your brows.', price: '$20+' },
      { name: 'Lip/Chin Wax', description: 'Facial hair removal.', price: '$15+' },
    ],
  },
];

export const stylists: Stylist[] = [
  {
    name: 'Jessica "The Beauty"',
    title: 'Owner & Master Stylist',
    bio: 'With over 15 years of experience, Jessica specializes in transformative color and precision cuts. Her passion is making every client feel like the best version of themselves.',
    image: 'https://picsum.photos/seed/jessica/500/500',
  },
  {
    name: 'Cody "The Beard"',
    title: 'Owner & Master Barber',
    bio: 'Cody is an expert in classic barbering techniques, from sharp fades to luxurious hot towel shaves. He believes a great haircut is the foundation of confidence.',
    image: 'https://picsum.photos/seed/cody/500/500',
  },
  {
    name: 'Maria Rodriguez',
    title: 'Color Specialist',
    bio: 'Maria lives and breathes color. A true artist, she excels in balayage, vivids, and color corrections, creating custom looks that shine.',
    image: 'https://picsum.photos/seed/maria/500/500',
  },
  {
    name: 'David Chen',
    title: 'Stylist & Extension Expert',
    bio: 'David is your go-to for volume and length. He is certified in multiple hair extension methods and loves creating dramatic, seamless transformations.',
    image: 'https://picsum.photos/seed/david/500/500',
  },
];

export const galleryImages: string[] = [
  'https://picsum.photos/seed/gal1/600/800',
  'https://picsum.photos/seed/gal2/600/800',
  'https://picsum.photos/seed/gal3/600/800',
  'https://picsum.photos/seed/gal4/600/800',
  'https://picsum.photos/seed/gal5/600/800',
  'https://picsum.photos/seed/gal6/600/800',
];
