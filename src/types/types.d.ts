type Project = {
  id: number;
  created_at: Date;
  type: string;
  name: string;
  description: string;
  tech: string;
  image: string;
  alt: string;
  liveUrl?: string;
  githubUrl?: string;
};

type Blog = {
  id: number;
  created_at: Date;
  title: string;
  topics: string;
  updated_at?: Date;
  content: string;
};

type Work = {
  id: number;
  created_at: Date;
  company: string;
  position: string;
  date: string;
  location: string;
  description: string;
};
