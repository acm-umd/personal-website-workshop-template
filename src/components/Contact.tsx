import { Mail, MapPin } from 'lucide-react';

import GithubIcon from '../assets/icons/github-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg';

// Contact information component footer put at the bottom of the page
const Contact = () => {
    return <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2>boop boop boop ^-^</h2>
        </div>
        
        {/* This section contains the contact information */}
        {/* Feel free to add/remove stuff and change it how you like it. */}
        <div className="md:flex justify-around sm:flex-row">

            {/* Insert your email here! */}
            <div className="flex mx-10 items-center gap-4 my-3">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">...@gmail.com</p>
                </div>
            </div>
            
            {/* Insert location! */}
            <div className="flex mx-10 items-center gap-4 my-3">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">City, State</p>
                </div>
            </div>

            {/* Insert your Github here! */}
            <a className="flex mx-10 items-center gap-4 my-3" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <img className="w-8 h-8" src={GithubIcon} ></img>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 text-xl">Github</h3>
                </div>
            </a>

            {/* Insert your LinkedIn here! */}
            <a className="flex mx-10 items-center gap-4 my-3" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <img className="w-8 h-8" src={LinkedInIcon} ></img>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 text-xl">LinkedIn</h3>
                </div>
            </a>

        </div>
    </div>;
};

export default Contact;
