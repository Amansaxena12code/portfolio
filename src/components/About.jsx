function About() {
  return (
    <section
  id="about"
  className="py-24 bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white px-6 relative overflow-hidden"
>
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          I'm <span className="text-blue-400 font-semibold">Aman Saxena</span>, a Computer Science
          student at Lovely Professional University. I enjoy building software
          applications and learning new technologies. My main focus is Java
          development, full-stack web development, and problem solving.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              💻 Development
            </h3>
            <p className="text-gray-400">
              Building applications using Java, React, and MySQL with strong
              focus on clean and scalable code.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              🧠 Problem Solving
            </h3>
            <p className="text-gray-400">
              Passionate about solving real-world problems and improving
              systems using efficient algorithms and logical thinking.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              🚀 Continuous Learning
            </h3>
            <p className="text-gray-400">
              Currently improving my skills in full-stack development,
              automation tools, and AI-based solutions.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">2+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">4+</h3>
            <p className="text-gray-400">Certificates</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">8+</h3>
            <p className="text-gray-400">Tech Skills</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">2023</h3>
            <p className="text-gray-400">Started B.Tech</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About