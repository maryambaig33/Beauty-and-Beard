
export interface Service {
  name: string;
  description: string;
  price: string;
}

export interface ServiceCategory {
  category: string;
  items: Service[];
  image: string;
}

export interface Stylist {
  name: string;
  title: string;
  bio: string;
  image: string;
}
