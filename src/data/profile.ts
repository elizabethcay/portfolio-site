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
    "A third-year engineering physics student at mcmaster university + A fan of creative writing, building altruistically, and iced london fogs.",
  avatar: '/assets/flower_icon.jpeg',
  avatarAlt: 'Elizabeth Cay Icon',
  links: {
    github: 'https://github.com/elizabethcay',
    linkedin: 'https://www.linkedin.com/in/elizabethcay/',
    email: 'caye@mcmaster.ca',
  },
};

export const about = {
  paragraphs: [
    `I'm a toronto native, studying <a href="https://www.eng.mcmaster.ca/engphys/" target="_blank" rel="noopener">engineering physics</a> at Mcmaster University. Alongside classical and modern physics coursework, I've taken technical electives like data structures &amp; algorithms, scientific computing in c++, and numerical methods.`,
    `I'm most interested in creating efficient and equitable software. Currently building at <a href="https://www.linkedin.com/company/nenosapps" target="_blank" rel="noopener">nenos inc.</a>, writing backend features for their iOS app & I'm on the hunt for a co-op/internship starting May 2026.`,
    `I spend my down time making dj mixes and sifting through Substack articles about the tech landscape.`,
  ],
};

export const experience: Role[] = [
  {
    company: 'nenos inc.',
    title: 'Open Source Software Engineer',
    meta: '2026 - Present · Based in Tampa, FL',
    blurb:
      'Backend app development.',
  },
  {
    company: 'Develop for Good',
    title: 'Software Engineer Intern',
    meta: '2025 - 2026 · Based in San Francisco, CA',
    blurb:
      'CMS migration, databases',
  },
];

export const extracurriculars: Role[] = [
  {
    company: 'McMaster Engineering Society',
    title: 'Upper Year Mentor',
    meta: '2025 - Present',
    blurb:
      "Reminding first years they're not cooked and it's not all over!",
  },
  {
    company: 'McMaster Design League',
    title: 'Software Developer',
    meta: '2025 - 2026',
    blurb:
      'Pitched future Python integrations and libraries on a 5-person team to support internal club tooling.',
  },
];

export const projects: Project[] = [
  {
    name: 'Song Recognition Algorithm',
    stack: 'Python, NumPy, librosa',
    blurb:
      'A Shazam-clone song recognizer using short-time fourier transform spectrogram analysis with combinatorial hashing scheme and time-offset histogram matching hit 90% recognition above +7 db snr.',
  },
  {
    name: 'ESP32-S3 rhythm game (Boppo)',
    stack: 'Rust, Python, ESP32-S3 Microcontroller',
    blurb:
      'A full-stack rhythm game for the Boppo, a screen-free kids’ tablet. Rust/WebAssembly engine for the note state machine, input timing, hit-judging, scoring, and led rendering inside a 32 kb stack budget.',
  },
];
