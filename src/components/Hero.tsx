import ProfileImage from '../assets/profilepicture.jpg';

// This is the hero section of the website
const Hero = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
    return <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Description */}
            <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Hi, I'm{' '}
                    <span className="text-blue-400">
                    Insert Name
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Cool description about yourself here!
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-3 bg-blue-300 text-white rounded-lg hover:bg-purple-400 transition-colors duration-200 font-semibold"
                        >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 border-2 border-green-300 text-green-300 rounded-lg hover:bg-green-300 hover:text-white transition-colors duration-200 font-semibold"
                        >
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="lg:w-1/2"> 
                <div className="relative w-80 mx-auto">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-300 to-green-300 p-1">
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Hero;