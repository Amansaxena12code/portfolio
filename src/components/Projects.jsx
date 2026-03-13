function Projects() {

  const projects = [
    {
      title: "Clothing Store Management System",
      description:
        "Desktop-based store management platform built using Java Swing with MySQL database and JDBC for backend operations.",
      tech: ["Java", "MySQL", "JDBC", "Java Swing"],
      github: "https://github.com/Amansaxena12code"
    },
    {
      title: "AI Gift Recommender",
      description:
        "AI-powered gift recommendation system using Streamlit and Google Gemini API for personalized suggestions.",
      tech: ["Python", "Streamlit", "Gemini API"],
      github: "https://github.com/Amansaxena12code"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Code
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;