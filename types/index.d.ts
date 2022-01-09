export type SectionNames = 'about' | 'jobs' | 'projects';

export type FrontMatterData = { [key: string]: any; };

export type File<T extends FrontMatterData> = {
  id: string,
  data: T,
  content: string,
}

export type AboutData = {
  email: string,
  github: string,
  instagram: string,
  website: string,
}

export type JobData = {
  company: string,
  website: string,
  jobTitle: string,
  from: string,
  to?: string,
  tags: string[],
  project?: string,
  jobTitleStatus?: 'Freelance' | 'Contractor',
}

export type ProjectData = {
  project: string,
  github: string,
  website?: string,
}