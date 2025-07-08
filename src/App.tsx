import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Seemon Vakkala
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce">
            <img 
              src="/lovable-uploads/ce955504-7f0c-4b74-856a-b9d02a74061b.png" 
              alt="Seemon Vakkala" 
              className="w-48 h-48 rounded-full mx-auto border-4 border-gradient-to-r from-blue-400 to-purple-600 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Seemon Vakkala</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Full Stack Developer & UI/UX Designer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:scale-105 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating innovative digital solutions. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code and intuitive user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'CSS/SCSS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <div key={skill} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold">Project {project}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-gray-400 mb-4">A brief description of the project and its key features.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
                    <a href="#" className="text-blue-400 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-blue-400">📧</span>
                  <span>seemon@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400">📍</span>
                  <span>Your City, Country</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows={5}
                className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>&copy; 2024 Seemon Vakkala. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App