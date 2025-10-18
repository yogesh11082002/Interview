export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'frontend',
    name: 'Frontend',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks like React.',
    image: 'frontend',
  },
  {
    slug: 'backend',
    name: 'Backend',
    description: 'Dive deep into server-side logic, databases, and APIs.',
    image: 'backend',
  },
  {
    slug: 'full-stack',
    name: 'Full Stack',
    description: 'Bridge the gap between frontend and backend development.',
    image: 'full-stack',
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    description: 'Build high-performance React applications with Next.js.',
    image: 'next-js',
  },
  {
    slug: 'java',
    name: 'Java',
    description: 'Solidify your Java fundamentals and advanced concepts.',
    image: 'java',
  },
  {
    slug: 'python',
    name: 'Python',
    description: 'From algorithms to data structures, conquer Python interviews.',
    image: 'python',
  },
  {
    slug: 'mern',
    name: 'MERN Stack',
    description: 'Excel in full-stack development with MongoDB, Express, React, and Node.js.',
    image: 'mern',
  },
  {
    slug: 'c-plus-plus',
    name: 'C++',
    description: 'Sharpen your skills in systems programming and performance-critical applications.',
    image: 'c-plus-plus',
  },
  {
    slug: 'devops',
    name: 'DevOps',
    description: 'Understand infrastructure, CI/CD, and deployment pipelines.',
    image: 'devops',
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    description: 'Tackle questions on statistics, machine learning, and data analysis.',
    image: 'data-science',
  },
  {
    slug: 'ai-ml',
    name: 'AI & ML',
    description: 'Explore concepts in artificial intelligence and machine learning.',
    image: 'ai-ml',
  },
  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Prepare for roles involving AWS, Azure, and Google Cloud Platform.',
    image: 'cloud-computing',
  },
  {
    slug: 'mobile-development',
    name: 'Mobile Development',
    description: 'Master app development with Swift, Kotlin, and React Native.',
    image: 'mobile-development',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Dive into network security, ethical hacking, and cryptography concepts.',
    image: 'cybersecurity',
  }
];
