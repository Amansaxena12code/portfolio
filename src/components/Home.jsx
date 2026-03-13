import { FaGithub, FaLinkedin } from "react-icons/fa"
import amanphoto from "../assets/amanphoto.jpg"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Left Side Text */}
        <div className="text-center md:text-left">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Aman Saxena 👋
          </h1>

          <p className="text-xl mb-6 text-gray-300">
            Java Developer | Full-Stack Web Developer | Automation Engineer | Database Enthuasist
          </p>

          <div className="flex gap-4 justify-center md:justify-start">

            <a
              href="https://github.com/Amansaxena12code"
              target="_blank"
              className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman813063"
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right Side Profile Photo */}
        <div className="flex justify-center">

          <img
            src={amanphoto}
            alt="Aman Saxena"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
          />

        </div>

      </div>

    </section>
  )
}

export default Home