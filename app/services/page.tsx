import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Comprehensive interior design solutions for every space
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-gray-900">
                      {index + 1}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-gray-300" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618219740975-d89343be0bcd?q=80&w=2000&auto=format&fit=crop"
            alt="Call to action"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create the perfect interior that reflects your
            style and meets your needs.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: 'Residential Design',
    description:
      'Transform your home into a stunning, functional space that reflects your personality and lifestyle.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Space Planning',
      'Color Consultation',
      'Furniture Selection',
      'Custom Solutions',
    ],
  },
  {
    title: 'Commercial Design',
    description:
      'Create inspiring workspaces that boost productivity and impress clients.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Office Layout',
      'Brand Integration',
      'Ergonomic Solutions',
      'Project Management',
    ],
  },
  {
    title: 'Hospitality Design',
    description:
      'Design memorable experiences for hotels, restaurants, and leisure spaces.',
    image:
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Concept Development',
      'Space Optimization',
      'Custom Furniture',
      'Lighting Design',
    ],
  },
  {
    title: 'Renovation Services',
    description:
      'Breathe new life into existing spaces with our comprehensive renovation solutions.',
    image:
      'https://images.unsplash.com/photo-1574359411659-15573a27d625?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Space Planning',
      'Material Selection',
      'Project Coordination',
      'Quality Control',
    ],
  },
  {
    title: 'Sustainable Design',
    description:
      'Create eco-friendly spaces that minimize environmental impact without compromising style.',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Eco-friendly Materials',
      'Energy Efficiency',
      'Waste Reduction',
      'Green Certification',
    ],
  },
  {
    title: 'Custom Furniture',
    description:
      'Design and create unique furniture pieces that perfectly match your space and style.',
    image:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Custom Design',
      'Material Selection',
      'Quality Craftsmanship',
      'Installation',
    ],
  },
];

const process = [
  {
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and budget to understand your needs.',
  },
  {
    title: 'Design Concept',
    description: 'Our team creates detailed design concepts based on your preferences.',
  },
  {
    title: 'Implementation',
    description: 'We execute the approved design with attention to every detail.',
  },
  {
    title: 'Final Delivery',
    description: 'Your transformed space is ready for you to enjoy.',
  },
];