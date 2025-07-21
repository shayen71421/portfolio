import ProjectCard from '../../components/ProjectCard';

const projects = [
{
    title: 'IEDC Sahrdaya Website',
    description: 'The official web portal for the Innovation and Entrepreneurship Development Cell (IEDC) at Sahrdaya College. It serves as a hub for activities, events, and resources related to innovation and entrepreneurship, providing easy access to information about IEDC &s initiatives and programs.',
    image: '/iedc_website.png', // You might want to use a specific image from your project
    tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'ImgBB'],
    liveUrl: 'https://www.iedcsahrdaya.co.in/', // Replace with the actual live URL
    githubUrl: 'YOUR_GITHUB_URL', // Replace with the actual GitHub URL
  },
  {
    title: 'Project Two',
    description: 'A mobile-responsive dashboard with real-time data visualization.',
    image: '/project2-placeholder.svg',
    tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project2',
  },
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
