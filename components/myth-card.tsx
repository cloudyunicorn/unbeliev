import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { Myth } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { EvidenceRating } from '@/components/evidence-rating';

interface MythCardProps {
  myth: Myth;
}

export default function MythCard({ myth }: MythCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl leading-tight line-clamp-2">
            {myth.title}
          </CardTitle>
          <Badge 
            variant={myth.debunked ? 'destructive' : 'secondary'}
            className="shrink-0"
          >
            {myth.debunked ? 'Debunked' : 'Investigating'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {myth.description}
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {myth.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {myth.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{myth.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <EvidenceRating level={myth.evidenceLevel} />
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{myth.category}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {myth.readingTime} min read
            </span>
          </div>
          
          <Link 
            href={`/myths/${myth.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read More
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
