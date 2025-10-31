import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-blue-600">NxtRole.AI</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            NxtRole.AI is an AI-powered career guidance platform that helps 
            learners and professionals discover their ideal career path. 
            We analyze your current skills, identify gaps, and generate 
            personalized learning roadmaps so you can reach your dream role faster.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to make career planning smarter and more data-driven,
            empowering individuals to make informed decisions and achieve 
            their goals with confidence.
          </p>
        </div>

        {/* Image / Illustration Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-xl flex items-center justify-center shadow-inner">
            
          </div>
        </div>
      </div>
    </section>
  );
}
