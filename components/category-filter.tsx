'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  currentCategory?: string;
}

export default function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/myths">
            <Badge 
              variant={!currentCategory ? "default" : "outline"}
              className="hover:bg-primary/10 transition-colors cursor-pointer"
            >
              All Myths
            </Badge>
          </Link>
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Badge 
                variant={currentCategory === category.slug ? "default" : "outline"}
                className="hover:bg-primary/10 transition-colors cursor-pointer"
              >
                {category.name} ({category.count})
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
