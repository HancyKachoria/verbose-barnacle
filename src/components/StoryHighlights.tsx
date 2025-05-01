import React, { useState } from 'react'
import SkillStoryModal from './SkillStoryModal'

interface Story {
  id: string
  title: string
  image: string
  slides: {
    id: string
    content: string
  }[]
}

const stories: Story[] = [
  {
    id: 'python',
    title: 'Python',
    image: '/public/images/highlights/python_new copy.png',
    slides: [
      {
        id: 'py1',
        content: 'Built 5+ projects'
      },
      {
        id: 'py2',
        content: 'GitHub ⭐ 500+'
      },
      {
        id: 'py3',
        content: 'Certified by Coursera'
      }
    ]
  },
  {
    id: 'ml',
    title: 'ML',
    image: '/public/images/highlights/ml_new copy.png',
    slides: [
      {
        id: 'ml1',
        content: 'KNN, SVM, XGBoost'
      },
      {
        id: 'ml2',
        content: 'Trained on CIFAR10'
      },
      {
        id: 'ml3',
        content: 'Papers published'
      }
    ]
  },
  {
    id: 'viz',
    title: 'Viz',
    image: '/public/images/highlights/viz_new copy.png',
    slides: [
      {
        id: 'viz1',
        content: 'Tableau & Power BI'
      },
      {
        id: 'viz2',
        content: '15+ dashboards'
      },
      {
        id: 'viz3',
        content: 'Used in 3 orgs'
      }
    ]
  }
]

const StoryHighlights = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-8 py-8 max-w-xl mx-auto">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="flex flex-col items-center cursor-pointer" 
            onClick={() => setActiveStory(story)}
          >
            <div className="bg-gradient-to-b from-pink-500 to-yellow-400 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-sm font-medium mt-2">{story.title}</span>
          </div>
        ))}
      </div>

      {activeStory && (
        <SkillStoryModal 
          story={activeStory} 
          onClose={() => setActiveStory(null)} 
        />
      )}
    </>
  )
}

export default StoryHighlights 