import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Target, Award } from 'lucide-react';

export const metadata = {
  title: 'About - Myth Debunker',
  description: 'Learn about our mission to separate fact from fiction through evidence-based research.',
};

export default function AboutPage() {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4">
          <Badge variant="outline" className="text-sm py-1">
            About Myth Debunker
          </Badge>
          <h1 className="text-4xl font-bold">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re dedicated to separating fact from fiction through rigorous research 
            and evidence-based analysis of myths and superstitions.
          </p>
        </section>

        {/* Mission Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Our Purpose</h3>
                <p className="text-muted-foreground">
                  To combat misinformation by providing scientifically accurate information 
                  about common myths and superstitions that persist in our society.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <Award className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Our Standards</h3>
                <p className="text-muted-foreground">
                  Every myth debunk is backed by peer-reviewed research, credible sources, 
                  and expert analysis to ensure accuracy and reliability.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <BookOpen className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Our Approach</h3>
                <p className="text-muted-foreground">
                  We present complex scientific information in accessible language, 
                  making evidence-based knowledge available to everyone.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">Our Community</h3>
                <p className="text-muted-foreground">
                  Building a community of critical thinkers who value evidence over 
                  speculation and scientific truth over popular belief.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Methodology */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Methodology</h2>
          <div className="prose-custom max-w-none">
            <h3>Research Process</h3>
            <p>
              Our myth-busting process follows a rigorous methodology to ensure accuracy:
            </p>
            <ol>
              <li><strong>Identification:</strong> We identify myths and superstitions that are widely believed or potentially harmful.</li>
              <li><strong>Research:</strong> We conduct thorough literature reviews using peer-reviewed scientific sources.</li>
              <li><strong>Analysis:</strong> We analyze the available evidence and consult with relevant experts.</li>
              <li><strong>Documentation:</strong> We document our findings with proper citations and sources.</li>
              <li><strong>Review:</strong> Our content is reviewed for accuracy and clarity before publication.</li>
            </ol>

            <h3>Evidence Levels</h3>
            <p>We categorize our debunks based on the strength of available evidence:</p>
            <ul>
              <li><strong>High Evidence:</strong> Comprehensive research with multiple peer-reviewed studies</li>
              <li><strong>Medium Evidence:</strong> Solid research with some peer-reviewed sources</li>
              <li><strong>Low Evidence:</strong> Limited but credible research available</li>
            </ul>

            <h3>Source Standards</h3>
            <p>
              We prioritize sources from reputable institutions, peer-reviewed journals, 
              and recognized experts in relevant fields. We avoid:
            </p>
            <ul>
              <li>Unsubstantiated claims from social media or blogs</li>
              <li>Sources with clear conflicts of interest</li>
              <li>Outdated information that has been superseded by newer research</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Get Involved</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a myth you&apos;d like us to investigate? Found an error in our research? 
            We welcome feedback and suggestions from our community.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline">contact@mythdebunker.com</Badge>
          </div>
        </section>
      </div>
    </div>
  );
}
