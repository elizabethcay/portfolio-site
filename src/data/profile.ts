export interface Card {
  title: string;
  sub?: string;
  date?: string;
  logo?: string;
  href?: string;
}

export const profile = {
  name: 'elizabeth c.',
  greetings: ['hey', 'xin chào', '你好'],
  bio: "i study engineering physics at mcmaster university. currently chasing engineering that's ethical and efficient.",
  links: {
    github: 'https://github.com/elizabethcay',
    linkedin: 'https://www.linkedin.com/in/elizabethcay/',
    email: 'caye@mcmaster.ca',
  },
};

export const work: Card[] = [
  {
    title: 'open source software engineer',
    sub: 'nenos inc.',
    date: 'july 2026 - present',
    logo: '/assets/nenos.png',
    href: '#',
  },
  {
    title: 'student software engineer',
    sub: 'develop for good',
    date: 'oct 2025 - feb 2026',
    logo: '/assets/develop_for_good.jpeg',
    href: '#',
  },
  {
    title: 'research assistant',
    sub: 'university of toronto',
    date: 'june 2024 - aug 2024',
    logo: '/assets/uoft.webp',
    href: '#',
  },
];

export const school: Card[] = [
  {
    title: 'mcmaster university',
    sub: 'engineering physics',
    logo: '/assets/mcmaster.svg',
    href: '#',
  },
];

export const projects: Card[] = [
  {
    title: 'music recognition algorithm',
    sub: 'real-time song recognition and noise isolation',
    href: '#',
  },
  {
    title: 'esp32 rhythm game',
    sub: "japanese rhythm game inspired game for the boppo (children's screenless tablet)",
    href: 'https://github.com/elizabethcay/boppo-rhythm-game',
  },
];

export const writing: Card[] = [
  {
    title: 'how the shazam algorithm works & how i cloned it',
    sub: 'short-time fourier transforms and extremely efficient hashing',
    date: 'aug 2026',
    href: '/blog/shazam-notes/',
  },
  {
    title: 'mimetic desire in the internship rat race',
    sub: 'reflections from the recruiting cycle',
    date: 'sept 2026',
    href: '/blog/mimetic-desire/',
  },
];
