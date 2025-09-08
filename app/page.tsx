import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Search, Shield, Zap } from 'lucide-react';
import { getAllMyths } from '@/lib/mdx';
import MythCard from '@/components/myth-card';
import Newsletter from '@/components/newsletter';

export default async function HomePage() {
  const allMyths = await getAllMyths();
  const featuredMyths = allMyths.filter(myth => myth.featured).slice(0, 3);
  const recentMyths = allMyths.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-sm py-1">
            Evidence-Based Myth Busting
          </Badge>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Separating Fact from{" "}
            <span className="text-primary">Fiction</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Explore our comprehensive database of debunked myths and superstitions, 
            backed by scientific evidence and expert research.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/myths">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Myths
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/search">
                <Search className="mr-2 h-4 w-4" />
                Search Database
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why Trust Our Research?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our myth-busting approach is grounded in scientific methodology and peer-reviewed sources.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary" />
              <CardTitle>Evidence-Based</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every claim is backed by peer-reviewed research and credible scientific sources.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary" />
              <CardTitle>Regularly Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our database is continuously updated with the latest research and findings.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary" />
              <CardTitle>Easy to Understand</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complex scientific concepts explained in clear, accessible language.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Myths */}
      {featuredMyths.length > 0 && (
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Debunks
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Some of our most thoroughly researched myth debunks.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMyths.map((myth) => (
              <MythCard key={myth.slug} myth={myth} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/myths">
                View All Myths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Recent Myths */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Latest Research
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our most recently added myth debunks and investigations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentMyths.map((myth) => (
            <MythCard key={myth.slug} myth={myth} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-[58rem]">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
