import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import { AboutData, File, JobData, ProjectData, FrontMatterData } from '@/types/index';

const mkDir = (dir: string[]) => path.join(...dir);
const aboutDirectory = mkDir([process.cwd(), 'content', 'about']);
const jobsDirectory = mkDir([process.cwd(),'content', 'jobs']);
const projectsDirectory = mkDir([process.cwd(),'content', 'jobs']);
const contentDirectory = mkDir([process.cwd(), 'content']);

const readFile = (fileName: string, directory: string) => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = mkDir([directory, fileName]);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    id,
    data,
    content
  }
}

const getFilesContent = <T extends FrontMatterData>(directory: string): File<T>[] => {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((filename) => {
    return readFile(filename, directory)
  }) as File<T>[];
} 

const ascendingOrder = (a: string, b: string) => {
  return a < b ? 1 : a > b ? -1 : 0;
}

export const jobsData = getFilesContent<JobData>(jobsDirectory).sort((fileA, fileB) => ascendingOrder(fileA.data.from, fileB.data.from));

export const projectsData = getFilesContent<ProjectData>(projectsDirectory);

export const aboutData = readFile('summary.md', aboutDirectory) as File<AboutData>;
