export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | any;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  liveUrl: string;
  githubUrl: string;
}