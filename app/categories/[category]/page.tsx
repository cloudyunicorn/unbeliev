import { notFound } from 'next/navigation';
import { getMythsByCategory, getCategories } from '@/lib/mdx';
import MythCard from '@/components/myth-card';
import CategoryFilter from '@/components/category-filter';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categories = await getCategories();
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found - Myth Debunker',
    };
  }

  return {
    title: `${category.name} Myths - Myth Debunker`,
    description: `Explore myths and superstitions related to ${category.name.toLowerCase()}.`,
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const myths = await getMythsByCategory(params.category);
  const categories = await getCategories();
  const currentCategory = categories.find(c => c.slug === params.category);

  if (!currentCategory) {
    notFound();
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">{currentCategory.name}</h1>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {myths.length}
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          {currentCategory.description}
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-80">
          <CategoryFilter 
            categories={categories} 
            currentCategory={params.category} 
          />
        </aside>
        
        <main className="flex-1">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {myths.map((myth) => (
              <MythCard key={myth.slug} myth={myth} />
            ))}
          </div>
          
          {myths.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No myths found in this category.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
