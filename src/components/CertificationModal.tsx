import React from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

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

interface CertificationModalProps {
  certification: Certification
  onClose: () => void
}

const CertificationModal: React.FC<CertificationModalProps> = ({ certification, onClose }) => {
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
        className="bg-[#262626] rounded-xl max-w-2xl w-full mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-semibold text-white">{certification.title}</h2>
            </div>
            <button onClick={onClose}>
              <XMarkIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row">
            {/* Certificate Image */}
            <div className="w-full md:w-2/3 bg-black">
              <img
                src={certification.image}
                alt={certification.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certificate Details */}
            <div className="w-full md:w-1/3 p-4 space-y-4">
              <div>
                <h3 className="text-white font-semibold">Issuer</h3>
                <p className="text-gray-400">{certification.issuer}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold">Issue Date</h3>
                <p className="text-gray-400">{certification.date}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold">Credential ID</h3>
                <p className="text-gray-400">{certification.credentialId}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {certification.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#363636] text-white px-2 py-1 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0095F6] text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-[#1aa1f7] transition-colors mt-6"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CertificationModal 