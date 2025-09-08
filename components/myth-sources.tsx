import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface MythSourcesProps {
  sources: string[];
}

export default function MythSources({ sources }: MythSourcesProps) {
  if (!sources.length) return null;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">Sources & References</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {sources.map((source, index) => (
            <li key={index} className="flex items-start gap-2">
              <ExternalLink className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
              <a 
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline break-all"
              >
                {source}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
