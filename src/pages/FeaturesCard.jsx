import React from "react";

export default function FeaturesCard({title,description}) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
    
  )
}
