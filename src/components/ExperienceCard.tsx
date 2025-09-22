import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ExperienceCardProps {
  name: string;
  company: string;
  link: string;
  desc: string;
  technologies: { name: string; svg: string }[];
  image: string;
}

// The ExperienceCard component is reused for each experience and fills in the information based on the given parameters

// the parameters in question:
//                        v     v        v     v     v             v
const ExperienceCard = ({ name, company, link, desc, technologies, image }: ExperienceCardProps) => {
  // A little bit about React:
  // 
  // By default, HTML is static, as in it doesn't automatically update elements when variables change
  // 
  // e.g.
  // If I have a variable count (initialized to 0) displayed and a button to increment it (+1), 
  // pressing the button won't update the count display (it will stay at 0)
  //
  // So we have frameworks such as React to update elements for us!
  
  // React 'hooks' are a feature that you can use to create 'reactive' elements that update when variables change
  
  // useState is a common example
  
  const [isExpanded, setIsExpanded] = useState(false);
  //     ^           ^ 
  //     |           function to modify state variable
  //     state variable

  // any element that uses isExpanded will update automatically when isExpanded is changed



  const maxLength = 120; // Characters to show before truncating
  const shouldTruncate = desc.length > maxLength;
  const displayDesc = shouldTruncate && !isExpanded ? desc.slice(0, maxLength) + '...' : desc;

  // return html of experience section
  return (
    <div className="w-120 bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* This is the image of the experience */}

      {/* 'a' tags in html are hyperlinks */}
      {/* href is the argument for where the link takes you */}
      {/* target="_blank" makes it so clicking the link opens a new tab instead of replacing the current tab */}
      {/* rel="noopener" prevents external site from using scripts to control previous site */}
      {/* rel="noreferrer" prevents external site from knowing which site you clicked the link from */}
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
        
        <p className="flex justify-center text-green-800 font-medium mb-3">{company}</p>
        
        <div className="mb-4">

          {/* Description */}
          <p className="text-gray-600">{displayDesc}</p>

          {/* Show More/Less button */}
          <div className="flex justify-center">
            {/* if(shouldTruncate) { show the button } else { don't show the button } */}
            {/* only have the truncation button if the text is long enough to be truncated */}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                {/* if(isExpanded) { 'Show Less' button } else { 'Show More' button } */}
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

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {/* Map in javascript is kinda like a foreach loop */}
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              <img src={tech.svg} className="object-cover rounded-lg w-10 m-2"/>
              <p className="text-lg">{tech.name}</p>
            </span>
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

export default ExperienceCard;