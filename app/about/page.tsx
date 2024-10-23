import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Creating beautiful spaces since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Interioz has been at the forefront of innovative
                interior design. Our journey began with a simple vision: to create
                spaces that inspire and transform lives.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into a full-service interior design
                studio, working with clients across residential and commercial
                projects. Our team of experienced designers brings creativity,
                expertise, and attention to detail to every project.
              </p>
              <Button asChild>
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                alt="Our story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    title: 'Innovation',
    description:
      'We constantly push boundaries to create unique and inspiring designs.',
    icon: '🎨',
  },
  {
    title: 'Quality',
    description:
      'We maintain the highest standards in every aspect of our work.',
    icon: '⭐',
  },
  {
    title: 'Sustainability',
    description:
      'We prioritize eco-friendly materials and sustainable design practices.',
    icon: '🌱',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'Principal Designer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Interior Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Emma Thompson',
    role: 'Design Consultant',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
];