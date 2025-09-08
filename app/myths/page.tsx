import { getAllMyths, getCategories } from '@/lib/mdx';
import MythCard from '@/components/myth-card';
import SearchBar from '@/components/search-bar';
import CategoryFilter from '@/components/category-filter';

export const metadata = {
  title: 'All Myths - Myth Debunker',
  description: 'Browse our complete database of debunked myths and superstitions.',
};

export default async function MythsPage() {
  const myths = await getAllMyths();
  const categories = await getCategories();

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Myth Database</h1>
        <p className="text-xl text-muted-foreground">
          Explore {myths.length} thoroughly researched myths and superstitions.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-80 space-y-6">
          <SearchBar className="w-full" />
          <CategoryFilter categories={categories} />
        </aside>
        
        <main className="flex-1">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {myths.map((myth) => (
              <MythCard key={myth.slug} myth={myth} />
            ))}
          </div>
          
          {myths.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No myths found.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
