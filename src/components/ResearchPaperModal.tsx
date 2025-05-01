import React from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

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

interface ResearchPaperModalProps {
  paper: ResearchPaper
  onClose: () => void
}

const ResearchPaperModal: React.FC<ResearchPaperModalProps> = ({ paper, onClose }) => {
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
        className="bg-[#262626] rounded-xl max-w-4xl w-full mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-semibold text-white">{paper.title}</h2>
            </div>
            <button onClick={onClose}>
              <XMarkIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row">
            {/* Paper Preview */}
            <div className="w-full md:w-2/3 bg-black">
              <img
                src={paper.image}
                alt={paper.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Paper Details */}
            <div className="w-full md:w-1/3 p-4 space-y-4">
              <div>
                <h3 className="text-white font-semibold">Authors</h3>
                <p className="text-gray-400">{paper.authors.join(', ')}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold">Journal</h3>
                <p className="text-gray-400">{paper.journal}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold">Publication Date</h3>
                <p className="text-gray-400">{paper.date}</p>
              </div>

              {paper.doi && (
                <div>
                  <h3 className="text-white font-semibold">DOI</h3>
                  <p className="text-gray-400">{paper.doi}</p>
                </div>
              )}

              <div>
                <h3 className="text-white font-semibold">Abstract</h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-4">{paper.abstract}</p>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#0095F6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1aa1f7] transition-colors mt-6"
              >
                <span>Read Full Paper</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ResearchPaperModal 