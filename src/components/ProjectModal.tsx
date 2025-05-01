import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, ChatBubbleLeftIcon, BookmarkIcon, EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Project {
  id: number
  title: string
  image: string
  description: string
  likes: number
  comments: number
  date: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex">
          {/* Left side - Image */}
          <div className="w-2/3 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-1/3 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold">yashjoshi</span>
              </div>
              <button onClick={onClose}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p>
                    <span className="font-semibold mr-2">yashjoshi</span>
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{project.date}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <HeartIcon className="w-7 h-7 cursor-pointer hover:text-red-500" />
                  <ChatBubbleLeftIcon className="w-7 h-7 cursor-pointer" />
                </div>
                <BookmarkIcon className="w-7 h-7 cursor-pointer" />
              </div>
              <div className="mb-2">
                <p className="font-semibold">{project.likes.toLocaleString()} likes</p>
              </div>
              <p className="text-gray-500 text-xs uppercase">{project.date}</p>
            </div>

            {/* Comment Input */}
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal 