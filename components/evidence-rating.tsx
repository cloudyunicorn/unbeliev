import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface EvidenceRatingProps {
  level: 'high' | 'medium' | 'low';
}

export function EvidenceRating({ level }: EvidenceRatingProps) {
  const configs = {
    high: { 
      variant: 'default' as const, 
      text: 'Strong Evidence', 
      stars: 3,
      color: 'text-green-500'
    },
    medium: { 
      variant: 'secondary' as const, 
      text: 'Moderate Evidence', 
      stars: 2,
      color: 'text-yellow-500'
    },
    low: { 
      variant: 'outline' as const, 
      text: 'Limited Evidence', 
      stars: 1,
      color: 'text-red-500'
    }
  };
  
  const config = configs[level];
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: 3 }, (_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < config.stars 
                ? `${config.color} fill-current` 
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <Badge variant={config.variant} className="text-xs">
        {config.text}
      </Badge>
    </div>
  );
}
