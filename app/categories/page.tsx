import Link from 'next/link';
import { getCategories } from '@/lib/mdx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Categories - Myth Debunker',
  description: 'Browse myths and superstitions by category.',
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Categories</h1>
        <p className="text-xl text-muted-foreground">
          Explore myths and superstitions organized by topic.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <Badge variant="secondary">{category.count}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <Link 
                href={`/categories/${category.slug}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View Myths
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
