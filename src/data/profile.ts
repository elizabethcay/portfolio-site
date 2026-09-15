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
  name: 'elizabeth cay',
  intro:
    "is an interdisciplinary engineer based out of toronto, ca and a third-year engineering physics student at mcmaster university. a fanatic for creative writing, building altruistically, and iced london fogs.",
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
    `i'm a toronto native, studying <a href="https://www.eng.mcmaster.ca/engphys/" target="_blank" rel="noopener">engineering physics</a> at mcmaster university. alongside classical and modern physics coursework, i've taken technical electives i loved — data structures &amp; algorithms, scientific computing in c++, and numerical methods.`,
    `i'm most interested in creating efficient and equitable software. right now i'm building at <a href="#" target="_blank" rel="noopener">nenos inc.</a>, writing production backend features for a social-media app in node.js / typescript, and i'm on the hunt for a co-op starting may 2026.`,
    `outside of that i spend most days making dj mixes and sifting through substack articles about the tech landscape.`,
  ],
};

export const experience: Role[] = [
  {
    company: 'nenos inc.',
    title: 'open source software engineer',
    meta: '2026 - present · tampa, fl',
    blurb:
      'ship production backend features for a social-media ios app — node.js / typescript cloud functions on postgresql via google data connect. led api design with the head of engineering ahead of implementation, and held 100% test coverage across mocha, chai, and sinon.',
  },
  {
    company: 'develop for good',
    title: 'software engineer intern',
    meta: '2025 - 2026 · san francisco, ca',
    blurb:
      'migrated a cms from squarespace to wordpress with a cross-functional team, supporting a 20% gain in data-storage efficiency. ran research spikes on multilingual support and donation integrations, and authored the technical migration docs.',
  },
];

export const extracurriculars: Role[] = [
  {
    company: 'mcmaster engineering society',
    title: 'upper year mentor',
    meta: '2025 - present',
    blurb:
      '1-on-1 academic peer support for first-year engineering students.',
  },
  {
    company: 'mcmaster design league',
    title: 'software developer',
    meta: '2025 - 2026',
    blurb:
      'built python features and automated ci/cd test suites on a 5-person team supporting internal club tooling.',
  },
];

export const projects: Project[] = [
  {
    name: 'song recognition algorithm',
    stack: 'python, numpy, librosa',
    blurb:
      'a shazam-style recognizer using short-time fourier transform spectrogram analysis. a combinatorial hashing scheme cut query time by 10,000× over brute-force matching, and time-offset histogram matching hit 90% recognition above +7 db snr.',
  },
  {
    name: 'esp32 rhythm game (boppo)',
    stack: 'rust, python, esp32-s3',
    blurb:
      'a full-stack rhythm game for a screen-free kids’ tablet. a rust / webassembly engine handles the note state machine, input timing, hit-judging, scoring, and led rendering — all inside a 32 kb stack budget, with tests in cargo test and pytest.',
  },
];
