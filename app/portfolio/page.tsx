'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618219740975-d89343be0bcd?q=80&w=2000&auto=format&fit=crop"
            alt="Our Portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Showcasing our finest interior design projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? 'default' : 'outline'}
                onClick={() => setFilter(category.value)}
                className="min-w-[120px]"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="mb-4">{project.category}</p>
                        <Button variant="outline" className="text-white border-white">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-[400px] mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">{selectedProject.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Project Details:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  details: string[];
}

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Hospitality', value: 'hospitality' },
];

const projects: Project[] = [
  {
    title: 'Modern Minimalist Home',
    category: 'residential',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    description:
      'A contemporary home design focusing on clean lines and minimalist aesthetics.',
    details: [
      'Area: 2,500 sq ft',
      'Duration: 4 months',
      'Style: Modern Minimalist',
      'Services: Full Interior Design',
    ],
  },
  {
    title: 'Luxury Office Space',
    category: 'commercial',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    description:
      'High-end office design combining functionality with sophisticated aesthetics.',
    details: [
      'Area: 5,000 sq ft',
      'Duration: 6 months',
      'Style: Contemporary Corporate',
      'Services: Space Planning & Interior Design',
    ],
  },
  {
    title: 'Boutique Hotel Lobby',
    category: 'hospitality',
    image:
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=1000&auto=format&fit=crop',
    description:
      'A welcoming hotel lobby design that creates a memorable first impression.',
    details: [
      'Area: 3,000 sq ft',
      'Duration: 5 months',
      'Style: Luxury Contemporary',
      'Services: Complete Interior Design',
    ],
  },
  {
    title: 'Urban Apartment',
    category: 'residential',
    image:
      'https://images.unsplash.com/photo-1574359411659-15573a27d625?q=80&w=1000&auto=format&fit=crop',
    description:
      'Smart space utilization in a modern urban apartment setting.',
    details: [
      'Area: 1,200 sq ft',
      'Duration: 3 months',
      'Style: Urban Contemporary',
      'Services: Interior Design & Furniture Selection',
    ],
  },
  {
    title: 'Restaurant Design',
    category: 'hospitality',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000&auto=format&fit=crop',
    description:
      'An atmospheric restaurant design focusing on customer experience.',
    details: [
      'Area: 2,800 sq ft',
      'Duration: 4 months',
      'Style: Industrial Chic',
      'Services: Complete Interior Design',
    ],
  },
  {
    title: 'Corporate Headquarters',
    category: 'commercial',
    image:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop',
    description:
      'A modern corporate office design promoting collaboration and productivity.',
    details: [
      'Area: 10,000 sq ft',
      'Duration: 8 months',
      'Style: Modern Professional',
      'Services: Full Service Design',
    ],
  },
];