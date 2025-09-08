import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Myth, MythFrontmatter } from './types';

const mythsDirectory = path.join(process.cwd(), 'content/myths');

export async function getAllMyths(): Promise<Myth[]> {
  if (!fs.existsSync(mythsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(mythsDirectory);
  const allMyths = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(mythsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        ...data,
        content,
        readingTime: Math.ceil(stats.minutes),
      } as Myth;
    });

  return allMyths.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });
}

export async function getMythBySlug(slug: string): Promise<Myth | null> {
  try {
    const fullPath = path.join(mythsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      ...data,
      content,
      readingTime: Math.ceil(stats.minutes),
    } as Myth;
  } catch {
    return null;
  }
}

export async function getMythsByCategory(category: string): Promise<Myth[]> {
  const allMyths = await getAllMyths();
  return allMyths.filter(myth => 
    myth.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  );
}

export async function searchMyths(query: string): Promise<Myth[]> {
  const allMyths = await getAllMyths();
  const searchTerm = query.toLowerCase();
  
  return allMyths.filter(myth =>
    myth.title.toLowerCase().includes(searchTerm) ||
    myth.description.toLowerCase().includes(searchTerm) ||
    myth.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    myth.category.toLowerCase().includes(searchTerm)
  );
}

export async function getCategories() {
  const allMyths = await getAllMyths();
  const categoryMap = new Map<string, number>();
  
  allMyths.forEach(myth => {
    const count = categoryMap.get(myth.category) || 0;
    categoryMap.set(myth.category, count + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    description: `Myths and superstitions related to ${name.toLowerCase()}`,
    count,
  }));
}
