'use client';

import { ResponsiveContainer } from '@/components/responsive-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Globe, Rocket, BookOpen } from 'lucide-react';
import { useState } from 'react';

const projects = {
  selected: [
    {
      id: 1,
      title: 'REST Countries API Web Application',
      description:
        'Built a React app displaying 250+ countries with search & filtering in <150ms. Features light/dark theme persistence and 90%+ Lighthouse scores.',
      image: '/projects/rest-countries.png',
      techStack: ['React.js', 'CSS', 'JavaScript', 'REST API'],
      github: 'https://github.com/RAJAN-115/rest-countries-api',
      demo: 'https://rest-countries-demo.netlify.app/',
    },
    {
      id: 2,
      title: 'Job Application Tracker',
      description:
        'MERN stack app managing 100+ job applications with real-time updates, search, and 99.9% data persistence via MongoDB Atlas.',
      image: '/projects/job-tracker.png',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/RAJAN-115/job-application-tracker',
      demo: 'https://job-tracker-demo.vercel.app/',
    },
    {
      id: 3,
      title: 'AI-Powered Personal Portfolio',
      description:
        'Next.js & TypeScript portfolio with AI voice navigation, image optimization (100 PageSpeed), responsive Tailwind CSS, and SEO enhancements.',
      image: '/projects/ai-portfolio.png',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI APIs'],
      github: 'https://github.com/RAJAN-115/ai-portfolio',
      demo: 'https://aidevportfolio.vercel.app/',
    },
  ],
  mini: [
    {
      id: 1,
      title: 'Color Picker Extension',
      description: 'Chrome extension for efficient color selection.',
      image: '/placeholder.svg',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: null,
    },
    {
      id: 2,
      title: 'To-Do List App',
      description: 'React task management with local storage.',
      image: '/placeholder.svg',
      techStack: ['React', 'Material UI'],
      github: '#',
      demo: null,
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather data using OpenWeather API.',
      image: '/placeholder.svg',
      techStack: ['JavaScript', 'API'],
      github: '#',
      demo: null,
    },
    {
      id: 4,
      title: 'Calculator App',
      description: 'Simple calculator with modern UI design.',
      image: '/placeholder.svg',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: null,
    },
  ],
  learning: [
    {
      id: 1,
      title: 'Data Structures Visualizer',
      description: 'Interactive C++ algorithm visualizations.',
      image: '/placeholder.svg',
      techStack: ['C++', 'Algorithm Design'],
      github: '#',
      demo: null,
    },
    {
      id: 2,
      title: 'Database Query Optimizer',
      description: 'MySQL performance analysis tool.',
      image: '/placeholder.svg',
      techStack: ['MySQL', 'Database Design'],
      github: '#',
      demo: null,
    },
    {
      id: 3,
      title: 'Socket Programming Chat',
      description: 'Real-time TCP/UDP chat system.',
      image: '/placeholder.svg',
      techStack: ['C++', 'Socket Programming'],
      github: '#',
      demo: null,
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      description: 'Python ML algorithms implementation.',
      image: '/placeholder.svg',
      techStack: ['Python', 'NumPy', 'Pandas'],
      github: '#',
      demo: null,
    },
  ],
};

