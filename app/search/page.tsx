import { searchMyths } from '@/lib/mdx';
import MythCard from '@/components/myth-card';
import SearchBar from '@/components/search-bar';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Search Myths - Myth Debunker',
  description: 'Search our database of debunked myths and superstitions.',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query = '' } = await searchParams;
  const results = query ? await searchMyths(query) : [];

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Search Myths</h1>
        <p className="text-xl text-muted-foreground">
          Find specific myths and superstitions in our database.
        </p>
      </div>
      
      <div className="max-w-2xl">
        <SearchBar placeholder="Search myths, categories, or tags..." />
      </div>
      
      {query && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">
              Search Results for &quot;{query}&quot;
            </h2>
            <Badge variant="secondary">{results.length} results</Badge>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((myth) => (
              <MythCard key={myth.slug} myth={myth} />
            ))}
          </div>
          
          {results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-2">
                No results found for &quot;{query}&quot;.
              </p>
              <p className="text-muted-foreground">
                Try different keywords or browse all myths.
              </p>
            </div>
          )}
        </div>
      )}
      
      {!query && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            Enter a search term to find relevant myths and superstitions.
          </p>
        </div>
      )}
    </div>
  );
}
