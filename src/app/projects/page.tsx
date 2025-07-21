import ProjectCard from '../../components/ProjectCard';

const projects = [
{
    title: 'IEDC Sahrdaya Website',
    description: "The official web portal for the Innovation and Entrepreneurship Development Cell (IEDC) at Sahrdaya College. It serves as a hub for activities, events, and resources related to innovation and entrepreneurship, providing easy access to information about IEDC &apos initiatives and programs.",
    image: '/iedc_website.png', // You might want to use a specific image from your project
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://www.iedcsahrdaya.co.in/', // Replace with the actual live URL
    githubUrl: 'https://github.com/shayen71421/website_iedc_sahrdaya', // Replace with the actual GitHub URL
  },
  {
    title: 'AI Krishna',
    description: 'AI Krishna is an interactive AI-powered robotic student designed to enhance learning through real-time academic support. Built on Raspberry Pi with a fine-tuned Gemini 2.0 Flash model, it combines hardware and custom Python software to deliver smart, engaging educational experiences.',
    image: '/ai_krishna.png', // Replace with the actual image path
    tags: ['AI', 'Raspberry Pi', 'EdTech'],
    linkedinUrl: 'https://www.linkedin.com/posts/sahrdaya-college-of-engineering-technology_tech-aikrishna-artificialintelligence-ugcPost-7300352563923558402-CeJG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1n-AwBNoFAOtHZgvoDgIAbrsBwV1VSBWQ',
  },
 // {
  //  title: 'Demo Portfolio Project',
  //  description: 'A showcase project with all three links: Live Demo, GitHub, and LinkedIn.',
  //  image: '/project1-placeholder.svg',
  //  tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //  liveUrl: 'https://demo-project.example.com',
  //  githubUrl: 'https://github.com/yourusername/demo-project',
  //  linkedinUrl: 'https://linkedin.com/in/yourusername',
 // },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
