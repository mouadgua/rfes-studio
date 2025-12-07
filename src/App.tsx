import React from 'react';
import logo from './assets/maam.svg';
import  CardNav, { type CardNavItem }  from './components/CardNav.tsx';
import  Footer  from './components/Footer';
import  Card  from './components/Card';
import './App.css' ;
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful and responsive user interfaces with React and TypeScript.",
    image: "/api/placeholder/300/300",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    social: {
      github: "https://github.com/sarah",
      linkedin: "https://linkedin.com/in/sarah",
    }
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Backend Developer",
    bio: "Expert in building scalable server-side applications and RESTful APIs.",
    image: "/api/placeholder/300/300",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    social: {
      github: "https://github.com/mike",
      linkedin: "https://linkedin.com/in/mike",
    }
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UI/UX Designer",
    bio: "Creating intuitive and engaging user experiences with a focus on accessibility.",
    image: "/api/placeholder/300/300",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/emily",
      twitter: "https://twitter.com/emily",
    }
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Full Stack Developer",
    bio: "Versatile developer with expertise across the entire stack and DevOps practices.",
    image: "/api/placeholder/300/300",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
    social: {
      github: "https://github.com/alex",
      linkedin: "https://linkedin.com/in/alex",
    }
  }
];

function App() {
  
  const items: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/about/company", ariaLabel: "About Company" },
        { label: "Careers", href: "/about/careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#280f51ff",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/projects/featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:contact@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com/example", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com/company/example", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      <main className="container mx-auto px-4 py-12 pt-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Meet Our Amazing Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a passionate group of developers and designers dedicated to creating 
            exceptional digital experiences that make a difference.
          </p>
        </section>

        {/* Team Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About Our Team
          </h2>
          <div className="text-gray-600 space-y-4">
            <p>
              We are a dynamic team of professionals who believe in the power of collaboration 
              and innovation. Our diverse skill sets and shared passion for technology allow us 
              to tackle complex challenges and deliver outstanding results.
            </p>
            <p>
              With years of experience in various domains, we bring fresh perspectives and 
              cutting-edge solutions to every project we undertake.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;