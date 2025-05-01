import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ProfileSection from './components/ProfileSection'
import ProjectGrid from './components/ProjectGrid'
import StoryHighlights from './components/StoryHighlights'
import ContactForm from './components/ContactForm'

const App = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      <Sidebar 
        showContactModal={showContactModal} 
        setShowContactModal={setShowContactModal} 
      />
      <main className="ml-[245px]">
        <div className="max-w-4xl mx-auto px-4">
          <ProfileSection 
            onContactClick={() => setShowContactModal(true)} 
            onMessageClick={() => setShowContactForm(true)}
          />
          <StoryHighlights />
          <ProjectGrid />
        </div>
      </main>
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </div>
  )
}

export default App 