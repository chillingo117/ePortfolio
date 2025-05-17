export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | any;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}