import React from 'react'
import FeaturesCard from './FeaturesCard'
export default function Features() {
  return (
    
    <section className='grid grid-cols-1 md:grid-cols-3 place-items-center min-h-screen bg-blue-50 gap-6 py-12 px-4'>
        

        
        <FeaturesCard title="Career Recommendations" description="Get personalized job role suggestions."/>
        <FeaturesCard title="Course Recommendations" description="Find courses tailored to your growth."/>
        <FeaturesCard  title="Skill Gap Analysis" description="Identify and fill skill gaps for your dream job."/>
        
    </section>
   
  )
}
