import React from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Story {
  id: string
  title: string
  image: string
  slides: {
    id: string
    content: string
  }[]
}

interface SkillStoryModalProps {
  story: Story
  onClose: () => void
}

const SkillStoryModal: React.FC<SkillStoryModalProps> = ({ story, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close modal when clicking the backdrop
    >
      <motion.div
        className="bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src={story.image} 
              alt={story.title} 
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
            <h3 className="text-lg font-semibold text-gray-800">{story.title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content Slides */}
        <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
          {story.slides.map((slide) => (
            <div key={slide.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-700 text-sm">{slide.content}</p>
            </div>
          ))}
        </div>

        {/* Footer - Optional Close Button (can be removed if header X is enough) */}
        {/* <div className="p-4 border-t border-gray-200">
          <button 
            onClick={onClose}
            className="w-full bg-ig-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Close
          </button>
        </div> */}
      </motion.div>
    </motion.div>
  )
}

export default SkillStoryModal 