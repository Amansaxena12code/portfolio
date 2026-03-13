function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      items: ["Java", "Python", "C", "C++"],
    },
    {
      title: "Web",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Tools",
      items: ["MySQL", "Selenium", "Git", "JDBC"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 text-white px-6 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Technologies and tools I use while building projects and learning full
          stack development.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-gray-800 text-sm border border-gray-700 hover:border-blue-400 hover:text-blue-300 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;