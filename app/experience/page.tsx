import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import {
  Lightbulb,
  ExternalLink,
  Github,
  Zap,
  Users,
  TrendingUp,
  Code,
  Smartphone,
} from 'lucide-react';
import { Timeline, TimelineItem } from '@/components/timeline';

export default function ExperiencePage() {
  return (
    // Flex container to center the content vertically and horizontally on the page
    <main className="flex min-h-screen items-center justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <Typography variant="h1" className="mb-4">
              Project Experience
            </Typography>
            <Typography
              variant="p"
              className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300"
            >
              My flagship AI-powered portfolio project showcasing modern web
              development expertise and innovative AI integration.
            </Typography>
          </div>

          <Timeline>
            <TimelineItem
              title="AI-Powered Personal Portfolio Developer"
              period="March 2024 - Present"
              organization="Independent Project | Next.js & TypeScript"
            >
              <div className="space-y-6">
                {/* Main Achievement Highlights - Now a 2x2 grid on mobile */}
                <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
                    <Zap className="mx-auto mb-2 h-6 w-6 text-green-600" />
                    <div className="text-xl font-bold text-green-600">100</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Google PageSpeed
                    </div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
                    <Users className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                    <div className="text-xl font-bold text-blue-600">65%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Engagement Up
                    </div>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4 text-center dark:bg-purple-900/20">
                    <TrendingUp className="mx-auto mb-2 h-6 w-6 text-purple-600" />
                    <div className="text-xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Accessibility
                    </div>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4 text-center dark:bg-orange-900/20">
                    <Code className="mx-auto mb-2 h-6 w-6 text-orange-600" />
                    <div className="text-xl font-bold text-orange-600">40%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      SEO Improvement
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <Typography variant="p" className="text-lg">
                    <span className="font-semibold text-blue-600">
                      Engineered a modern AI-powered portfolio
                    </span>{' '}
                    with Next.js and TypeScript, boosting performance with
                    server components and image optimization to achieve a{' '}
                    <span className="font-bold text-green-600">
                      100 Google PageSpeed score
                    </span>
                    .
                  </Typography>
                  <Typography variant="p">
                    <span className="font-semibold text-purple-600">
                      Built voice navigation and an AI chatbot
                    </span>{' '}
                    using Web Speech API and OpenAI, increasing engagement by{' '}
                    <span className="font-bold text-blue-600">65%</span> and
                    session time from 2 to 5 minutes.
                  </Typography>
                  <Typography variant="p">
                    <span className="font-semibold text-green-600">
                      Designed responsive layouts
                    </span>{' '}
                    with Tailwind CSS, following WCAG standards for a{' '}
                    <span className="font-bold text-purple-600">
                      95% accessibility score
                    </span>{' '}
                    and full cross-device compatibility.
                  </Typography>
                  <Typography variant="p">
                    <span className="font-semibold text-orange-600">
                      Optimized SEO
                    </span>{' '}
                    using Next.js metadata and structured data, improving{' '}
                    <span className="font-bold text-orange-600">
                      organic search visibility by 40%
                    </span>
                    .
                  </Typography>
                </div>

                {/* Technical Stack */}
                <div>
                  <Typography
                    variant="h4"
                    className="mb-3 flex items-center gap-2"
                  >
                    <Code className="h-5 w-5" />
                    Technical Stack & Skills:
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    <Chip>Next.js 14</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Tailwind CSS</Chip>
                    <Chip>React Server Components</Chip>
                    <Chip>Web Speech API</Chip>
                    <Chip>OpenAI</Chip>
                    <Chip>Vercel</Chip>
                    <Chip>SEO</Chip>
                    <Chip>WCAG</Chip>
                    <Chip>Performance</Chip>
                    <Chip>Responsive Design</Chip>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <Typography
                    variant="h4"
                    className="mb-3 flex items-center gap-2"
                  >
                    <Smartphone className="h-5 w-5" />
                    Key Responsibilities:
                  </Typography>
                  <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span className="text-sm">
                        Architected full-stack portfolio with modern React
                        patterns
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span className="text-sm">
                        Implemented AI-powered voice navigation system
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span className="text-sm">
                        Achieved perfect Google PageSpeed scores
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span className="text-sm">
                        Ensured WCAG accessibility compliance
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span className="text-sm">
                        Integrated intelligent chatbot with OpenAI
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span className="text-sm">
                        Managed CI/CD pipeline with Vercel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/RAJAN-115/ai-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a
                      href="https://aidevportfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Portfolio
                    </a>
                  </Button>
                </div>
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </main>
  );
}
