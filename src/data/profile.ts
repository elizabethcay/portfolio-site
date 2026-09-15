export interface Role {
  company: string;
  title: string;
  meta?: string;
  blurb?: string;
}

export interface Project {
  name: string;
  stack: string;
  blurb?: string;
  href?: string;
}

export const profile = {
  name: 'Elizabeth Cay',
  intro:
    "is an interdisciplinary engineer based out of toronto, ca and a third-year engineering physics student at mcmaster university. a fan of creative writing, building altruistically, and iced london fogs.",
  avatar: '/assets/flower_icon.jpeg',
  avatarAlt: 'elizabeth cay',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'caye@mcmaster.ca',
  },
};

export const about = {
  paragraphs: [
    `i'm a toronto native, studying <a href="https://www.eng.mcmaster.ca/engphys/" target="_blank" rel="noopener">engineering physics</a> at mcmaster university. alongside classical and modern physics coursework, i've taken technical electives like data structures &amp; algorithms, scientific computing in c++, and numerical methods.`,
    `i'm most interested in creating efficient and equitable software. right now i'm building at <a href="https://www.linkedin.com/company/nenosapps" target="_blank" rel="noopener">nenos inc.</a>, writing backend features for their social-media. i'm on the hunt for a co-op starting may 2026.`,
    `i spend my down time making dj mixes and sifting through substack articles about the tech landscape.`,
  ],
};

export const experience: Role[] = [
  {
    company: 'nenos inc.',
    title: 'open source software engineer',
    meta: '2026 - present · based in tampa, fl',
    blurb:
      'backed app development',
  },
  {
    company: 'develop for good',
    title: 'software engineer intern',
    meta: '2025 - 2026 · based in san francisco, ca',
    blurb:
      'cms migration, databases',
  },
];

export const extracurriculars: Role[] = [
  {
    company: 'mcmaster engineering society',
    title: 'upper year mentor',
    meta: '2025 - present',
    blurb:
      "reminding first years they're not cooked and it's not all over <3.",
  },
  {
    company: 'mcmaster design league',
    title: 'software developer',
    meta: '2025 - 2026',
    blurb:
      'pitched future python integrations and libraries on a 5-person team to support internal club tooling.',
  },
];

export const projects: Project[] = [
  {
    name: 'song recognition algorithm',
    stack: 'python, numpy, librosa',
    blurb:
      'a shazam-style recognizer using short-time fourier transform spectrogram analysis. a combinatorial hashing scheme and time-offset histogram matching hit 90% recognition above +7 db snr.',
  },
  {
    name: 'esp32 rhythm game (boppo)',
    stack: 'rust, python, esp32-s3',
    blurb:
      'a full-stack rhythm game for a screen-free kids’ tablet. a rust / webassembly engine for the note state machine, input timing, hit-judging, scoring, and led rendering inside a 32 kb stack budget.',
  },
];
