import React, { useState } from 'react'
import { HeartIcon, ChatBubbleLeftIcon, BookmarkIcon, UserIcon } from '@heroicons/react/24/outline'
import ProjectModal from './ProjectModal'
import CertificationModal from './CertificationModal'
import ResearchPaperModal from './ResearchPaperModal'
import { AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  image: string
  description: string
  likes: number
  comments: number
  date: string
  technologies?: string[]
  link?: string
}

interface Certification {
  id: number
  title: string
  image: string
  issuer: string
  date: string
  credentialId: string
  link: string
  skills: string[]
}

interface ResearchPaper {
  id: number
  title: string
  image: string
  authors: string[]
  journal: string
  date: string
  abstract: string
  link: string
  doi?: string
}

type ContentType = 'projects' | 'certifications' | 'papers';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Portfolio Website', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop', 
    description: 'Modern portfolio website built with React, TypeScript, and Tailwind CSS', 
    likes: 156,
    comments: 23,
    date: '1 WEEK AGO',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/portfolio'
  },
  // Add more of your projects here
];

const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    image: 'https://via.placeholder.com/300x300.png?text=AWS+Cert',
    issuer: 'Amazon Web Services',
    date: 'JAN 2024',
    credentialId: 'AWS-123456',
    link: 'https://www.credly.com/badges/your-badge',
    skills: ['AWS', 'Cloud Architecture', 'DevOps']
  },
  // Add more of your certifications here
  {
    id: 2,
    title: 'Google Cloud Certified - Professional Data Engineer',
    image: 'https://via.placeholder.com/300x300.png?text=GCP+Cert',
    issuer: 'Google Cloud',
    date: 'DEC 2023',
    credentialId: 'GCP-789012',
    link: '#',
    skills: ['GCP', 'BigQuery', 'Dataflow', 'Data Engineering']
  },
  {
    id: 3,
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    image: 'https://via.placeholder.com/300x300.png?text=Azure+Cert',
    issuer: 'Microsoft',
    date: 'NOV 2023',
    credentialId: 'AZ-345678',
    link: '#',
    skills: ['Azure', 'Machine Learning', 'Python', 'Data Science']
  }
];

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: 'Advanced Machine Learning Techniques',
    image: '/papers/ml-paper.png',
    authors: ['Your Name', 'Co-author Name'],
    journal: 'International Journal of Computer Science',
    date: 'MAR 2024',
    abstract: 'This research explores novel approaches in machine learning...',
    link: 'https://doi.org/your-paper',
    doi: '10.1234/paper-id'
  },
  // Add more of your research papers here
];

const ProjectGrid = () => {
  const [selectedContent, setSelectedContent] = useState<ContentType>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  const renderContent = () => {
    switch (selectedContent) {
      case 'projects':
        return (
          <div className="grid grid-cols-3 gap-1">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="relative aspect-square group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="w-6 h-6" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ChatBubbleLeftIcon className="w-6 h-6" />
                      <span>{project.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="grid grid-cols-3 gap-1">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="relative aspect-square group cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-sm">{cert.issuer}</p>
                    <p className="text-xs mt-2">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'papers':
        return (
          <div className="grid grid-cols-3 gap-1">
            {researchPapers.map((paper) => (
              <div 
                key={paper.id} 
                className="relative aspect-square group cursor-pointer"
                onClick={() => setSelectedPaper(paper)}
              >
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h3 className="font-semibold">{paper.title}</h3>
                    <p className="text-sm">{paper.journal}</p>
                    <p className="text-xs mt-2">{paper.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex border-t border-gray-200">
        <button 
          className={`flex-1 py-4 text-center ${selectedContent === 'projects' ? 'border-t border-black' : 'text-gray-400'}`}
          onClick={() => setSelectedContent('projects')}
        >
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span className="text-xs font-semibold">POSTS</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-4 text-center ${selectedContent === 'certifications' ? 'border-t border-black' : 'text-gray-400'}`}
          onClick={() => setSelectedContent('certifications')}
        >
          <div className="flex items-center justify-center space-x-2">
            <BookmarkIcon className="w-4 h-4" />
            <span className="text-xs font-semibold">SAVED</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-4 text-center ${selectedContent === 'papers' ? 'border-t border-black' : 'text-gray-400'}`}
          onClick={() => setSelectedContent('papers')}
        >
          <div className="flex items-center justify-center space-x-2">
            <UserIcon className="w-4 h-4" />
            <span className="text-xs font-semibold">TAGGED</span>
          </div>
        </button>
      </div>

      {/* Content Grid */}
      {renderContent()}

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {selectedCertification && (
          <CertificationModal
            certification={selectedCertification}
            onClose={() => setSelectedCertification(null)}
          />
        )}
        {selectedPaper && (
          <ResearchPaperModal
            paper={selectedPaper}
            onClose={() => setSelectedPaper(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectGrid 