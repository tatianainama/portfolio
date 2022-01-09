import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import {
  AboutData,
  File,
  JobData,
  ProjectData,
  FrontMatterData,
} from '@/types/index'

const mkDir = (dir: string[]) => path.join(...dir)

const ABOUT_DIR = mkDir([process.cwd(), 'content', 'about'])
const JOBS_DIR = mkDir([process.cwd(), 'content', 'jobs'])
const PROJECTS_DIR = mkDir([process.cwd(), 'content', 'jobs'])

const readFile = (fileName: string, directory: string) => {
  const id = fileName.replace(/\.md$/, '')
  const fullPath = mkDir([directory, fileName])
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const markedContent = marked(content)
  return {
    id,
    data,
    content: markedContent,
  }
}

const getFilesContent = <T extends FrontMatterData>(
  directory: string
): File<T>[] => {
  const fileNames = fs.readdirSync(directory)
  return fileNames.map((filename) => {
    return readFile(filename, directory)
  }) as File<T>[]
}

const ascendingOrder = (a: string, b: string) => {
  return a < b ? 1 : a > b ? -1 : 0
}

export const jobsData = getFilesContent<JobData>(JOBS_DIR).sort(
  (fileA, fileB) => ascendingOrder(fileA.data.from, fileB.data.from)
)

export const projectsData = getFilesContent<ProjectData>(PROJECTS_DIR)

export const aboutData = readFile('summary.md', ABOUT_DIR) as File<AboutData>
