import React, { useState } from 'react'
import { UserPlusIcon, EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { socialLinks } from '../config/social'
import { motion, AnimatePresence } from 'framer-motion'

interface ProfileSectionProps {
  onContactClick: () => void;
  onMessageClick: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onContactClick, onMessageClick }) => {
  const [showFollowModal, setShowFollowModal] = useState(false);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <div className="flex items-start space-x-16">
          {/* Profile Image with Gradient Border */}
          <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
              <img 
                src="https://i.pravatar.cc/300"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 pt-4">
            {/* Username and Actions */}
            <div className="flex items-center space-x-4 mb-6">
              <h2 className="text-xl font-normal">thisis_sample</h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setShowFollowModal(true)}
                  className="bg-[#0095F6] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#1aa1f7] transition-colors"
                >
                  Follow
                </button>
                <button 
                  onClick={onMessageClick}
                  className="bg-[#363636] text-white px-4 py-1.5 rounded-lg text-sm font-semibold"
                >
                  Message
                </button>
                <button 
                  onClick={onContactClick}
                  className="bg-[#363636] p-1.5 rounded-lg"
                >
                  <UserPlusIcon className="w-5 h-5 text-white" />
                </button>
                <button className="p-1">
                  <EllipsisHorizontalIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-10 mb-6">
              <div>
                <span className="font-semibold">457</span>{" "}
                <span className="text-[#A8A8A8]">posts</span>
              </div>
              <div>
                <span className="font-semibold">6,898</span>{" "}
                <span className="text-[#A8A8A8]">followers</span>
              </div>
              <div>
                <span className="font-semibold">53</span>{" "}
                <span className="text-[#A8A8A8]">following</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <h3 className="font-semibold">Yash Joshi</h3>
              <p className="text-[#A8A8A8]">Data Scientist</p>
              <p className="font-medium">Python & R Language Expert</p>
              <p className="text-sm">Passionate Data Scientist specializing in transforming complex datasets into actionable insights</p>
              <p className="text-[#0095F6] hover:underline italic">"Transforming data into insights, one analysis at a time."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Modal */}
      <AnimatePresence>
        {showFollowModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#262626] rounded-xl max-w-sm w-full mx-4"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Follow on Social Media</h2>
                <button
                  onClick={() => setShowFollowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Social Media Links */}
              <div className="p-4 space-y-4">
                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#363636] hover:bg-[#404040] transition-colors">
                  <div className="flex items-center space-x-3">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-sm text-gray-400">Professional Network</div>
                    </div>
                  </div>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0095F6] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#1aa1f7] transition-colors"
                  >
                    Follow
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#363636] hover:bg-[#404040] transition-colors">
                  <div className="flex items-center space-x-3">
                    <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-sm text-gray-400">Code Repository</div>
                    </div>
                  </div>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0095F6] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#1aa1f7] transition-colors"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProfileSection 