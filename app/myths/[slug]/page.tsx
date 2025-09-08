import { notFound } from 'next/navigation';
import { getMythBySlug, getAllMyths } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, Calendar, Tag } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { EvidenceRating } from '@/components/evidence-rating';
import MythSources from '@/components/myth-sources';

// Import the MDX content dynamically
async function getMDXContent(slug: string) {
  try {
    const Content = (await import(`@/content/myths/${slug}.mdx`)).default;
    return Content;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const myths = await getAllMyths();
  return myths.map((myth) => ({
    slug: myth.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const myth = await getMythBySlug(slug);
  
  if (!myth) {
    return {
      title: 'Myth Not Found - Myth Debunker',
    };
  }

  return {
    title: `${myth.title} - Myth Debunker`,
    description: myth.description,
    keywords: myth.tags.join(', '),
    openGraph: {
      title: myth.title,
      description: myth.description,
      type: 'article',
      publishedTime: myth.dateAdded,
      modifiedTime: myth.dateUpdated || myth.dateAdded,
      section: myth.category,
      tags: myth.tags,
    },
  };
}

export default async function MythPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const myth = await getMythBySlug(slug);
  const Content = await getMDXContent(slug);

  if (!myth || !Content) {
    notFound();
  }

  return (
    <div className="container py-8 max-w-4xl">
      <article className="space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-bold leading-tight">{myth.title}</h1>
              <p className="text-xl text-muted-foreground">{myth.description}</p>
            </div>
            <Badge 
              variant={myth.debunked ? 'destructive' : 'secondary'}
              className="shrink-0"
            >
              {myth.debunked ? 'Debunked' : 'Investigating'}
            </Badge>
          </div>
          
          {/* Metadata */}
          <Card>
            <CardContent className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Category:</span>
                  <Badge variant="outline">{myth.category}</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Reading time:</span>
                  <span>{myth.readingTime} min</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Published:</span>
                  <span>{formatDate(myth.dateAdded)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <EvidenceRating level={myth.evidenceLevel} />
                </div>
              </div>
              
              {myth.tags.length > 0 && (
                <>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Tags:</span>
                    <div className="flex flex-wrap gap-1">
                      {myth.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </header>

        {/* Content */}
        <div className="prose-custom">
          <Content />
        </div>

        {/* Sources */}
        <MythSources sources={myth.sources} />
      </article>
    </div>
  );
}
