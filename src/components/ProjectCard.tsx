import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  name: string;
  link: string;
  desc: string;
  tech: string[];
  image: string;
}

// Similar to Experience card, but for projects
const ProjectCard = ({ name, link, desc, tech, image }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120; // Characters to show before truncating
  const shouldTruncate = desc.length > maxLength;
  const displayDesc = shouldTruncate && !isExpanded ? desc.slice(0, maxLength) + '...' : desc;

  return (
    <div className="w-120 bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>
      
      <div className="p-6">
        <div className="flex justify-center items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        </div>

        <div className="mb-4">
          <p className="flex justify-center text-gray-600">{displayDesc}</p>
          <div className="flex justify-center">
            {shouldTruncate && (
                <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                {isExpanded ? (
                    <>
                    Show Less <ChevronUp size={16} />
                    </>
                ) : (
                    <>
                    Show More <ChevronDown size={16} />
                    </>
                )}
                </button>
            )}
          </div>
          
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {tech.map(t => (
              <img src={t} className="object-cover rounded-lg w-10 m-2"/>
          ))}
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;