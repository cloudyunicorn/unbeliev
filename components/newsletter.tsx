'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup here
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
              Thank you for subscribing!
            </h3>
            <p className="text-green-600 dark:text-green-300">
              You&apos;ll receive our latest myth-busting content in your inbox.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Stay Informed
        </CardTitle>
        <CardDescription>
          Get weekly myth-busting content and scientific insights delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1"
          />
          <Button type="submit">
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