export default function ProjectsPage() {
  const [insight, setInsight] = useState<string | null>(null);

  const insights = [
    'Consider adding GraphQL to the REST Countries app for flexible queries.',
    'Job Tracker could benefit from real-time notifications via WebSockets.',
    'Add voice commands to your portfolio for hands-free navigation.',
  ];

  const getInsight = () =>
    setInsight(insights[Math.floor(Math.random() * insights.length)]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  const icons = {
    selected: <Globe className="h-6 w-6 text-primary" />,
    mini: <Rocket className="h-6 w-6 text-primary" />,
    learning: <BookOpen className="h-6 w-6 text-primary" />,
  };

  return (
    <main className="py-12 pb-24 md:pb-12">
      <ResponsiveContainer>
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Projects</span>
        </Typography>

        {insight && (
          <Card className="mb-6 border-purple-600/50 bg-purple-50 dark:bg-purple-900">
            <CardContent className="flex items-center gap-2 p-4">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <Typography variant="p">{insight}</Typography>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="selected" className="w-full">
          {/* Desktop Tabs */}
          <TabsList className="mb-8 hidden grid-cols-3 gap-4 md:grid">
            <TabsTrigger value="selected" className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Selected Projects
            </TabsTrigger>
            <TabsTrigger value="mini" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" /> Mini Projects
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Learning Projects
            </TabsTrigger>
          </TabsList>

          {/* Mobile Tabs */}
          <TabsList className="fixed bottom-0 left-0 right-0 grid h-16 grid-cols-3 border-t bg-background md:hidden">
            <TabsTrigger
              value="selected"
              className="flex flex-col items-center justify-center"
            >
              <Globe className="h-5 w-5" />
              <span className="text-xs">Selected</span>
            </TabsTrigger>
            <TabsTrigger
              value="mini"
              className="flex flex-col items-center justify-center"
            >
              <Rocket className="h-5 w-5" />
              <span className="text-xs">Mini</span>
            </TabsTrigger>
            <TabsTrigger
              value="learning"
              className="flex flex-col items-center justify-center"
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">Learning</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="selected" className="space-y-6">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Card className="overflow-hidden border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center gap-3">
                      {icons.selected}
                      <Typography variant="h3" className="text-2xl font-bold">
                        Selected Projects
                      </Typography>
                      <div className="ml-auto">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Production Ready
                        </span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {projects.selected.map((proj, idx) => (
                        <motion.div
                          key={proj.id}
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="group overflow-hidden rounded-xl border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                          <div className="md:flex">
                            <div className="relative aspect-video overflow-hidden md:w-2/5">
                              <img
                                src={proj.image}
                                alt={proj.title}
                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="space-y-4 p-6 md:w-3/5">
                              <div className="flex items-start justify-between">
                                <Typography
                                  variant="h4"
                                  className="text-lg font-bold"
                                >
                                  {proj.title}
                                </Typography>
                                <div className="flex gap-2">
                                  {proj.demo && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      asChild
                                      className="transition-transform hover:scale-105"
                                    >
                                      <a
                                        href={proj.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="mr-1 h-4 w-4" />{' '}
                                        Live
                                      </a>
                                    </Button>
                                  )}
                                  {proj.github && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      asChild
                                      className="transition-transform hover:scale-105"
                                    >
                                      <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Code2 className="mr-1 h-4 w-4" /> Code
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <Typography
                                variant="p"
                                className="text-sm text-muted-foreground"
                              >
                                {proj.description}
                              </Typography>
                              <div className="flex flex-wrap gap-2">
                                {proj.techStack.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="mini" className="space-y-6">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Card className="overflow-hidden border-orange-200 dark:border-orange-800">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center gap-3">
                      {icons.mini}
                      <Typography variant="h3" className="text-2xl font-bold">
                        Mini Projects
                      </Typography>
                      <div className="ml-auto">
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                          Quick Builds
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {projects.mini.map((proj) => (
                        <motion.div
                          key={proj.id}
                          whileHover={{ scale: 1.02 }}
                          className="group overflow-hidden rounded-lg border bg-card shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                            <Rocket className="h-12 w-12 text-orange-600 opacity-60" />
                          </div>
                          <div className="space-y-3 p-4">
                            <div className="flex items-center justify-between">
                              <Typography
                                variant="h4"
                                className="text-base font-semibold"
                              >
                                {proj.title}
                              </Typography>
                              <div className="flex gap-2">
                                {proj.github && (
                                  <Button variant="ghost" size="sm">
                                    <Code2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                            <Typography
                              variant="p"
                              className="line-clamp-2 text-sm text-muted-foreground"
                            >
                              {proj.description}
                            </Typography>
                            <div className="flex flex-wrap gap-1">
                              {proj.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Card className="overflow-hidden border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center gap-3">
                      {icons.learning}
                      <Typography variant="h3" className="text-2xl font-bold">
                        Learning Projects
                      </Typography>
                      <div className="ml-auto">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          Skill Building
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {projects.learning.map((proj) => (
                        <motion.div
                          key={proj.id}
                          whileHover={{ scale: 1.02 }}
                          className="group overflow-hidden rounded-lg border bg-card shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                            <BookOpen className="h-12 w-12 text-blue-600 opacity-60" />
                          </div>
                          <div className="space-y-3 p-4">
                            <div className="flex items-center justify-between">
                              <Typography
                                variant="h4"
                                className="text-base font-semibold"
                              >
                                {proj.title}
                              </Typography>
                              <div className="flex gap-2">
                                {proj.github && (
                                  <Button variant="ghost" size="sm">
                                    <Code2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                            <Typography
                              variant="p"
                              className="line-clamp-2 text-sm text-muted-foreground"
                            >
                              {proj.description}
                            </Typography>
                            <div className="flex flex-wrap gap-1">
                              {proj.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={getInsight}
            className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            <BookOpen className="h-4 w-4" /> Get AI Insight
          </Button>
          <Button
            variant="outline"
            asChild
            className="gap-2 transition-transform hover:scale-105"
          >
            <a
              href="https://github.com/RAJAN-115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" /> View All on GitHub
            </a>
          </Button>
        </div>
      </ResponsiveContainer>
    </main>
  );
}
