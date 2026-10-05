/**
 * Sir Ghulam Ali Soomro's High-Resolution Hosted Gallery Images
 */

export interface SirImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  tag: string;
  featured?: boolean;
}

export const SIR_IMAGES: SirImage[] = [
  {
    id: 'teaching-scholar',
    src: 'https://i.ibb.co/Q5nTWKW/IMG-20261005-WA0014.jpg',
    title: 'The Dedicated Educator',
    caption: 'Sir Ghulam Ali Soomro actively writing, teaching, and guiding minds at the Academy.',
    tag: 'Academic Mastery',
    featured: true,
  },
  {
    id: 'grand-celebration',
    src: 'https://i.ibb.co/K3gys78/IMG-20261005-WA0011.jpg',
    title: 'Grand Stage & Warmth',
    caption: 'Sir Ghulam Ali Soomro with open arms celebrating milestones and welcoming students.',
    tag: 'Visionary Leader',
    featured: true,
  },
  {
    id: 'joyful-mentor',
    src: 'https://i.ibb.co/G3n0YFsY/IMG-20261005-WA0013.jpg',
    title: 'Joy of Knowledge',
    caption: 'Sir Ghulam Ali Soomro smiling joyfully surrounded by books and eager learners.',
    tag: 'Inspiring Joy',
    featured: true,
  },
  {
    id: 'book-fair',
    src: 'https://i.ibb.co/JwNGHQ8p/IMG-20261005-WA0016.jpg',
    title: 'Love for Books & Literature',
    caption: 'Sir Ghulam Ali Soomro at the book festival, fostering a passion for lifelong reading.',
    tag: 'Lifelong Reader',
    featured: true,
  },
  {
    id: 'garden-serenity',
    src: 'https://i.ibb.co/14sjTMp/IMG-20261005-WA0015.jpg',
    title: 'Serenity & Grace',
    caption: 'Sir Ghulam Ali Soomro in a serene outdoor setting, personifying calm wisdom.',
    tag: 'Grace & Humility',
  },
];
