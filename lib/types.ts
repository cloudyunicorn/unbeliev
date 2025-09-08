export interface Myth {
  slug: string;
  title: string;
  description: string;
  category: string;
  debunked: boolean;
  evidenceLevel: 'high' | 'medium' | 'low';
  sources: string[];
  dateAdded: string;
  dateUpdated?: string;
  tags: string[];
  content: string;
  readingTime: number;
  featured?: boolean;
}

export interface MythFrontmatter {
  title: string;
  description: string;
  category: string;
  debunked: boolean;
  evidenceLevel: 'high' | 'medium' | 'low';
  sources: string[];
  dateAdded: string;
  dateUpdated?: string;
  tags: string[];
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}
